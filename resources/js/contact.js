---
data_file: contact
---

// this file includes all partials and js it needs
// TODO: add webpack to minify or just minify these files


onSubmitForm = function(){
  console.log('before')
}

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

  function validateForm(){
    let $name = $('#contact-location form .name');
    let hasError = false;
    // check name
    if($name.val().length < 1) {
      $name.addClass('error');
      hasError = true;
    }
    else $name.removeClass('error');
    // check email
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    $email = $('#contact-location form .email');
    if(!re.test($email.val())){
      $email.addClass('error');
      hasError = true;
    }
    else $email.removeClass('error');

    return hasError;
  }

  $('#contact-location form').on('submit', function (e) {
    e.preventDefault();
    if(validateForm()) return false;
    $.ajax({
      type: 'post',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSeHcA40ILQO7pwooU6ovoLtQd_kzeUeFSiNUTLk73ERrEL9hA/formResponse',
      data: $('#contact-location form').serialize(),
      success: function () {
        console.log('success')
        $('#contact-location form')[0].reset();
        $('#contact-location .state').text('Success!');
      }
    });
  });

  onSubmitForm = function(){
    console.log('after');
  }
});
