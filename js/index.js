$(document).ready(function(){
    $(window).scroll(function(){    
        if($(this).scrollTop()){    //if về top fade in và ngược lại
            $('.top').fadeIn()
                }
        else{
            $('.top').fadeOut();
        }
    });
    $(".top").click(function(){
        $('html,body').animate({
            scrollTop: 0    //quay về top (0) với tốc độ 1s
        }, 1000);   
    });
});
$(document).ready(function(){
    $('.parallax').parallax();  
    });

$(document).ready(function(){   

    $('.slide').slick({
    infinite: true,
    slidesToShow: 2, //số lượng show
    slidesToScroll: 1   //số lượng chuyển
    });
    });
    
$(document).ready(function(){

    $('.statistic-counter').counterUp({
    delay: 10,
    time: 2000
    });
    
    
    });
 new WOW().init(); 
 