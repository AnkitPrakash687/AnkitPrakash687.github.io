$(".rename").click(function(e){
    e.preventDefault();
    var $this = $(this);
    var fileName = $(this).data("file");
      $("#basicModal").data("fileName", fileName).modal("toggle", $this);
    
  });
  
  $("#basicModal").on("shown.bs.modal", function(e){
    //data-fileName attribute associated with the modal added in the click event of the button
  alert($(this).data("fileName"));
    //my data-file associated with the button 
    alert($(e.relatedTarget).data("file"));
  })
  
  var BoxCount = 4;
  var BoxWidth = 100;
  var ScrollDistance = BoxWidth; //It can be any other value if you like.
  var ScrollButtonWidth = 50;
  
  $('.scrollright').click(function() {
    var current = parseInt($('.scrollbar').css("margin-left"));
    var end = $(window).width() - BoxWidth - ScrollButtonWidth;
    var move = ScrollDistance;
    if(current < end){
      if((end - current) < BoxWidth)
        move = end - current;
      $('.scrollbar').animate({ marginLeft: "+=" + move }, "fast");
    }
    else{
      $('.scrollbar').animate({ marginLeft: end }, "fast");
    }
   });
  
  $('.scrollleft').click(function() {
    var current = parseInt($('.scrollbar').css("margin-left"));
    var end = - (BoxWidth * (BoxCount - 1));
    var move = ScrollDistance;
    if(current > end){
      if((current - end) < BoxWidth)
        move = current - end;
      $('.scrollbar').animate({ marginLeft: "-=" + move }, "fast");
    }
    else{
      $('.scrollbar').animate({ marginLeft: end }, "fast");
    }
   });   