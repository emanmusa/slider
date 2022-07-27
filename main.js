 var imgList = Array.from(document.querySelectorAll('.item img'))
 var lightBoxContainer= document.getElementById('lightBoxContainer')
 var lightBoxItem = document.getElementById('lightBoxItem')

 var nextBtn = document.getElementById('next')
 var prevBtn = document.getElementById('prev')
 var close = document.getElementById('close')

 var currentindexImg ;
 for(let i =0; i<imgList.length;i++){
    imgList[i].addEventListener('click', function(e){
        lightBoxContainer.style.display ="flex"
        var imgSrc = e.target.src ;
        currentindexImg = imgList.indexOf(e.target)
        lightBoxItem.style.backgroundImage = `url(${imgSrc})`

    })

 }


 function NextSlider(){
    currentindexImg =currentindexImg +1
    if(currentindexImg >= imgList.length){
      currentindexImg = 0   
    }
    var nextImg = imgList[currentindexImg].src;
    lightBoxItem.style.backgroundImage = `url(${nextImg})`
    console.log(nextImg)
 }

 nextBtn.addEventListener('click', function(){
    NextSlider()

 })


 function prevSlider(){
   if(currentindexImg == 0){
     currentindexImg = imgList.length -1  
   }else{
      currentindexImg =currentindexImg -1
   }
   var nextImg = imgList[currentindexImg].src;
   lightBoxItem.style.backgroundImage = `url(${nextImg})`
   console.log(nextImg)
}


 prevBtn.addEventListener('click', function(){
   prevSlider()

})


close.addEventListener('click',function(){
   lightBoxContainer.style.display ="none"
})


document.addEventListener('click',function(e){
   if(lightBoxContainer.style.display != "none"){
      if(e.target == lightBoxContainer){
         lightBoxContainer.style.display ="none"
      }
   }
})




document.addEventListener('keydown',function(e){
   if(lightBoxContainer.style.display == "flex"){

      if(e.code == 'ArrowRight'){
         NextSlider();
      }

      if(e.code == 'ArrowLeft'){
         prevSlider();
      }

      if(e.code == 'Escape'){
         lightBoxContainer.style.display ="none"
      }

   }
})



