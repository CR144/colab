$('#test').click(function(){
    $('.masterPlan').removeAttr('viewBox');
    $('.masterPlan').each(function (){
        $(this)[0].setAttribute('viewBox', '0 0 200 200');
    });
});