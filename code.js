//global variables
var degrees = 0;
var refV = 1;
var refH = 1;

var sliderVal_b = 100;    
var sliderVal_s = 100; 
var sliderVal_i = 0; 
var sliderVal_g = 0; 
var flag = '';

//variables for part B
var rotate = 0;
var sep = 0;
var blur = 0;
var gs = 0;


//functions
function clear(){

    document.getElementById("brightness").style.backgroundColor = "#fff";
    document.getElementById("brightness").style.color = "#6C757D";

    document.getElementById("saturation").style.backgroundColor = "#fff";
    document.getElementById("saturation").style.color = "#6C757D";

    document.getElementById("inversion").style.backgroundColor = "#fff";
    document.getElementById("inversion").style.color = "#6C757D";

    document.getElementById("grayscale").style.backgroundColor = "#fff";
    document.getElementById("grayscale").style.color = "#6C757D";

}

function set_brightness(){

    document.getElementById("range").value = sliderVal_b;
    document.getElementById("displayValue").innerHTML = sliderVal_b+ "%";

    clear();
    console.log("changing color of brightness button");
    document.getElementById("brightness").style.backgroundColor = "#5372F0";
    document.getElementById("brightness").style.color = "#fff";

    document.getElementById('property').innerHTML = 'Brightness';

    flag = 'b';

}

function set_saturation(){

    document.getElementById("range").value = sliderVal_s;
    document.getElementById("displayValue").innerHTML = sliderVal_s+ "%";

    clear();
    console.log("changing color of saturation button");
    document.getElementById("saturation").style.backgroundColor = "#5372F0";
    document.getElementById("saturation").style.color = "#fff";

    document.getElementById('property').innerHTML = 'Saturation';

    flag = 's';

}

function set_inversion(){

    document.getElementById("range").value = sliderVal_i;
    document.getElementById("displayValue").innerHTML = sliderVal_i+ "%";

    clear();
    console.log("changing color of inversion button");
    document.getElementById("inversion").style.backgroundColor = "#5372F0";
    document.getElementById("inversion").style.color = "#fff";

    document.getElementById('property').innerHTML = 'Inversion';

    flag = 'i';

}

function set_grayscale(){

    document.getElementById("range").value = sliderVal_g;
    document.getElementById("displayValue").innerHTML = sliderVal_g+ "%";

    clear();
    console.log("changing color of grayscale button");
    document.getElementById("grayscale").style.backgroundColor = "#5372F0";
    document.getElementById("grayscale").style.color = "#fff";

    document.getElementById('property').innerHTML = 'Grayscale';

    flag = 'g';

}

function rotateLeft(){
    
    console.log("rotate image to left");
    degrees-=90;
    document.getElementById("myImage").style.transform = "rotate(" + degrees + "deg)";

}

function rotateRight(){

    console.log("rotate image to right");
    degrees+=90;
    document.getElementById("myImage").style.transform = "rotate(" + degrees + "deg)";

}

/*
    REFLECT IMAGE
*/
function reflectVertical(){

    console.log("reflecting image vertically");

    if(refV == 1)
    {
        refV = -1;
    }

   else if(refV == -1)
    {
        refV = 1;
    }

    document.getElementById("myImage").style.transform = "scaleX(" + refV + ")";

}

function reflectHorizontal(){
    
    console.log("reflecting image horizontally");

    if(refH == 1)
    {
        refH = -1;
    }

   else if(refH == -1)
    {
        refH = 1;
    }

    document.getElementById("myImage").style.transform = "scaleY(" + refH + ")";

}

