/* global $ fetch lunr */

var pageIndex, lunrIndex

function initLunr (cb) {
  fetch(baseURL + '/index.json')
    .then(response => response.json())
    .then(data => {
      pageIndex = data
      lunrIndex = lunr(function () {
        this.ref('index')
        this.field('title')
        this.field('tags')
        this.field('filename')

        pageIndex.forEach(function (doc) {
          this.add(doc)
        }, this)
      })
    })
    .then(cb)
}

initLunr(() => {
  $(document).ready(listenQuery)
})

function listenQuery () {
  $('#search-box')
    .on('input focus', searchAndDisplayResults)
    .focus()
}

function search (query) {
  return lunrIndex.search(query)
    .map(result => {
      return Object.assign({
        score: result.score
      }, pageIndex[result.ref])
    })
}

function searchAndDisplayResults (event) {
  // do nothing if no input in search field
  if (!event.target.value) {
    displaySearchResults([])
    return
  }
  const searchResult = search(event.target.value)
  displaySearchResults(searchResult)
}

function setClass (n) {
  if (n !== 0) {
    return {
      active: '',
      text: 'text-muted',
      badge: 'badge badge-info'
    }
  }

  return {
    active: 'active',
    text: 'text-light',
    badge: 'badge badge-light'
  }
}

function displaySearchResults (results) {
  let listItems = results.map(({draft, lastmod, uri, title, tags}, n) => {
    const {active, text, badge} = setClass(n)
    const badges = tags.map(word => `<a href="/tags/${word}" class='${badge}'>${word}</a>`)

    if (draft) {
      badges.unshift(`<span class="badge badge-danger">draft</span>`)
    }

    return `
    <div
      id='list-${n}'
      class="list-style list-group-item list-group-item-action flex-column align-items-start ${active}">

      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"><a class="${text}" href="${uri}">${title}</a></h5>
        <small>${lastmod}</small>
      </div>
      <p class='mb-0'>
        <a class="${text}" href="${uri}"> ${uri.replace(window.location.origin, '')} </a>
      </p>
      <small>
        ${badges.join(' ')}
      </small>
    </div>`
  }).join('')

  $('#search-result').html(`<div class="list-group">${listItems}</div>`)
}
