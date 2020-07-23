/*          TITLE               */
$(document).ready(function(){
  var mouseX, mouseY;
  var ww = $( window ).width();
  var wh = $( window ).height();
  var traX, traY;
$(document).mousemove(function(e){
  mouseX = e.pageX;
  mouseY = e.pageY;
  traX = ((15 * mouseX) / 570) + 40;
  traY = ((15 * mouseY) / 570) + 50;
  console.log(traX);
  $(".title").css({"background-position": traX + "%" + traY + "%"});
  });
});

/*        FOND D'ECRAN         */
$('.parallax-window1').parallax({
  imageSrc: '../imagopictures/img/fondclip.png'});
$('.parallax-window2').parallax({
  imageSrc: '../imagopictures/img/fond3d.png'});
$('.parallax-window3').parallax({
  imageSrc: '../imagopictures/img/fondvfx.png'});
$('.parallax-window4').parallax({
  imageSrc: '../imagopictures/img/fondcontact.jpg'});