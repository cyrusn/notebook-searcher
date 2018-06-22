/* global $ window Paginator navLinks pageKind */
$(document).ready(e => {
  listenKeys()

  $('[data-toggle="tooltip"]').tooltip({
    html: true
  })

  $('#TableOfContents ul').addClass('nav flex-column nav-pills')
  $('#TableOfContents li').addClass('nav-link pt-2 pb-0 pr-0')
  $('#TableOfContents a').addClass('nav-link py-0 px-2 text-muted border-danger')

  // scroll overflowed toc to 1/3 of window height
  $(window).on('activate.bs.scrollspy', function () {
    let x = $('li > a.active').last().position()
    let h = $(window).height()
    $('#TableOfContents').scrollTop(x.top - h / 3)
  })

  $('img').addClass('img-fluid img-thumbnail')
  $('pre').addClass('rounded')
  $('table').addClass('table table-hover table-sm table-bordered')
  $('th td').addClass('p-2')
  $('thead').addClass('thead-dark text-center')
  $('blockquote')
    .addClass('blockquote pl-4 pr-2 py-2 my-3 lead border-info bg-light rounded')
    .css('border-left', '6px solid')
  $('blockquote footer').addClass('blockquote-footer text-right')
  $('iframe')
    .addClass('img-thumbnail')
    .parent('div').addClass('mb-4')
})

function listenKeys () {
  $(document).on('keydown', event => {
    const {keyCode, which} = event
    navigate(keyCode || which, event)
  })
}

function navigate (keyCode, event) {
  // console.log(keyCode)
  let $active = $('div.active')
  let $list = $('.list-group-item')
  const onFocus = $('#search-box').is(':focus')
  const searchBox = $('#search-box')
  const isDisabled = searchBox.prop('disabled')
  const {hasNext, hasPrev, nextPage, prevPage} = Paginator

  switch (true) {
    case (keyCode === 221 && !onFocus): // ]
      navLinks.forEach((link, key, array) => {
        if (link === window.location.pathname) {
          const index = (key + 1) % navLinks.length
          window.location.pathname = array[index]
        }
      })
      break
    case (keyCode === 219 && !onFocus): // [
      navLinks.forEach((link, key, array) => {
        if (link === window.location.pathname) {
          const index = (key + navLinks.length - 1) % navLinks.length
          window.location.pathname = array[index]
        }
      })
      break
    case ((keyCode === 76 || keyCode === 39) && hasNext && !onFocus): // l
      window.location.pathname = nextPage
      break
    case ((keyCode === 72 || keyCode === 37) && hasPrev && !onFocus): // h
      window.location.pathname = prevPage
      break
    case (keyCode === 81 && !onFocus): // q
      window.location.href = '/'
      break
    case ((keyCode === 74 || keyCode === 40) && !onFocus): // j
      if (pageKind === 'page') {
        scrollPage('down', 80)
      } else {
        toggleActive($active)
        const $next = $active.next()

        if ($next.length === 0) {
          toggleActive($list.eq(0))
        } else {
          toggleActive($next)
        }
        scrollActiveListToCenter()
      }
      break
    case ((keyCode === 75 || keyCode === 38) && !onFocus): // k
      if (pageKind === 'page') {
        scrollPage('up', 80)
      } else {
        toggleActive($active)
        const $prev = $active.prev()

        if ($prev.length === 0) {
          toggleActive($list.eq(-1))
        } else {
          toggleActive($prev)
        }
        scrollActiveListToCenter()
      }
      break
    case (keyCode === 32 && !onFocus): // "space"
      event.preventDefault()
      if (isDisabled) {
        searchBox.prop('disabled', false)
        searchBox.focus()
      }
      break
    case (keyCode === 13 && !onFocus): // enter
      const link = $('.list-group-item.active a').attr('href')
      if (link) {
        window.location.href = link
      }
      break
    case (keyCode === 13): // enter
      event.preventDefault()
      if (!isDisabled) {
        searchBox.prop('disabled', true)
      }
      break
    default:
  }
}

function scrollActiveListToCenter () {
  $('.list-group-item.active')[0]
    .scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest'
    })
}

function toggleActive (el) {
  el.toggleClass('active')

  const arr = [{
    from: '.text-muted, .text-light',
    to: 'text-muted text-light'
  }, {
    from: '.badge-secondary, .badge-light',
    to: 'badge-secondary badge-light'
  }]

  arr.forEach(({from, to}) => {
    el.find(from).toggleClass(to)
  })
}

function scrollPage (direction, value) {
  let directedValue
  switch (direction) {
    case 'down':
      directedValue = value
      break
    case 'up':
      directedValue = -value
      break
    default:
  }

  let y = $(window).scrollTop()
  $(window).scrollTop(y + directedValue)
}
