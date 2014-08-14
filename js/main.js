$(document).ready(function() {

  $('li').each(function(index, item) {
    $(item).mouseenter(function() {
      $('#wtc-img').attr('src', "img/wtc_" + (index + 1) + ".png")
      $(item).css('color', 'blue')
      $(item).css('font-weight', 'bold')
    })

    $(item).mouseleave(function() {
      $('#wtc-img').attr('src', "img/wtc_0.png")
      $(item).css('color', 'black')
      $(item).css('font-weight', 'normal')
    })
  })

  
})