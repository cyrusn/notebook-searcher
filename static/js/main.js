/* global $ window Paginator navLinks pageKind */
$(document).ready(e => {
  listenKeys()

  $('img').addClass('img-fluid')
  $('pre').addClass('rounded')
  $('table').addClass('table table-hover table-sm table-bordered')
  $('th, td').addClass('p-2')
  $('thead').addClass('thead-dark text-center')
  $('blockquote')
    .addClass('blockquote ml-5 px-4 py-2 lead border-info bg-light ')
    .css('border-left', '6px solid')
  $('blockquote footer').addClass('blockquote-footer text-right')
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
    case (keyCode === 76 && hasNext && !onFocus): // l
      window.location.pathname = nextPage
      break
    case (keyCode === 72 && hasPrev && !onFocus): // h
      window.location.pathname = prevPage
      break
    case (keyCode === 81 && !onFocus): // q
      window.location.href = '/'
      break
    case (keyCode === 74 && !onFocus): // j
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
    case (keyCode === 75 && !onFocus): // k
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
