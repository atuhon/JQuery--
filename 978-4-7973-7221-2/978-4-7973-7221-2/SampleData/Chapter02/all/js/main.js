$(function(){
   $('#typo').animate({
    opacity:0,
    fontSize:'12px'
   },1500)

  


})
//on→特定のイベントが起こるタイミングに実行したい命令を記述する
$(function(){
   console.log( $('#typo').css('color'))
})