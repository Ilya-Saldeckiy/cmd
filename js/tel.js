var max_chars = 10;
$('.input-phone-modal').keydown(function(e){
  if ($(this).val().length >= max_chars) { 
    $(this).val($(this).val().substr(0, max_chars));
  }
});
 
$('.input-phone-modal').keyup(function(e){
  if ($(this).val().length >= max_chars) { 
    $(this).val($(this).val().substr(0, max_chars));
  }
});