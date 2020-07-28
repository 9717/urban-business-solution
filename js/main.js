jQuery(document).ready(function(){
    "use-strict";
    $('#slider-carousel').carouFredSel({

       responsive:true,
       width:'100%',
       circular:true,
       scroll:{
           items:1,
           duration:700,
           pauseOnHover:true
       },
       auto:true,
       items:{
           visible:{
               min:1,
               max:1
           },
           height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
       });

       $(window).scroll(function(){
        var top=$(window.scrollTop());
        if(top>=60){
            $("navbar").addClass('secondary');
        }
     else
     if($("navbar").hasClass('secondary')){
        $("navbar").removeClass('secondary');
     }

         });
         
    });

/*scroll top js*/
    $(window).scroll(function() {
        if ($(this).scrollTop() > 50 ) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });
    $(function(){
        $(".scroll").click(function(){
            
            $("html,body").animate({
            scrollTop:$(".thetop").offset().top},"1000");
            return false;
        });

        })


/* readmore and readless */
    
  $('.read-more-content').addClass('hide')

.before('<a class="read-more-show" href="#">Read More</a>')
  
.append(' <a class="read-more-hide" href="#">Read Less</a>');

$('.read-more-show').on('click', function(e) {
  $(this).next('.read-more-content').removeClass('hide');
  $(this).addClass('hide');
  e.preventDefault();
});

$('.read-more-hide').on('click', function(e) {
  $(this).parent('.read-more-content').addClass('hide').parent().children('.read-more-show').removeClass('hide');
  e.preventDefault();
});


$(document).ready(function(){
$(window).scroll(function(){
   
var positiontop=$(document).scrollTop();
console.log(positiontop);
if((positiontop>10) && (positiontop>220))
    $('#card-one').addClass('animated bounceInLeft');

});



});

document.getElementById("button").onclick=function(){
    document.getElementById("confirm").innerHTML="Thank you please check your email for more information"
}

