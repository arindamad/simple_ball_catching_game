var windowWidth = $(window).width();
var windowHeight = $(window).height();
var barOfsetTop = windowHeight -20;

// for create those balls
var arTime = setInterval(function(){
var randomPositon = Math.random() * windowWidth;
var redRandom = Math.random() * 255;
var greenRandom = Math.random() * 255;
var blueRandom = Math.random() * 255;
  // console.log(randomPositon);
  $( "body" ).prepend( "<div class='balls' style='left:"+randomPositon+"px; background: rgb("+redRandom+", "+greenRandom+", "+blueRandom+" )'></div>" );
}, 5000);





var pointcount = 0;
var falseCount = 0;
// for movement
setInterval(function(){
  var baGro= "";
  $( ".balls" ).each(function(index){
    baGro = $( ".balls" ).eq(index).css('background-color');
    var eachTop = $(this).css('top');
    var eachLeft = $(this).css('left');
    
    var barPositionleft = $('.bar').css('left');
    var ofseTop = parseInt(barOfsetTop);
    // console.log(parseInt(eachLeft));
    var y = parseInt(barPositionleft) + 200;
    console.log(baGro);
    if(ofseTop - 20 < parseInt(eachTop) && parseInt(eachLeft) > parseInt(barPositionleft) && (parseInt(eachLeft) < y) ){
      pointcount++;
      $('.yourSchoreis').html(pointcount);
       $( ".balls" ).eq(index).remove();
       console.log(pointcount);
       $( ".bar" ).css('background-color', baGro );
       }else if(parseInt(eachTop) >= parseInt(windowHeight)){
         if(falseCount==3){
           $('.outOver').fadeIn();
           $('.outOver p').text('Your score is '+ pointcount);
           clearInterval(arTime);
           $( ".balls" ).remove();
         }else{
            falseCount++;
         }
         $( ".balls" ).eq(index).remove();
        // console.log('true');
       }else{
        $(this).css('top',parseInt(eachTop) + 1);
       }
     
  });
}, 10);




// console.log(windowHeight);


/// for moving bars
$(window).on('keyup', function(){
   if(event.keyCode == 39){
     var leftval = $('.bar').css('left');
     if(parseInt(leftval) < windowWidth - 200){
        $('.bar').css('left',parseInt(leftval) + 100);
        }
     
     
   }else if(event.keyCode == 37){
       var rightVal = $('.bar').css('left');
     
         $('.bar').css('left',parseInt(rightVal) - 100);
        
   }
});