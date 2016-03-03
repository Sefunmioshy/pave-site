var main = function(){
  var currentSlide;

var tag = document.createElement('script');
            tag.src = "//www.youtube.com/iframe_api";
            var firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            var player;
            function onYouTubeIframeAPIReady() {
              player = new YT.Player('player');
            }


    
    $('.dropdown-toggle').click(function(){
        $('.dropdown-menu').toggle();    
         
    });
    
    $('.planner').click(function(){
      // $('#plan').css("display", "inline");
      // $('#task').css("display", "none");
      // $('#time').css("display", "none");
      // $('#achievement').css("display", "none");
      $('.active-rectangle').removeClass('active-rectangle');
      $('.planner').addClass('active-rectangle');
      $('.demo_image').removeClass('demo_image');
      $('#plan').addClass('demo_image');

    });

    $('.task_manager').click(function(){
     // $('#plan').css("display", "none");
     // $('#task').css("display", "inline");
     // $('#time').css("display", "none");
     // $('#achievement').css("display", "none");
      $('.active-rectangle').removeClass('active-rectangle');
      $('.task_manager').addClass('active-rectangle');
      $('.demo_image').removeClass('demo_image');
      $('#task').addClass('demo_image');
    });

    $('.timer').click(function(){
      // $('#plan').css("display", "none");
      // $('#task').css("display", "none");
      // $('#time').css("display", "inline");
      // $('#achievement').css("display", "none");
      $('.active-rectangle').removeClass('active-rectangle');
      $('.timer').addClass('active-rectangle');
      $('.demo_image').removeClass('demo_image');
      $('#time').addClass('demo_image');
    });

    $('.achievement_tracker').click(function(){
      // $('#plan').css("display", "none");
      // $('#task').css("display", "none");
      // $('#time').css("display", "none");
      // $('#achievement').css("display", "inline");
      $('.active-rectangle').removeClass('active-rectangle');
      $('.achievement_tracker').addClass('active-rectangle');
      $('.demo_image').removeClass('demo_image');
      $('#achievement').addClass('demo_image');
    });
    



    
    // $('.planner').hover(function(){
    //   $('#plan').css("display", "inline");
    //   $('#task').css("display", "none");
    //   $('#time').css("display", "none");
    //   $('#achievement').css("display", "none");
    //   $('.active-rectangle').removeClass('active-rectangle');
    //   $('.planner').addClass('active-rectangle');
    // });

    // $('.task_manager').hover(function(){
    //   $('#plan').css("display", "none");
    //   $('#task').css("display", "inline");
    //   $('#time').css("display", "none");
    //   $('#achievement').css("display", "none");
    //   $('.active-rectangle').removeClass('active-rectangle');
    //   $('.task_manager').addClass('active-rectangle');
    // });

    // $('.timer').hover(function(){
    //   $('#plan').css("display", "none");
    //   $('#task').css("display", "none");
    //   $('#time').css("display", "inline");
    //   $('#achievement').css("display", "none");
    //   $('.active-rectangle').removeClass('active-rectangle');
    //   $('.timer').addClass('active-rectangle');
    // });

    // $('.achievement_tracker').hover(function(){
    //   $('#plan').css("display", "none");
    //   $('#task').css("display", "none");
    //   $('#time').css("display", "none");
    //   $('#achievement').css("display", "inline");
    //   $('.active-rectangle').removeClass('active-rectangle');
    //   $('.achievement_tracker').addClass('active-rectangle');
    // });
    


    setInterval(function(){
        currentSlide = $('.demo_image');
      //  currentSlide.css("display", "inline");
        var nextSlide = currentSlide.next();
        //nextSlide.css("display", "inline");
        if(nextSlide.length === 0){
           nextSlide = $('.phone-image').first();
        }

        // currentSlide.fadeOut(600).removeClass('demo_image');
        // nextSlide.fadeIn(600).addClass('demo_image');

        currentSlide.removeClass('demo_image');
        nextSlide.addClass('demo_image');

        // currentSlide.fadeToggle(600).removeClass('demo_image');
        // nextSlide.fadeToggle(600).addClass('demo_image');

     
        
       var currentDot = $('.active-rectangle'); 
        var otherDot = $('.planner'); 
        var otherDot1 = $('.task_manager'); 
        var otherDot2 = $('.timer'); 
        var otherDot3 = $('.achievement_tracker');  
        var nextDot;
        if(currentDot.hasClass("planner"))
        {
          nextDot = otherDot1;
        }
        else if(currentDot.hasClass("task_manager"))
        {
            nextDot = otherDot2;
        }  
        else if(currentDot.hasClass("timer"))
        {
            nextDot = otherDot3;
        } 
        else if(currentDot.hasClass("achievement_tracker"))
        {
            nextDot = otherDot;
        }     
        // if(nextDot.length === 0){
        //    nextDot = $('.rectangle').first();
        // }
        
        
        currentDot.removeClass('active-rectangle');
        nextDot.addClass('active-rectangle');
    }, 3000);



        $(".pave_vid").hide();
        $("#video-splash").show();

    $('.play').click(function() { 

        $("#video-splash").hide();
        $(".banner").hide();
        $(".pave_vid").show();
        
        player.playVideo();

      //   if ($('.pave_vid').is(':visible')) {
      //      player.playVideo();
      //     }
      // else {
      //      player.pauseVideo();
      //     } 
            
    // $('#video-container').addClass('show');      
    // $('#default').addClass('hide');
  });


    
    
    
};

$(document).ready(main);