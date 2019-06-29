// if(location.hash == '#fade'){
//   $('.full-background-intro').fadeOut(0);
//
// }

$('.full-background-intro .enter-arrow').click(()=>{
  $('.full-background-intro').fadeOut(400);
  history.pushState('home', "Home", "/home");
})
