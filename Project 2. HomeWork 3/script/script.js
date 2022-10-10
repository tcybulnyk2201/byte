$('.space_items > div').on('click', function(){
    $(this).next('.space_description').slideToggle(300);
    $(this).parent('.space_items').toggleClass('space_items-change-color');
})



$('.about-items > div').on('click', function(){
    $(this).parent('.about-items').toggleClass('change-color');
    $(this).children('.about-icon').toggleClass('about-rotate-icon');
    $(this).next('.about-items_text').slideToggle(300);
})

