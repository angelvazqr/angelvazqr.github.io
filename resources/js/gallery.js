---
data_file: gallery
---

// this file includes all partials and js it needs
// TODO: add webpack to minify or just minify these files


$(document).ready(function() {
  {% include partial_assets/javascript_partials.js %}
  // image onclick enlarge
  let isFullImage = false;
  $('.page-container-full .card').click((e) => {
    isFullImage = true;
    const image_source = $(e.target).closest('img').attr('src');
    $('.full-image .full-image-wrapper img').attr('src', image_source);
    $('.full-image').fadeIn(400);
  });
  $('.full-image').click((e) => {
    isFullImage = false;
    $('.full-image').fadeOut(400);
  });
});
