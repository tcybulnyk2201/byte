$('.space_items > div').on('click', function(){
    $(this).next('.space_description').slideToggle(300);
})



$('.about-items > div').on('click', function(){
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).children('.about-items_title').toggleClass('change-color-text');
    $(this).next('.about-items_text').slideToggle(300);
})


