$(document).ready(function(){
    $("#development-image").click(function(){
        $("#development-image").slideDown('500').hide('1000');
        $("#development").show('1500');
    });
    $("#development").click(function(){
        $("#development").slideUp('1500');
        $("#development-image").slideDown('1500');
    });
}) 


$(document).ready(function(){
    $("#design-image").click(function(){
        $("#design-image").slideDown('500').hide('1000');
        $("#design").show('1500');
    });
    $("#design").click(function(){
        $("#design").slideUp('1500');
        $("#design-image").slideDown('1500');
    });
}) 


$(document).ready(function(){
    $("#product-image").click(function(){
        $("#product-image").slideDown('500').hide('1000');
        $("#product").show('1500');
    });
    $("#product").click(function(){
        $("#product").slideUp('1500');
        $("#product-image").slideDown('1500');
    });
})
$('.work1').mouseover(function() {
  $('.work1-overlay').show();
}).mouseout(function() {
  $('.work1-overlay').hide();
});
$(".work2").mouseenter(function() {
  $(".work2-overlay").show();
}).mouseleave(function() {
  $(".work2-overlay").hide();
});
$(".work3").mouseenter(function() {
  $(".work3-overlay").show();
}).mouseleave(function() {
  $(".work3-overlay").hide();
});
$(".work4").mouseenter(function() {
  $(".work4-overlay").show();
}).mouseleave(function() {
  $(".work4-overlay").hide();
});
$(".work5").mouseenter(function() {
  $(".work5-overlay").show();
}).mouseleave(function() {
  $(".work5-overlay").hide();
});
$(".work6").mouseenter(function() {
  $(".work6-overlay").show();
}).mouseleave(function() {
  $(".work6-overlay").hide();
});
$(".work7").mouseenter(function() {
  $(".work7-overlay").show();
}).mouseleave(function() {
  $(".work7-overlay").hide();
});
$(".work8").mouseenter(function() {
  $(".work8-overlay").show();
}).mouseleave(function() {
  $(".work8-overlay").hide();
});


$("form#form1").on('submit',function(event){
  event.preventDefault();
  var name = $("input#name").val();
  var email = $("input#email").val();
  var message = $("textarea#message").val();

  if ($("input#name").val() && $("input#email").val() && $("input#message").val() ){
      alert ("Hello " + name + ", Thank you for reaching out, we'll get back to you shortly...");
  }
  else if($("input#name").val() && $("input#email").val()){
      alert("Thank you for reaching ou to us. If you wish to leave a message please type in on the message section..");
  }
 else{
   alert("Please provide correct name or email")
 }
});

