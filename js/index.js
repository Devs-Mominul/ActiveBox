







$('.img-div-two').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true,
    arrows:false,
    autoplay:true,
    autoplaySpeed:1000,
  });
  $('.header').parallaxie({
    speed: 0.4,
  }); 
  $('.tumi').parallaxie({
    speed: 0.4,
  }); 




  $(".circle").click(function(){
    $("html,body").animate({scrollTop:0},1000)
  });
  var icon=document.getElementById("icon");
  icon.addEventListener("click",function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
      icon.src="img/sun.png";
    }
    else{
      icon.src="img/moon.png";
    }
  })
  $(window).on("scroll",function(){
    var srooling=$(this).scrollTop();
    if(srooling >20){
      $(".main").addClass("bg");
    }else{
      $(".main").removeClass("bg");
      
    }
    if(srooling>20){
      $(".circle").fadeIn()
    }else{
      $(".circle").fadeOut()

    }
  })
  $("#preload").delay(1500).fadeOut();
  AOS.init();
 
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  







  
  

  

  





  
  
  
  
  
  
  
  
  
  

 
 
 
 
 
 

 
 
 
 
  
  
  
  
  
  
  
  
  
  
  
  
 
 
 
 

 
 
 