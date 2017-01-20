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
  $('.faded').removeClass('hidden');
  $('.faded').animateCss('fadeInUp');
}

window.onfocus = function () {
  $('.faded').animateCss('fadeInUp');
  $('.faded').show();
}

window.onblur = function () {
  $('.faded').hide();
}

$('#internetButton').mouseenter(function () {
  $('#internetButton').animateCss('pulse');
});
