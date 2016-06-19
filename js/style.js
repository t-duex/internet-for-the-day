$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

window.onload = function () {
  $('#internetBanner').removeClass('hidden');
  $('#internetButton').removeClass('hidden');
  $('#internetBanner').animateCss('fadeInUp');
  $('#internetButton').animateCss('fadeInUp');
}

window.onfocus = function () {
  $('#internetBanner').animateCss('fadeInUp');
  $('#internetButton').animateCss('fadeInUp');
  $('#internetBanner').show();
  $('#internetButton').show();
}

window.onblur = function () {
  $('#internetBanner').hide();
  $('#internetButton').hide();
}

$('#internetButton').mouseenter(function () {
  $('#internetButton').animateCss('bounce');
})
