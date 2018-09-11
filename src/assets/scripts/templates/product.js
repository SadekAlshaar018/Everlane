import '../sections/product';

import $ from 'jquery';
import sections from '@shopify/theme-sections';

$(document).ready(() => {
  sections.load('product');
});

var stickymenu = document.getElementById("stickymenu")
var stickymenuoffset = stickymenu.offsetTop
var scrolltimer

window.addEventListener("scroll", function(e){
requestAnimationFrame(function(){

  if (window.pageYOffset > 100 ){

    stickymenu.classList.add('sticky');

  }
    console.log(window.pageYOffset);
})
})
