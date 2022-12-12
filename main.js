img = "";
status = "";
object = [];

function preload () {
img = loadImage ("dog_cat.jpg");
}

function setup () {
canvas = createCanvas (500 , 450);
canvas.center ();
canvas.position (390 , 150 );
object_detection = ml5.objectDetector ('cocossd', model_loaded);
document.getElementById ("status").innerHTML = "The detection process has just began";
}

function model_loaded () {
console.log ('model is loaded');
status = true ;
}

function gotResults (error , results) {
if (error)  {
    console.log (error);
}

else  {
console.log (results);
object = results;
}

}

function draw () {
image (img , 0, 0 ,  500 , 450 );
if 
(status != "" ){
    object_detection.detect (img , gotResults);

 r = random(255);
 g = random(255);
 b = random(255);

 for (i = 0 ; i < object.length;i++ ) {
document.getElementById('status').innerHTML = 'The object has been detected';
fill (r,g,b);
stroke (r,g,b);
text (object [i].label , object [i].x , object [i],y);
noFill ();
rect (object [i].x , object[i].y , object[i].width , object[i].height);
}
}


// fill ('#FF0000') ; 
// stroke ('#FF0000') ; 
// text ('dog' , 40 , 70);
// noFill ();
// rect (30 , 60 , 450 , 300); 

// text ('cat' , 270 , 130) ;
// rect (250 , 120 , 450 , 300) ;
// fill ('#FF0000');
// stroke ('#FF0000') ;
// noFill ();
}

