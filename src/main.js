import "./components/external-link";
import {sleep, animation} from "./functions"
const $ = require("jquery")

window.addEventListener('DOMContentLoaded',()=>{
  $('.arrow-bottom').click(function(){
    const $nowContainer = $(this).parents('.container');
    animation($nowContainer, $nowContainer.next())
  })
  $('.arrow-top').click(function(){
    const $nowContainer = $(this).parents('.container');
    animation($nowContainer, $nowContainer.prev(), true)
  })
})

window.addEventListener('load',async ()=>{
  $('.container#loader').fadeOut(500).removeClass("showing")
  $('.container#start').addClass("showing").css({opacity: 0}).animate({opacity: 1},500)
  $('#scrollbar_thumb').animate({height: window.innerHeight / $('.container').not('#loader').length}, 500)
  await sleep(600)
  $('.container').removeAttr("style")
})