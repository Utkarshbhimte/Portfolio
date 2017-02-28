var skillSet  = [
  { "skill": 'HTML5', "measure":74},
  { "skill": 'CSS3', "measure":85},
  { "skill": 'JS', "measure":65},
  { "skill": 'ReactJS', "measure":79},
  { "skill": 'Angular', "measure":64},
  { "skill": 'PWA', "measure":67},
  { "skill": 'UI/UX Design', "measure":84},
  { "skill": 'GulpJs', "measure":64},
  { "skill": 'ExpressJS', "measure":54},
  { "skill": 'Python', "measure":75},
  { "skill": 'JSON', "measure":71},
  { "skill": 'Bootstrap', "measure":67},
  { "skill": 'Sass', "measure":75},
  { "skill": 'Jade', "measure":81},
  { "skill": 'Android', "measure":45},
  { "skill": 'Jekyll', "measure":74},
  { "skill": 'NodeJS', "measure":70},
  { "skill": 'Webpack', "measure":54};


$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.site-nav a').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
    skillSet.forEach(function(el) {
      $('.skill-lockup').append("<div class='skill'><div class='skill-back'><div class='skill-fill html'><h3>" + el.skill +"</h3></div></div></div>");
    });

});

// Change the speed to whatever you want
// Personally i think 1000 is too much
// Try 800 or below, it seems not too much but it will make a difference

var wScroll = 0;

$(window).scroll(function(){

  wScroll = $(this).scrollTop();
  $('.boy').css({
    'transform' : 'translate(0px , ' + 2*wScroll +'%)',
    'transform' : 'scale('+(1 + wScroll/2000) +')',
    'bottom' : (-300 - wScroll)
  });

  $('.spotlight').css({
    'transform' : 'translate(0px , ' + wScroll/8 +'%)',
    'transform' : 'scale('+(1 + wScroll/2000) +')',
    'bottom' : (- wScroll)
  });

  $('.hack').css({
    'transform' : 'translate(0px , ' + wScroll/2  +'%)',
  });

  $('.code').css({
    'transform' : 'translate(0px , ' + wScroll /4 +'%)',
  });

  $('.design').css({
    'transform' : 'translate(0px , ' + wScroll /10 +'%)',
  });

  $('.innovation').css({
    'transform' : 'translate(0px , ' + wScroll /10 +'%)',
  });

  var scrollTop = $(window).scrollTop();
  var height = $(window).height()/2;

  $('.hack,.code,.design,.innovation').css({
      'opacity': ((height - scrollTop) / height)
  });

  if($(window).width() >= 775){
    if (wScroll > $('.intro').offset().top - 200)  {
      $('.profile-pic,.intro-right,.intro-left').addClass('in-position');
    }
  }

  if (wScroll > $('.skill-set').offset().top - 500)  {

    $('.skill-back').each(function(i){

      setTimeout(function () {
        $('.skill-back').eq(i).css({
          'width' : '100%'
        });
      }, 100 * i);

    });

    $('.skill-fill').each(function(i){

      setTimeout(function () {
        $('.skill-fill').eq(i).css({
          'width' : skillSet[i].measure + '%'
        });
      }, 100 * (i + 1));

    });

  }

  if (wScroll > $('.projects-showcase').offset().top - 300 )  {

    $('.learned').each(function(i){

      setTimeout(function () {
        $(".learned").eq(i).animate({ 'opacity': '1'});
      }, 600 * i);

    });

    $('.grid li').each(function(i){

      setTimeout(function () {
        $('.grid li').eq(i).css({
          'animation-name' : 'project-tile-entrance'
        });
      }, 200 * i);

    });

    $('.code-tile-col2 a').each(function(i){

      setTimeout(function () {
        $('.code-tile-col2 a').eq(i).css({
          'transform' : 'translateX(0px)'
        });
      }, 200 * i);

    });

      $('.projects-showcase h3').css({
        'opacity' : '1'
      });
  }



});
