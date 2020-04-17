var set = {
  Color : function (color){
    $('body').css("color",color);
    //document.querySelector('body').style.color = color;
  },
  BGColor : function (color){
    $('body').css("background-color",color);
    // document.querySelector('body').style.backgroundColor = color;
  },
  LinksColor : function (color){
    $('a').css("color", color);
    // var alist = document.querySelectorAll('a');
    // for(var i = 0; i < alist.length; i++){
    //   alist[i].style.color = color;
    // }
  }
}

  function themeHandle(self){
    if(self.value === 'day'){
      self.value = 'night';
      set.Color('coral');
      set.BGColor('black');
      set.LinksColor('crimson');
    }
    else  {
      self.value = 'day';
      set.Color('black');
      set.BGColor('white');
      set.LinksColor('blue');
    }
  }

 function getSongList(){
   //var response;
   $.ajax({
     url: "https://api.ipify.org",
   }).done(function(data){
  console.log(data);
   });

 }
