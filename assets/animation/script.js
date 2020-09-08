//Ini script jQuery untuk ganti-ganti gambar di utama
$(window).on("load", function() {
//$(document).ready(function trial(){
  let image_array = ["assets/image/img9.jpg","assets/image/img10.jpg","assets/image/img11.jpg"];
  curentImageIndex = 0;
  setInterval(function(){
    console.log(image_array[curentImageIndex]);
    var p = $('.welcome-main');
    p.css("background-image","url("+image_array[curentImageIndex++] + ")",5000);
    if(curentImageIndex>= image_array.length){curentImageIndex = 0}
  }, 5000);
});
