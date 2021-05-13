canvas = document.getElementById('My_Canvas');
ctx = canvas.getContext("2d");
Car1_width = 100;
Car1_height = 100;
Car2_width = 100;
Car2_height = 75;


background_image = "racing.jpg";
Car1_image = "Picture1.png";
Car1_x = 10;
Car1_y = 20;
Car2_image = "car1.png";
Car2_x = 15;
Car2_y = 40;


function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Car1_imgTag = new Image();
    Car1_imgTag.onload = uploadcar;
    Car1_imgTag.src = Car1_image;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadcar;
    Car2_imgTag.src = Car2_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadcar() {
    ctx.drawImage(Car1_imgTag, Car1_x, Car1_y, Car1_width, Car1_height);
}
function uploadcar() {
    ctx.drawImage(Car2_imgTag, Car2_x, Car2_y, Car2_width, Car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }
    if (keyPressed == '37') {
        left();
        console.log("left");
    }
    if (keyPressed == '39') {
        right();
        console.log("right");
    }
}
function up() {
    if (Car1_y >= 0) {
        Car1_y = Car1_y - 10;
        console.log("when up arrow is pressed,x=" + Car1_x + "| y=" + Car1_y);
        uploadBackground();
        uploadcar();
    }
}
function down() {
    if (Car1_y <= 500) {
        Car1_y = Car1_y + 10;
        console.log("when up arrow is pressed,x=" + Car1_x + "| y=" + Car1_y);
        uploadBackground();
        uploadcar();
    }
}
function left() {
    if (Car1_x >= 0) {
        Car1_x = Car1_x - 10;
        console.log("when up arrow is pressed,x=" + Car1_x + "| y=" + Car1_y);
        uploadBackground();
        uploadcar();
    }
}
function right() {
    if (Car1_x <= 700) {
        Car1_x = Car1_x + 10;
        console.log("when up arrow is pressed,x=" + Car1_x + "| y=" + Car1_y);
        uploadBackground();
        uploadcar();
    }
}
function up() {
    if (Car2_y >= 0) {
        Car2_y = Car2_y - 10;
        console.log("when up arrow is pressed,x=" + Car2_x + "| y=" + Car2_y);
        uploadBackground();
        uploadcar();
    }
}
function down() {
    if (Car2_y <= 500) {
        Car2_y = Car2_y + 10;
        console.log("when up arrow is pressed,x=" + Car2_x + "| y=" + Car2_y);
        uploadBackground();
        uploadcar();
    }
}
function left() {
    if (Car2_x >= 0) {
        Car2_x = Car2_x - 10;
        console.log("when up arrow is pressed,x=" + Car2_x + "| y=" + Car2_y);
        uploadBackground();
        uploadcar();
    }
}
function right() {
    if (Car2_x <= 700) {
        Car2_x = Car2_x + 10;
        console.log("when up arrow is pressed,x=" + Car2_x + "| y=" + Car2_y);
        uploadBackground();
        uploadcar();
    }
}


