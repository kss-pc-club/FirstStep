const $ = require("jquery");

window.addEventListener("DOMContentLoaded",()=>{
  $('body').append('<div class="modal_back"><img></div>')

  $('.modal_back img').click(function(){
    window.open($(this).attr("src"));
  })

  $('.modal_back').click(function(){
    $(this).removeClass("showing");
  })

  $('.imgContainer img').click(function(){
    $('.modal_back img').attr('src',$(this).attr("src"))
    $('.modal_back').addClass('showing')
  })
})