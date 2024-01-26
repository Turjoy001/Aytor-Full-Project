$(document).ready(()=>{
    // main section starting
    // banner section starting
    $('#banner_section').slick({
        arrows: false,
        dots: true,
        appendDots:$('.bannner_slick_slide_dots'),
        autoplay: true,
        autoplaySpeed:2000,
        fade:true,
        speed: 1000,
        slidesToShow: 1,
    });
    // banner section ending
    // New Arrivals section starting
    // bootstarp tooltip js
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    // slick js
    $('.crad_main_box').slick({
        slidesToShow: 4,
        prevArrow: '<i class="fa-solid fa-chevron-right slide_arrows"></i>',    
        nextArrow: '<i class="fa-solid fa-chevron-left slide_arrows"></i>',   
        autoplay: true,
        autoplaySpeed: 1500,
        speed:3000, 
    })
    // New Arrivals section ending
    // offer section starting
    // offer slick js
    $('.offer_slide_box').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,
        speed:3000, 
    })
    
    // offer countdown js
    $('[data-countdown]').each(function() {
        var $this = $(this), finalDate = $(this).data('countdown');
        $this.countdown(finalDate, function(event) {
            $this.html(event.strftime(''
            + '<li><h6>%D</h6> <p>Days</p></li>'
            +'<li><span>:</span></li>'
            + '<li><h6>%H</h6> <p>Hour</p></li>'
            +'<li><span>:</span></li>'
            + '<li><h6>%M</h6> <p>Minute</p></li>'
            +'<li><span>:</span></li>'
            + '<li><h6>%S</h6> <p>Sec</p></li>'));
        });
    });
    // offer section ending
    // Special offer section starting
    new VenoBox({
        selector: '.play_icon',
    });
    // Special offer section ending
    // Latest News section starting
    $('.latest_news_main_box').slick({
        slidesToShow: 4,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed:3000, 
        slidesToScroll: 2
    })
    // Latest News section ending
    // main section ending
    
    // extra section starting
    // email logn from starting
    $('.cloes_btn').on('click',()=>{
        $('#email_logn_from').fadeOut(500)
    })
    // email login from ending
    
    // search section starting//
    
    let search_show_box_btn = document.querySelector('.search_box_show_btn');
    let search_hide_box_btn = document.querySelector('.search_box_cloes_btn');
    let search_box = document.querySelector('#search_container')
        
    search_show_box_btn.addEventListener('click',()=>{
        search_box.style ='border-radius: 0px; transform: scale(1);';
    });
    search_show_box_btn.addEventListener('click',()=>{
        document.querySelector('.search_form').style ='transform: scale(1); opacity: 1;';
    });
    search_hide_box_btn.addEventListener('click',()=>{
        search_box.style ='border-radius: 300px; transform: scale(0);';
    });
    search_hide_box_btn.addEventListener('click',()=>{
        document.querySelector('.search_form').style ='transform: scale(.3); opacity: 0;';
    });
    // search section ending//
    
    // Shopping cart section starting
    let card_close_btn =document.querySelector('.Shopping_cart_close_btn');
    let card_open_btn =document.querySelector('.card_box_show_btn');
    let card_container =document.querySelector('#Shopping_cart');
    let white_space =document.querySelector('.white_space');
    
    card_open_btn.addEventListener('click',()=>{
        card_container.style ='transform: scaleX(1)';
    });
    white_space.addEventListener('click',()=>{
        card_container.style ='transform: scaleX(0)';
    });
    
    card_close_btn.addEventListener('click',()=>{
        card_container.style ='transform: scaleX(0)';
    });
    
    // Shopping cart section ending
    
    
    // extra section ending


    
});
// team slider
$('.team_slider').slick({
    arrows: false,
    slidesToShow:4,
    autoplaySpeed: 4000,
    autoplay: true,
    responsive:[
        {
            breakpoint: 1100,
            settings:{
                 slidesToShow:3,
            }
        },

    ]

});

//insta slider
$('.insta_slider').slick({
    arrows: false,
    slidesToShow:4,
    autoplaySpeed: 4000,
    autoplay: true,
    dots: true,
    appendDots: $('.insta_dots'),
    responsive:[
        {
            breakpoint: 1300,
            settings:{
                 slidesToShow:3,
            }
        },
        {
            breakpoint: 1100,
            settings: {
                slidesToShow:2,
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

// Feedback_slider
$('.Feedback_slider').slick({
    arrows: false,
    slidesToShow:1,
    autoplaySpeed: 4000,
    fade: true,
    dots:true,
    speed:3000,
    appendDots: $('.Feedback_slider_dots'),

});
// big img slide
$('.big_img').slick({
    slidesToShow:1,
    arrows: false,
    autoplay:true,
    autoplaySpeed:4000,
    speed:1000,
    pauseOnHover:false,
    fade:true,
    asNavFor:'.small_img'
  });
  // small_img slider
  $('.small_img').slick({
    slidesToShow:5,
    arrows: false,
    autoplay:true,
    autoplaySpeed:4000,
    speed:1000,
    pauseOnHover:false,
    asNavFor:'.big_img',
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    responsive:[
      {
        breakpoint:768,
        settings:{
          slidesToShow:3
        }
      },
    ]
  });
  //shop details incement and decrement
  $('.decrement').on('click', function(){
    let cart_value = $(this).siblings('input').val()
    if(cart_value >1){
      $(this).siblings('input').val(cart_value - 1);
    }
  })
  $('.increment').on('click', function(){
    let cart_value = $(this).siblings('input').val()
      $(this).siblings('input').val(Number(cart_value) + 1);
    
  })
  //Related_product_slider
  $('.Related_product_slider').slick({
    slidesToShow:4,
    arrows: false,
    autoplay:true,
    autoplaySpeed:3000,
    speed:1000,
    pauseOnHover:false,
    responsive:[
      {
        breakpoint:1200,
        settings:{
          slidesToShow:3
        }
      },
      {
        breakpoint:992,
        settings:{
          slidesToShow:2
        }
      },
      {
        breakpoint:575,
        settings:{
          slidesToShow:1
        }
      },
    ]
});