//$('select').click().show(1500);
// $( 'select' ).click(function(){
//   console.log($(this));
//   $(this).after("WOW")
// });

$('#accordian').

$( 'select' ).hover(

    function(){
      event.preventDefault();
      console.log('CONSOLE LOG');
      console.log($(this));
   
      $(this).trigger("click");
    }

);

$('option').hover(
  function(){
    event.preventDefault();
    $(this).css("background-color","green")
  })
