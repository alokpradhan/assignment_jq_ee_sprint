function createBoxFrame(){
  $('#box').css({
    'left': event.clientX-50,
    'top': event.clientY-50,
    'height': '100px',
    'width': '100px',
    'border': '6px solid white',
    'position' : 'absolute'
  });
}

function addBoxOnImage(){
  $('img').after('<div id="box"></div>');
  $(this).mousemove(createBoxFrame);
}

function createPersonSelector(){
  $('#box').append('<div id="person-selector"><li>Person 1</li><li>Person 2</li><li>Person 3</li></div>');

  $('#person-selector').css({ 'width':'100px',
                              'top': '100px',
                              'left': '-6px',
                              'background-color': 'white',
                              'position' : 'absolute',
                              'border': '6px solid white'
                            });
}

// Creates a box that moves with a mouse
$('#image-container').mouseenter(addBoxOnImage);

// Freezes box and show choice on click
$('#image-container').click(function(){
  // Turns off mousemove and mouseenter to prevent moving box
    $(this).off('mousemove', createBoxFrame)
    .off('mouseenter', addBoxOnImage);
  // Adds a list of choices
    if ($('#person-selector').length === 0) {
      createPersonSelector();
    }
});

// Creates a box after clicking out
$('img').click(function(event){
  event.stopPropagation();
  $('#box').remove();
  $('img').after('<div id="box"></div>');
  $('#image-container').mousemove(createBoxFrame);
});

// On the mouse leaving image remove box and person selector
$('#image-container').mouseleave(function(){
  $('#box').remove();
  $('#person-selector').remove();
});

$('body').on("mouseenter","#person-selector li", function(event){

  $(this).css("background-color","green");

  $(this).click(function(){
    $(this).siblings().remove();
    $new_box = $('img').after($('#box').clone().prop('id', 'fixed-box'));
    // $new_box.after($('#person-selector').clone().prop('id', 'fixed-person'));
  });

  }).on("mouseleave","#person-selector li", function(){
  $(this).css("background-color","white");
});


