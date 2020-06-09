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