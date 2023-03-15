var img = document.getElementById('img');

var slides = ['./images2/img1.jpg','./images2/img2.jpg','./images2/img3.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+">"; 
}

setInterval(slider,5000);
