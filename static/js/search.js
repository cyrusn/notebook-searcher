/* global $ fetch lunr _ */
var pageIndex, lunrIndex

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
  listenQuery()
})

function search (query) {
  return lunrIndex.search(query)
  .map(result => {
    return Object.assign({
      score: result.score
    }, pageIndex[result.ref], {content: ''})
    
  })
  .filter(a => a.score > 0.2)
}

function listenQuery () {
  $('#search-box').on('input keydown focus', function () {
    const query = $(this).val().toLowerCase()
    const results = search(query)
    displaySearchResults(results, pageIndex)
  })
}

function displaySearchResults (results, pageIndex) {
  var listItems = results.map(({index, date, uri, title, tags}) => {
    var badges = tags.map(word => `<a href="/tags/${word}" class='badge badge-pill badge-secondary'>${word}</a>`).join(' ')

    return `<div 
      id='${index}'
      class="list-group-item list-group-item-action list-group-item-light">
      <div class="d-flex w-100 justify-content-between">
        <h5 class="mb-1"><a class="text-muted" href="${uri}">${title}</a></h5>
        <small>${date}</small>
      </div>
      <p class='mb-0'>
        <a class="text-muted" href="${uri}"> ${uri.replace(window.location.origin, '')} </a>
      </p>
      <small>
        ${badges}
      </small>
    </div>`
  }).join('')

  $('#search-result').html(`<div class="list-group">${listItems}</div>`)
}
