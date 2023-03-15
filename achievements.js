var img = document.getElementById('img');

var slides = ['./images2/img6.jpg','./images2/img7.jpg','./images2/img8.jpg'];

var Start=0;

function slider(){
    if(Start<slides.length){
        Start=Start+1;
    }
    else{
        Start=1;
    }
    console.log(img);
    img.innerHTML = "<img src="+slides[Start-1]+" class=\"img-fluid rounded\">"; 
}

setInterval(slider,5000);
