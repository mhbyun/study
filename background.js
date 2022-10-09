const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg"];

function autoChangeBackgroundImage(){
    const bgImage = images[Math.floor(Math.random() * images.length)];
    console.log(bgImage);
    document.body.style.background = `url('./img/${bgImage}')`;

}

autoChangeBackgroundImage();
setInterval(autoChangeBackgroundImage, 5000);