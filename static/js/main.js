/* global $ hljs */

// Enable HighlightJS
$(document).ready(function (e) {
  $('pre code').each(function (i, block) {
    hljs.highlightBlock(block)
  })
})

// add Responsive Image to `img` tag
$(document).ready(function () {
  $('img').addClass('img-fluid')
})

// Hidden navbar when scroll down, will show when scroll up
$(document).ready(function () {
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
