canvas = new fabric.Canvas("myCanvas");

player_X = 10;
player_Y = 10;

var player_object = "";
var new_image_object = "";

block_image_width = 30;
block_image_height = 30;

function player_update(){

    fabric.Image.fromURL("player.png", function(Img){

        player_object = Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
        top:player_Y,
        left:player_X
        });
        canvas.add(player_object);
    });
}

function new_object(get_image){

    fabric.Image.fromURL(get_image, function(Img){

        object_draw = Img;
        object_draw.scaleToWidth(block_image_width);
        object_draw.scaleToHeight(block_image_height);
        object_draw.set({
            top:player_Y,
            left:player_X
        });
        canvas.add(object_draw);
    });
}

window.addEventListener('keydown', Key_Down);

function Key_Down(e){

    key_pressed = e.keyCode;
    console.log(key_pressed);

    if(e.shiftKey == true && key_pressed == '80'){
        console.log("P and Shift are pressed");
        block_image_height = block_image_height + 10;
        block_image_width = block_image_width +10;
        document.getElementById("span_width").innerHTML = block_image_width;
        document.getElementById("span_height").innerHTML = block_image_height;
    }

    if(e.shiftKey == true && key_pressed == '77'){
        console.log("M and Shift are pressed");
        block_image_height = block_image_height - 10;
        block_image_width = block_image_width - 10;
        document.getElementById("span_width").innerHTML = block_image_width;
        document.getElementById("span_height").innerHTML = block_image_height;
    }

    if(key_pressed == '40'){

        console.log("down");
        down();
        
    }
    if(key_pressed == '38'){

        console.log("up");
        up();
        
    }
    if(key_pressed == '37'){

        console.log("left");
        left();
        
    }
    if(key_pressed == '39'){

        console.log("right");
        right();
        
    }
    if(key_pressed == '87'){

        console.log("w");
        new_object("wall.jpg");
        
    }
    if(key_pressed == '71'){

        console.log("g");
        new_object("ground.png");
        
    }
    if(key_pressed == '68'){

        console.log("d");
        new_object("dark_green.png");
        
    }
    if(key_pressed == '67'){

        console.log("c");
        new_object("cloud.jpg");
        
    }
    if(key_pressed == '76'){

        console.log("l");
        new_object("light_green.png");
        
    }
    if(key_pressed == '82'){

        console.log("r");
        new_object("roof.jpg");
        
    }
    if(key_pressed == '84'){

        console.log("t");
        new_object("trunk.jpg");
        
    }
    if(key_pressed == '85'){

        console.log("u");
        new_object("unique.png");
        
    }
    if(key_pressed == '89'){

        console.log("y");
        new_object("yellow_wall.png");
        
    }
}

function up(){

    if(player_Y >= 0){

        player_Y = player_Y - block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When Up is pressed, X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function down(){

    if(player_Y <= 500){

        player_Y = player_Y + block_image_height;
        console.log("Block image height = " + block_image_height);
        console.log("When Down is pressed, X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function left(){

    if(player_X >= 0){

        player_X = player_X - block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When Left is pressed, X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}

function right(){

    if(player_X <= 850){

        player_X = player_X + block_image_width;
        console.log("Block image width = " + block_image_width);
        console.log("When Right is pressed, X = " + player_X + " | Y = " + player_Y);
        canvas.remove(player_object);
        player_update();
    }
}