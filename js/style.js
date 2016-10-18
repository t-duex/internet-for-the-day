$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$.fn.extend({
    animateCssWithCallback: function (animationName, callback) {
        var animationEnd = 'animationend';
        $(this).addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
            callback();
        });
    }
});

window.onload = function () {
  $('#internetBanner').removeClass('hidden');
  $('#internetButton').removeClass('hidden');
  $('#internetLabel').removeClass('hidden');
  $('#internetCheckbox').removeClass('hidden');
  $('#internetBanner').animateCss('fadeInUp');
  $('#internetButton').animateCss('fadeInUp');
  $('#internetLabel').animateCss('fadeInUp');
  $('#internetCheckbox').animateCss('fadeInUp');
}

window.onfocus = function () {
  $('#internetBanner').animateCss('fadeInUp');
  $('#internetButton').animateCss('fadeInUp');
  $('#internetLabel').animateCss('fadeInUp');
  $('#internetCheckbox').animateCss('fadeInUp');
  $('#internetBanner').show();
  $('#internetButton').show();
  $('#internetLabel').show();
  $('#internetCheckbox').show();
}

window.onblur = function () {
  $('#internetBanner').hide();
  $('#internetButton').hide();
  $('#internetLabel').hide();
  $('#internetCheckbox').hide();
}

$('#internetButton').mouseenter(function () {
  $('#internetButton').animateCss('pulse');
});