/*
    RESET PICTURE
*/
function resetEverything(){

        refH = 1;
        refV = 1;
        degrees = 0;
        flag = '';

        sliderVal_b = 100;    
        sliderVal_s = 100; 
        sliderVal_i = 0; 
        sliderVal_g = 0; 

        rotate = 0;
        sep = 0;
        blur = 0;
        gs = 0;

        document.getElementById("myImage").style.transform = "scaleX(" + refV + ")";
        document.getElementById("myImage").style.transform = "scaleY(" + refH + ")";
        document.getElementById("myImage").style.transform = "rotate(" + degrees + "deg)";

        //reset filters
        document.getElementById("myImage").style.filter = "none";

        //after clicking reset, brightness is automatically selected
        set_brightness();

        //resetting changes of part B
        document.getElementById("myImage").style.transform = "rotate(" + rotate + "%)";
        document.getElementById("rotateID").value = 0;

        document.getElementById("sepiaID").value = 0;
        document.getElementById("blurID").value = 0;
        document.getElementById("grayID").value = 0;

        document.getElementById('no1').innerHTML = blur + " px";
        document.getElementById('no2').innerHTML = sep + " %";
        document.getElementById('no3').innerHTML = rotate + " deg";
        document.getElementById('no4').innerHTML = gs + " %";
        
}

/*
    APPLY FILTER WHEN SLIDER IS MOVED
*/
function changeRange(){
  
    console.log("changing slider range");

    if(flag == "b")
    {
        sliderVal_b = document.getElementById("range").value;
        console.log(sliderVal_b);
        document.getElementById("displayValue").innerHTML = sliderVal_b+ "%";
    }

    else if(flag == "i")
    {
        sliderVal_i = document.getElementById("range").value;
        console.log(sliderVal_i);
        document.getElementById("displayValue").innerHTML = sliderVal_i+ "%";
    }

    else if(flag == "s")
    {
        sliderVal_s = document.getElementById("range").value;
        console.log(sliderVal_s);
        document.getElementById("displayValue").innerHTML = sliderVal_s+ "%";
    }

    else if(flag == "g")
    {
        sliderVal_g = document.getElementById("range").value;
        console.log(sliderVal_g);
        document.getElementById("displayValue").innerHTML = sliderVal_g+ "%";
    }

    applyFilter();

}

function applyFilter(){

   console.log("applying filter");
   console.log(sliderVal_b + " " + sliderVal_i + " " +sliderVal_g + " " + sliderVal_s);

   document.getElementById("myImage").style.filter = "saturate(" + sliderVal_s + "%) invert(" + sliderVal_i + "%) grayscale(" + sliderVal_g + "%) brightness(" + sliderVal_b + "%)";// saturate(" + sliderVal_s + "%)"; // invert(" + sliderVal_i + "%)";

}

/*
     CHOOSE PICTURE FROM PC
*/
function removeDisable(){

    document.querySelector(".container").classList.remove("disable");

}

function choosePic(){

    document.querySelector(".file-input").click();

}

function showPic(){

    var fileName = document.querySelector(".file-input").files[0];

    if(!fileName) return;

    document.querySelector(".preview-img img").src = URL.createObjectURL(fileName);
    document.querySelector(".preview-img img").onload = removeDisable();

}

/*
    SAVE IMAGE
*/
function saveImage(){

    console.log("saving image");

}


/*
        FUNCTIONS FOR PART B
*/
function filterBlur(){

    console.log("BLUR");
    console.log(document.getElementById('blurID').value);
    blur = document.getElementById('blurID').value;
    document.getElementById("myImage").style.filter = "grayscale(" + gs + "%) sepia(" + sep + "%) blur(" + blur + "px)";
    document.getElementById('no1').innerHTML = blur + " px";

}

function filterSepia(){

    console.log("SEPIA");
    console.log(document.getElementById('sepiaID').value);
    sep = document.getElementById('sepiaID').value;
    document.getElementById("myImage").style.filter = "grayscale(" + gs + "%) sepia(" + sep + "%) blur(" + blur + "px)";
    document.getElementById('no2').innerHTML = sep + " %";

}

function filterRotate(){

    console.log("ROTATE");
    console.log(document.getElementById('rotateID').value);
    rotate = document.getElementById('rotateID').value;
    document.getElementById("myImage").style.transform = "rotate(" + rotate + "deg)";
    document.getElementById('no3').innerHTML = rotate + " deg";

}

function filterGrayScale(){

    console.log("GRAYSCALE");
    gs = document.getElementById('grayID').value;
    document.getElementById("myImage").style.filter = "grayscale(" + gs + "%) sepia(" + sep + "%) blur(" + blur + "px)";
    document.getElementById('no4').innerHTML = gs + " %";

}