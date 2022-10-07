$('.about-items > div').on('click', function(){
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).children('.about-items_title').toggleClass('change-color-text');
    $(this).children('.about-items_text').toggleClass('change-color-text');
    $(this).children('.about-items_description').toggleClass('change-color-text');
    $(this).children('.about-icon').toggleClass('change-color-text');
    $(this).next('.about-items_text').slideToggle(300);
})