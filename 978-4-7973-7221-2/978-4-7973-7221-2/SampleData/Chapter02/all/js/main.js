$(function(){
function ChangeColor(){
    $(this).css('color','red')
};
$('#typo').on('mouseover',ChangeColor);
$('header').on('mouseover',ChangeColor);
});
//on→特定のイベントが起こるタイミングに実行したい命令を記述する
//this→onメソッドに指定してあるイベントが発生した要素が格納される
