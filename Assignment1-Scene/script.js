/* Select the canvas and get the context*/
window.onload = function() {
    /*id from the HTML*/
    const canvas = document.getElementById('myCanvas');
    /*drawing context 2D*/
    const ctx = canvas.getContext('2d');

/*Load nad draw background image*/
    const backgroundImage = new Image();/*create image object*/

    /*set the path to background image*/
    backgroundImage.src = 'images/background.jpg';
    
    backgroundImage.onload = function() {
    /*draw the background image onto the canvas*/
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        drawForegroundImages();

        };

/*Load nad draw foreground images*/
    function drawForegroundImages() {
        const object1 = new Image();
        const object2 = new Image();

        object1.src ='images/object1.jpg';
        object2.src = 'images/object2.jpg';

        /*draw the first object on canvas*/
        object1.onload = function(){
            ctx.drawImage(object1, 100, 200, 200, 200);
        /*draw the second object*/
        object2.onload = function() {
            ctx.drawImage(object2, 500, 250, 250,250);
        /*add text*/
        drawText();
        };
    };
}

/*Add text*/
function drawText() {
    //font style
    ctx.font = '30px Arial';
    // color
    ctx.fillStyle = 'white';
    //draw name
    ctx.fillText('Vitaliy Tei', 30, 50);
    //draw the scene title
    ctx.fillText('My Awesome Scene', 30, 90);

    }

};