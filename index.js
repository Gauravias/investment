$(function (){

    $(document).ready(function(){
        $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('nav').toggleClass('nav-toggle');
        });
        $('nav ul li a').click(function(){
         $('.fa-bars').removeClass('fa-times');
        $('nav').removeClass('nav-toggle');
        });
        $(window).on('scroll load',function(){
            if($(window).scrollTop() > 10){
              $('#header').addClass('header-active');
            }else{
              $('#header').removeClass('header-active');
            }
        });
      });
    
        $(document).ready(function(){
            $('.venobox').venobox();
        });
    
    
        //wow js
        new WOW().init();
    
        $('#carousel1').owlCarousel({
      loop:true,
      center:true,
      margin:0,
      autoplay:true,
      responsiveClass:true,
      nav: false,
      responsive:{
        0: {
          items: 1
        },
        680: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    
    $(document).on('click', '.owl-item>div', function(){
      var $speed = 1000;
      $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
    });
    });
    
    $('.testimonials-carousel').owlCarousel({
      loop:true,
      center:true,
      margin:0,
      autoplay:true,
      responsiveClass:true,
      nav: false,
      responsive:{
        0: {
          items: 1
        },
        680: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
    
    $(document).on('click', '.owl-item>div', function(){
      var $speed = 1000;
      $owl.trigger('to.owl.carousel',[$(this).data('position'), $speed]);
    });
    
    document.addEventListener("DOMContentLoaded", () =>{
      function counter(id, start, end, duration){
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end){
               clearInterval(timer);
            }
        }, step);
      }
       counter("count1", 0,10,2000);
       counter("count2", 100,20,3000);
       counter("count3", 0,30,4000);
       counter("count4", 0,10,2000);
    });
    
      $(document).ready(function(){
        $(".card-header1").click(function(){
           // self clicking close
           if($(this).next(".card-body1").hasClass("active")){
             $(this).next(".card-body1").removeClass("active").slideUp()
            $(this).children("span").removeClass("fa-minus").addClass("fa-plus")  
           }
         else{
         $(".card1 .card-body1").removeClass("active").slideUp()
         $(".card1 .card-header1 span").removeClass("fa-minus").addClass("fa-plus");
           $(this).next(".card-body1").addClass("active").slideDown()
            $(this).children("span").removeClass("fa-plus").addClass("fa-minus")
          }
        })
      });
    
      function toggleTheme(){
        if( localStorage.getItem("shala-theme") !== null){
          if( localStorage.getItem("shala-theme") === "dark"){
                 $("body").addClass("dark");
          }
          else{
            $("body").removeClass("dark");
          }
        }
        updateIcon();
      }
      toggleTheme();
      $(".toggle-theme ").on("click",function(){
        $("body").toggleClass("dark");
        if($("body").hasClass("dark")){
            localStorage.setItem("shala-theme","dark");
        }
        else{
            localStorage.setItem("shala-theme","light");
        }
        updateIcon();
      });
      function updateIcon(){
       if($("body").hasClass("dark")){
        $(".toggle-theme i").removeClass("fa-moon");
        $(".toggle-theme i").addClass("fa-sun");
       }
       else{
             $(".toggle-theme i").removeClass("fa-sun");
        $(".toggle-theme i").addClass("fa-moon");
       }
      };
    