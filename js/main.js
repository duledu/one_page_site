var winHeight;
var footerHeight;
var sectionId;
var sectionPosition;
var fromTop;
var mainHeader = $(".main-header");

function sectionHeight() {
winHeight = $(window).height();
footerHeight = $('.main-footer').outerHeight();

$('#home, #about, #gallery').css('min-height', winHeight);
$('#contact').css('min-height', winHeight - footerHeight);



};
sectionHeight();
$(window).on('resize', function () {
  sectionHeight();
});

// Navigacija

$('nav, .nav-button').on('click', function () {
  $('nav').fadeToggle(400);
  $('.nav-button').toggleClass('white');
});
// smooth scroll

$('nav a').on('click', function (e) {
  e.preventDefault();


  //preuzimanje Id-ja sekcije
  sectionId = $(this).attr('href');
  sectionPosition = $(sectionId).offset().top;

  $('html, body').animate({
     scrollTop : sectionPosition
  }, 1000);

});

// Sakupljanje headera na scrollTop

$(window).on('scroll', function () {
  fromTop = $(window).scrollTop();
  console.log(fromTop);

if (fromTop > 100) {
  mainHeader.addClass('change-header');

}else {
  mainHeader.removeClass('change-header');
}
});


// Plagins
$('#contact-form').validate();

$('#gallery .img-holder a').magnificPopup({
  type : 'image',
  gallery : {
    enabled : true
  }
});
