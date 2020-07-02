// fixed Navbar


const nav = $('.navbar');
const body = $('body');
$(window).scroll( function(){
    const pos = $('.plans').offset().top - window.innerHeight;
    if($(window).scrollTop() > pos){
        nav.addClass('fixedNav');
    }
    else{
        nav.removeClass('fixedNav');
    }
    
});
