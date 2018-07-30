function changePic(param) {
  var imgs = param.obj;
  for(var i=0;i<imgs.length;i++) {
    var itemImg = imgs[i].getElementsByTagName("img")[0];
    var imgWidth = itemImg.naturalWidth == 0 ? 1 : itemImg.naturalWidth;
    var imgHeight = itemImg.naturalHeight == 0 ? 1 : itemImg.naturalHeight;

    var boxWidth = param.width;
    var boxHeight = param.height;

    var expect_scale = boxWidth/boxHeight;
    var actual_scale = imgWidth/imgHeight;

    var actual_width = param.width;
    var actual_height = param.height;

    if(actual_scale >= expect_scale){
      actual_width = boxWidth;
      actual_height = imgHeight*(boxWidth/imgWidth);
    }else{
      actual_width = imgWidth*(boxHeight/imgHeight);
      actual_height = boxHeight;
    }

    imgs[i].style.verticalAlign = "middle";
    itemImg.style.width = actual_width+"px";
    itemImg.style.height = actual_height+"px";
    itemImg.style.margin = "0 auto";
  }

}


export default changePic;
