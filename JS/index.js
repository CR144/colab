$('.test').click(function(e){
    $('svg').removeAttr('viewBox');
    $('svg').each(function () { $(this)[0].setAttribute('viewBox', '0 0 200 200'); });
});