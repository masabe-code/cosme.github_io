$(function(){
    $('.nav-icon').click(function(){
        $('.nav-icon').fadeOut();
        $('.modal').fadeIn();

    });
    $('.close-icon').click(function(){
        $('.modal').fadeOut();
        $('.nav-icon').fadeIn();
    });
})
