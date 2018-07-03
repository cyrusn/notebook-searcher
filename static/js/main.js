/* global $ window Paginator navLinks pageKind */
$(document).ready(e => {
  listenKeys()
  $('[data-toggle="tooltip"]').tooltip({
    html: true
  })

  $('#TableOfContents ul').addClass('nav flex-column nav-pills')
  $('#TableOfContents li').addClass('nav-link pt-2 pb-0 pr-0')
  $('#TableOfContents a').addClass('nav-link py-0 px-2 text-muted border-danger')

  $('img').addClass('img-fluid img-thumbnail')
  $('pre').addClass('rounded')
  $('table').addClass('table table-hover table-sm table-bordered')
  $('th td').addClass('p-2')
  $('thead').addClass('thead-dark text-center')
  $('blockquote h1').addClass('text-info')
  $('blockquote')
    .addClass('blockquote pl-4 pr-2 py-2 my-3 lead border-info bg-light rounded')
    .css('border-left', '6px solid')
  $('blockquote footer').addClass('blockquote-footer text-right')
  $('iframe')
    .addClass('img-thumbnail')
    .parent('div').addClass('mb-4')

  // scroll overflowed toc to 1/3 of window height
  $(window).on('activate.bs.scrollspy', function () {
    // trigger only #TableOfContents is found
    if ($('#TableOfContents').length) {
      let pos = $('li > a.active').last().position()
      let h = $(window).height()
      $('#TableOfContents').scrollTop(pos.top - h / 3)
    }
  })
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
    case (keyCode === keycodes(']') && !onFocus): // ]
      navLinks.forEach((link, key, array) => {
        if (link === window.location.pathname) {
          const index = (key + 1) % navLinks.length
          window.location.pathname = array[index]
        }
      })
      break
    case (keyCode === keycodes('[') && !onFocus):
      navLinks.forEach((link, key, array) => {
        if (link === window.location.pathname) {
          const index = (key + navLinks.length - 1) % navLinks.length
          window.location.pathname = array[index]
        }
      })
      break
    case ((keyCode === keycodes('l')) && hasNext && !onFocus):
      window.location.pathname = nextPage
      break
    case ((keyCode === keycodes('h')) && hasPrev && !onFocus):
      window.location.pathname = prevPage
      break
    case (keyCode === keycodes('q') && !onFocus):
      window.location.href = '/'
      break
    case ((keyCode === keycodes('j')) && !onFocus):
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
    case ((keyCode === keycodes('k')) && !onFocus):
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
    case (keyCode === keycodes('space') && !onFocus):
      event.preventDefault()
      if (isDisabled) {
        searchBox.prop('disabled', false)
        searchBox.focus()
      }
      break
    case (keyCode === keycodes('enter') && !onFocus):
      const link = $('.list-group-item.active a').attr('href')
      if (link) {
        window.location.href = link
      }
      break
    case (keyCode === keycodes('enter')): // enter
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
    target: '.text-muted, .text-light',
    clazz: 'text-muted text-light'
  }, {
    target: '.badge-info, .badge-light',
    clazz: 'badge-info badge-light'
  }]

  arr.forEach(({target, clazz}) => {
    el.find(target).toggleClass(clazz)
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
