---
data_file: contact
---

// this file includes all partials and js it needs
// TODO: add webpack to minify or just minify these files


$(document).ready(function() {
  {% include partial_assets/javascript_partials.js %}
  $('input[type=text], input[type=email], textarea').focus((e)=>{
    console.log('focues')
    $(e.target).closest('.input-wrapper').addClass('focus');
  });
  $('input[type=text], input[type=email], textarea').focusout((e)=>{
    console.log('focues')
    $(e.target).closest('.input-wrapper').removeClass('focus');
  });
});
