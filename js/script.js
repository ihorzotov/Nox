$(document).ready(function() {

  $('.js-togle').on('click', function() {
    $(this).parents('.js-togle-parent').toggleClass('active');
  });

  // modal image source
  $('.js-img-modal').on('click', function() {
    var source = $(this).attr('style').replace('background-image: ','');

    $('.modal-zoom__image').attr('src', source.slice(5, source.length - 3 ) );
    $('.modal-zoom').addClass('active');
  });
  // document click == close modal
  $(document).on('click', function(event){
    var if_neededelement = $(event.target).parents('.modal-zoom__image').length,
        if_thisbutton = $(event.target).hasClass('js-img-modal')? true: $(event.target).parents('.js-img-modal').length > 0? true: false;

    if(!if_thisbutton && !if_neededelement){
      $('.modal-zoom').removeClass('active');
    }
  });
  $(document).on('click', function(event){
    var if_neededelement = $(event.target).parents('.dropdown-menu__content').length,
        if_thisbutton = $(event.target).hasClass('dropdown-menu')? true: $(event.target).parents('.dropdown-menu').length > 0? true: false;

    if(!if_thisbutton && !if_neededelement){
      $('.dropdown-menu').removeClass('active');
    }
  });
  $('.footer-arrow').on('click', function() {
    $('body').toggleClass('active-footer');
  });

function showHistoryText (){
 var currentAttr = $('.history-nav__item.active').attr('data-target');

 setTimeout(function(){
  $('.history-tab[data-target='+ currentAttr +']').find('.history-tab__description').addClass('active');
 },300);
};
showHistoryText();

$(".history-nav__item").on('click', function(){
  var attribute = $(this).attr('data-target');
  $('.history-nav__item').removeClass('active');
  $(this).addClass('active');
  $('.history-tab').not('.history-tab[data-target='+ attribute +']').fadeOut( 1000 );
  $('.history-tab[data-target='+ attribute +']').fadeIn( 1000 );
  showHistoryText ();
});


// form fields check
$('.form-number').on('change',function(){
  var mobileNumber = $('.form-number').val(),
      regex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$"),
      phoneCheck = regex.test(mobileNumber),
      parents = $('.form-number').parents('.form__label');

  if (phoneCheck || mobileNumber === '') {
    parents.removeClass('error');
  }else {
    parents.addClass('error').find('.error__text').text('Введен неверный формат номера');
  }
});

function doValidation( errorArray ){
  var emailValue = $('.form-email').val(),
      inputValue = false,
      emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailValue);

  $('.form-important').each(function(key,item){
    var value = $(item).val();

    if (value === '') {
      $(item).parents('.form__label').addClass('error').find('.error__text').text('Поле обязательно для заполнения');
      errorArray.push(false);
    }else{
      $(item).parents('.form__label').removeClass('error')
    }
    if( !emailRegex && value !== '' ){
      $('.form-email').parents('.form__label').addClass('error').find('.error__text').text('Введен неверный Email'); 
      errorArray.push(false);
    }
  });
};
$('.form-send__button').on('click',function(event){
  event.preventDefault();
  var errorArray = [];

  doValidation( errorArray );

  if(errorArray.length === 0 ) {
    $( ".js-notification-form" ).submit();
  }
});
//
$('.hamburger').on('click',function(){
  $(this).parents('.header').toggleClass('active');
  $('html').toggleClass('overflow');
});

$('.section-presentation circle').on('click',function(){
  var parent = $(this).parents('.tec-item');
  $('.tec-item').not(parent).removeClass('active');
  parent.toggleClass('active');
});


});//document ready