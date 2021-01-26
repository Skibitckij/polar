$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/left-arrow.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/right-arrow.png"></button>',
        responsive: [
            {
            breakpoint: 992,
            settings: {
            dots: true,
            arrows: false,
            dotsClass: 'slick-dots'
            }
          },
          {
            breakpoint: 425,
            settings: {
            dots: true,
            arrows: false,
            dotsClass: 'slick-dots'
            }
          }
          
        ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item) {
      $(item).each(function(i) {
          $(this).on('click', function(e) {
              e.preventDefault();
              $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
      });
  };

  toggleSlide('.catalog-item__link');
  toggleSlide('.catalog-item__back');

  //modal
  $('[data-modal=consultation]').on('click', function() {
      $('.overlay, #consultation').fadeIn('fast');
  });
  $('.modal__close').on('click', function() {
    $('.overlay, #consultation, #hanks, #order').fadeOut('fast');
  });
 
  $('.button_mini').each(function(i) {
    $(this).on('click', function() {
      $('#order .modal__descr').text($('.catalog-item__title').eq(i).text());
      $('.overlay, #order').fadeIn('fast');
    })
  });

  
 function valideForms(form){
   $(form).validate ({
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      phone: "required",
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      name: {
        required: "Введите ваше имя",
        minlength: jQuery.validator.format("Как минимум {0} символа")
      },
      phone: "Введите телефон",
      email: {
        required: "Введите почту",
        email: "Неправильно введен адрес почты"
      }
    }
   });
 };
 valideForms('#consultation-form');
 valideForms('#consultation form');
 valideForms('#order form');
});
  