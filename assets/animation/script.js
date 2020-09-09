//Ini script jQuery untuk ganti-ganti gambar di utama
$(document).ready(function trial(){
  let image_array = ["assets/image/img9.jpg","assets/image/img10.jpg","assets/image/img11.jpg"];
  curentImageIndex = 0;
  setInterval(function(){
    console.log(image_array[curentImageIndex]);
    var p = $('.welcome-main');
    p.css("background-image","url("+image_array[curentImageIndex++] + ")",5000);
    if(curentImageIndex>= image_array.length){curentImageIndex = 0}
  }, 5000);

  $('#list1').click(function(){
    for(let i = 1;i<9;i++){
      $(`#latest${i}`).attr('src',`assets/image/Latest${i}.jpg`);
    }
  });
  $('#list2').click(function(){
    for(let i = 1;i<9;i++){
      $(`#latest${i}`).attr('src',`assets/image/Latest2_${i}.jpg`);
    }
  });
  $('#list3').click(function(){
    for(let i = 1;i<9;i++){
      $(`#latest${i}`).attr('src',`assets/image/Latest3_${i}.jpg`);
    }
  });
  $('#list4').click(function(){
    for(let i = 1;i<9;i++){
      $(`#latest${i}`).attr('src',`assets/image/Latest4_${i}.jpg`);
    }
  });

});
