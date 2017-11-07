/* global $ fetch lunr */
var pageIndex, lunrIndex, searchResult

function initLunr (cb) {
  fetch('/index.json')
  .then((response) => {
    return response.json()
  })
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

initLunr(function () {
  $('#search-box').focus()
  listenNatvigatorKey()
  $(document).ready(listenQuery)
})

function listenNatvigatorKey () {
  const keyList = [{
    keyCode: 74, // k
    action: 'down'
  }, {
    keyCode: 75, // k
    action: 'up'
  }, {
    keyCode: 13, // enter
    action: 'go'
  }]

  $(document).on('keydown', function (e) {
    // You may replace `c` with whatever key you want
    const keyCode = e.keyCode || e.which
    const key = keyList.filter(obj => obj.keyCode === keyCode)[0]
    if ((e.metaKey) && key) {
      natvigateResultList(key.action)
    }
  })
}

function natvigateResultList (action) {
  var $active = $('div.active')
  var $list = $('.search-result-list')
  switch (action) {
    case 'down':
      toggleActive($active)
      var $next = $active.next()
      toggleActive($next)

      if ($active.next().length === 0) {
        toggleActive($list.eq(0))
      }
      break
    case 'up':
      toggleActive($active)
      var $prev = $active.prev()
      toggleActive($prev)

      if ($prev.length === 0) {
        toggleActive($list.eq(-1))
      }
      break
    case 'go':
      const link = $('.active a').attr('href')
      if (link) {
        window.location.href = link
      }
      break
    default:
  }
}

function toggleActive (el) {
  el.toggleClass('active')
  el.find('.text-muted, .text-light').toggleClass('text-muted text-light')
  el.find('.badge-secondary, .badge-light').toggleClass('badge-secondary badge-light')
}

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
  var searchBox = $('#search-box')
  searchBox.on('input focus', () => {
    var query = searchBox.val().toLowerCase()
    searchResult = search(query)
    displaySearchResults(searchResult, pageIndex)
  })
}

function displaySearchResults (results, pageIndex) {
  var listItems = results.map(({index, date, uri, title, tags}, key) => {
    const active = key === 0 ? 'active' : ''
    const muted = key !== 0 ? 'text-muted' : 'text-light'
    const badge = key === 0 ? 'badge-light' : 'badge-secondary'

    var badges = tags.map((word) => `<a href="/tags/${word}" class='badge badge-pill ${badge}'>${word}</a>`).join(' ')
    return `
    <div 
      id='list-${key}'
      class="search-result-list list-group-item list-group-item-action flex-column align-items-start ${active}">

      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"><a class="${muted}" href="${uri}">${title}</a></h5>
        <small>${date}</small>
      </div>
      <p class='mb-0'>
        <a class="${muted}" href="${uri}"> ${uri.replace(window.location.origin, '')} </a>
      </p>
      <small>
        ${badges}
      </small>
    </div>`
  }).join('')

  $('#search-result').html(`<div class="list-group">${listItems}</div>`)
}
