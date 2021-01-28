$(function() {
  $(".phone").mask("+7(999) 999-99-99");
 });

$(function(){
  $('.input-date').daterangepicker({
   singleDatePicker: true,
   autoUpdateInput: false,
   autoApply: true,
   locale: {
    cancelLabel: 'Clear',
    format: 'DD.MM.YYYY',
    autoclose: true,
   }
  });
  
  $('.input-date').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('DD.MM.YYYY'));
  });

  $('.input-date').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
 });