function scrollItems(clas) {
   var offset = 30;
   $('body').animate({
      scrollTop: $(clas).offset().top - offset
   }, 2000)
}
$(function(){
   $(window).scroll(function () {
      if ($(window).scrollTop() > 650) {
         $('.doing__right').addClass('show');
      }
      else {
         $('.doing__right').removeClass('show');
      }
   });
   
$(window).scroll(function () {
   if ($(window).scrollTop() > 1350) {
      $('.about__left').addClass('show');
   }
   else {
      $('.about__left').removeClass('show');
   }
});
   $(window).scroll(function () {
   if ($(window).scrollTop() > 2050) {
      $('.works__left,.works__right').addClass('show');
   }
   else {
      $('.works__left,.works__right').removeClass('show');
   }
});
      $(window).scroll(function () {
   if ($(window).scrollTop() > 3200) {
      $('.contact__wrap').addClass('show');
   }
   else {
      $('.contact__wrap').removeClass('show');
   }
});
});
