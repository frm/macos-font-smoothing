'use strict';

var html = document.getElementsByTagName('html')[0];
var style = window.getComputedStyle(html);

if(style.webkitFontSmoothing == 'auto') {
  html.style.webkitFontSmoothing = 'antialiased';
}
