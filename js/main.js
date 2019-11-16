$(function()
{
 var hd= $('header').width();
 console.log(hd);
 $(window).scroll(function()
 {
     if($(window).scrollTop() > $('header').offset().top)
     {
         $('.nav').addClass('navbar');
         $('.navbar').css({
            'height':'70px'
         });
     }
     else
     {
        $('.nav').removeClass('navbar')
     }

   //   $('.timer').countTo({
   //    from: 0,
   //    to: 250,
   //    speed: 2000
   // });
   // $(window).off('scroll')

 });


  $('.second-author').hide();
  $('.sec-btn').click(function()
  {
     $('.second-author').show().siblings('.first-author').hide();
  });
  $('.fs-btn').click(function()
  {
     $('.first-author').show().siblings('.second-author').hide();
  });

//   $('.item p').slideUp()
// //   $('.item h3').click(function()
// //   {
// //       $('.item p').slideToggle().siblings('p').slideUp()
// //   });
// $('.item h3').each(function(){
//  $(this).click(function()
//  {
//     $('.item .item-details p').slideToggle().sibling().find('.item-details p').slideUp()
//  })
// });

   $('.item h3').click(function()
   {
         $(this).next().slideToggle();
         $('.item p').not($(this).next()).slideUp()
   });
/* COUNTER */
   $(window).scroll(function()
   {
      if($(window).scrollTop() >= $('.counter').offset().top -400)
      {
       $('.timer').countTo();
       $(window).off('scroll');   
      }
       /* COUNTER */
   });
  
   $('.work ul li').click(function()
   {
      $(this).addClass('active').siblings().removeClass('active')
   });
   var mixer=mixitup('.images');

});


