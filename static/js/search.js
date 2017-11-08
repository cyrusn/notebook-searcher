/* global $ fetch lunr */
var pageIndex, lunrIndex, searchResult

function initLunr (cb) {
  fetch('/index.json')
  .then(response => response.json())
  .then(data => {
    pageIndex = data
    lunrIndex = lunr(function () {
      this.ref('index')
      this.field('title', {boost: 15})
      this.field('tags', {boost: 10})
      this.field('description', {boost: 5})
      this.field('content', {boost: 5})

      pageIndex.forEach(function (doc) {
        this.add(doc)
      }, this)

      this.pipeline.remove(this.stemmer)
    })
  })
  .then(cb)
}

initLunr(() => {
  $('#search-box').focus()
  $(document).ready(listenQuery)
})

function search (query) {
  return lunrIndex.search(query)
  .map(result => {
    return Object.assign({
      score: result.score
    }, pageIndex[result.ref], {content: ''})
  })
  .filter(a => a.score > 0.1)
}

function listenQuery () {
  let searchBox = $('#search-box')
  searchBox.on('input', () => {
    let query = searchBox.val().toLowerCase()
    searchResult = search(query)
    displaySearchResults(searchResult, pageIndex)
  })
}

function displaySearchResults (results, pageIndex) {
  let listItems = results.map(({draft, index, date, uri, title, tags}, key) => {
    const active = key === 0 ? 'active' : ''
    const muted = key !== 0 ? 'text-muted' : 'text-light'
    const badge = key === 0 ? 'badge-light' : 'badge-secondary'
    const badges = tags.map((word) => `<a href="/tags/${word}" class='badge ${badge}'>${word}</a>`)
    if (draft) {
      badges.unshift(`<span class="badge badge-danger">draft</span>`)
    }
    return `
    <div
      id='list-${key}'
      class="list-group-item list-group-item-action flex-column align-items-start ${active}">

      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"><a class="${muted}" href="${uri}">${title}</a></h5>
        <small>${date}</small>
      </div>
      <p class='mb-0'>
        <a class="${muted}" href="${uri}"> ${uri.replace(window.location.origin, '')} </a>
      </p>
      <small>
        ${badges.join(' ')}
      </small>
    </div>`
  }).join('')

  $('#search-result').html(`<div class="list-group">${listItems}</div>`)
}
