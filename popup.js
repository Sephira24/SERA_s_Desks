// ====== POP Up =====
$ (document).ready(function(){

    var stopAutohide;
  
  
    function showWindow(){
      $('#main').show();
      // auto hide after 10s
      stopAutohide = setTimeout(hideWindow,10000);
    }
    //showWindow()
  
    function hideWindow(){
      $('#main').hide();
      //on scroll
      $('html body').css('overflow','scroll')
    }
    //hideWindow()
  
  
    //now call function automatically after some time 
    
    
    //auto open after 2s
    setTimeout(showWindow,1000);
  
    //close after click
  
    $("#close-btn").click(function(){
  
      hideWindow();
      clearTimeout(stopAutohide);
    });
  
  });