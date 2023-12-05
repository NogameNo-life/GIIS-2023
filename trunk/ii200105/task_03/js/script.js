(function($) {

    "use strict";

    // product quantity
    let initProductQty = function(){

      $('.product-qty').each(function(){

        let $el_product = $(this);
        let quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            let quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            let quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    $(document).ready(function() {
      
      /* Video */
      let $videoSrc;  
        $('.play-btn').click(function() {
          $videoSrc = $(this).data( "src" );
        });

        $('#myModal').on('shown.bs.modal', function (e) {

        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
      })

      $('#myModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src',$videoSrc); 
      })

      let swiper = new Swiper(".main-swiper", {
        speed: 800,
        loop: true,
        pagination: {
          el: ".main-slider-pagination",
          clickable: true,
        },
      });
      
      let swiper = new Swiper(".product-swiper", {
        speed: 800,
        spaceBetween: 20,
        navigation: {
          nextEl: ".product-carousel-next",
          prevEl: ".product-carousel-prev",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
      });

      let swiper = new Swiper(".testimonial-swiper", {
        speed: 800,
        navigation: {
          nextEl: ".testimonial-arrow-next",
          prevEl: ".testimonial-arrow-prev",
        },
      });

      let swiper = new Swiper(".product-swiper2", {
        speed: 800,
        spaceBetween: 20,
        navigation: {
          nextEl: ".product-carousel-next2",
          prevEl: ".product-carousel-prev2",
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          900: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 20,
          }
        },
      });

      let thumb_slider = new Swiper(".thumb-swiper", {
        slidesPerView: 1,
      });
      let large_slider = new Swiper(".large-swiper", {
        spaceBetween: 10,
        effect: 'fade',
        thumbs: {
          swiper: thumb_slider,
        },
      });

      initProductQty();
      
    }); // End of a document ready

})(jQuery);
