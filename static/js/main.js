/* global $ hljs window */
$(document).ready(function (e) {
  // press h goto home
  $('body').on('keydown', function (e) {
    var keyCode = e.keyCode || e.which
    console.log(keyCode)
    if (keyCode === 81) {
      window.location.href = '/'
    }
  })

  // add Responsive Image to `img` tag
  $('img').addClass('img-fluid')
  $('table').addClass('table table-hover table-sm table-responsive')
  $('thead').addClass('thead-dark')
  // Enable HighlightJS
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
  // Hidden navbar when scroll down, will show when scroll up
  var previousScroll = 0
  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop()
    if (currentScroll > 0 && currentScroll < $(document).height() - $(window).height()) {
      if (currentScroll > previousScroll) {
        window.setTimeout(function () {
          $("[data-nav-status='toggle']").removeClass('is-visible').addClass('is-hidden')
        }, 300)
      } else {
        window.setTimeout(function () {
          $("[data-nav-status='toggle']").removeClass('is-hidden').addClass('is-visible')
        }, 300)
      }
      previousScroll = currentScroll
    }
  })
})
