// var max_chars = 12;
// $('.input-phone-modal').keydown(function(e){
//   if ($(this).val().length >= max_chars) { 
//     $(this).val($(this).val().substr(0, max_chars));
//   }
// });
 
// $('.input-phone-modal').keyup(function(e){
//   if ($(this).val().length >= max_chars) { 
//     $(this).val($(this).val().substr(0, max_chars));
//   }
// });

$(function() {
  $("#phone").mask("+7(999) 999-9999");
  $(".input-date").mask("99.99.9999")
 });