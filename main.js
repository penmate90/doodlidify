var quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye","eyeglasses","face","fan","feather","fence","finger","fire hydrant","fireplace","firetruck","fish","flamingo","flashlight","flip flops","floor lamp","flower","flying saucer","foot","fork","frog","frying pan","garden","garden hose","giraffe","goatee","golf club","grapes","grass","guitar","hamburger","hammer","hand","harp","hat","headphones","hedgehog","helicopter","helmet","hexagon","hockey puck","hockey stick","horse","hospital","hot air balloon","hot dog","hot tub","hourglass","house","house plant","hurricane","ice cream","jacket","jail","kangaroo","key","keyboard","knee","knife","ladder","lantern","laptop","leaf","leg","light bulb","lighter","lighthouse","lightning","line","lion","lipstick","lobster","lollipop","mailbox","map","marker","matches","megaphone","mermaid","microphone","microwave","monkey","moon","mosquito","motorbike","mountain","mouse","moustache","mouth","mug","mushroom","nail","necklace","nose","ocean","octagon","octopus","onion","oven","owl","paintbrush","paint can","palm tree","panda","pants","paper clip","parachute","parrot","passport","peanut","pear","peas","pencil","penguin","piano","pickup truck","picture frame","pig","pillow","pineapple","pizza","pliers","police car","pond","pool","popsicle","postcard","potato","power outlet","purse","rabbit","raccoon","radio","rain","rainbow","rake","remote control","rhinoceros","rifle","river","roller coaster","rollerskates","sailboat","sandwich","saw","saxophone","school bus","scissors","scorpion","screwdriver","sea turtle","see saw","shark","sheep","shoe","shorts","shovel","sink","skateboard","skull","skyscraper","sleeping bag","smiley face","snail","snake","snorkel","snowflake","snowman","soccer ball","sock","speedboat","spider","spoon","spreadsheet","square","squiggle","squirrel","stairs","star","steak","stereo","stethoscope","stitches","stop sign","stove","strawberry","streetlight","string bean","submarine","suitcase","sun","swan","sweater","swingset","sword","syringe","table","teapot","teddy-bear","telephone","television","tennis racquet","tent","The Eiffel Tower","The Great Wall of China","The Mona Lisa","tiger","toaster","toe","toilet","tooth","toothbrush","toothpaste","tornado","tractor","traffic light","train","tree","triangle","trombone","truck","trumpet","tshirt","umbrella","underwear","van","vase","violin","washing machine","watermelon","waterslide","whale","wheel","windmill","wine bottle","wine glass","wristwatch","yoga","zebra","zigzag"]

function preload() {
 recog=ml5.imageClassifier('DoodleNet');   
}
rand = Math.floor((Math.random()*quick_draw_data_set.length)+1)
//todraw= quick_draw_data_set[rand];
console.log(rand);
todraw="line";
var sket="";

help=0;
hep=0;
hp=0;
function time_my(){mytimer=setInterval(time, 1000); console.log("timered");  
}

function setup() {
    canvas=createCanvas(500,500);
    score=0;
    canvas.center();
    background("white");
    canvas.mouseReleased(classifyimage);
    synth= window.speechSynthesis;
  time_my();
   // document.getElementById("to_draw").innerHTML="Sketch to draw: "+todraw;
}
counter=120
function draw() {
  stroke(0);
  strokeWeight(3);

 if (mouseIsPressed) {
         line(pmouseX, pmouseY, mouseX, mouseY);
         
         
     }
     if(counter==0){ counter=120
        document.getElementById("yrn").innerHTML="Time's up! Try another one!";
        say= new SpeechSynthesisUtterance(document.getElementById("yrn").innerHTML);
         synth.speak(say);
  changer();


}

    }

function classifyimage() {
    recog.classify(canvas, gotResult);
}


function gotResult(error,result) {
    if (error) {
        console.error(error);
    } else {
        console.log(result)
        sket= result[0].label
        document.getElementById("sketch_name").innerHTML="Your Sketch Name: "+sket;
        document.getElementById("sketch_accuracy").innerHTML="Accuracy: "+Math.round(result[0].confidence*100)+"%";
        rand = Math.floor((Math.random()*quick_draw_data_set.length)+1)
if (todraw==sket) {
    help=1;
}else{help=0}
       
    }
    console.log(help);
    say= new SpeechSynthesisUtterance(result[0].label);
    synth.speak(say);

}
function time() {
    counter--
    document.getElementById("timer").innerHTML="Time left: "+counter;
}


function tim_reset() {
    hp=0;
    counter=120;
    mytimer=setInterval(time, 1000);
    console.log(hp);
}

function changer() {
    todraw= quick_draw_data_set[rand];
    document.getElementById("to_draw").innerHTML="Sketch to draw: "+todraw;}

function submit() {
    hp=1;
   
        if (help==1) {
        score=score+1;
        document.getElementById("score").innerHTML="Score="+score;
        document.getElementById("yrn").innerHTML="Yes correct! Lets try another one!";
        background("white");
        changer();
        
        help=0
        console.log(hp);
        clearInterval(mytimer);
        setTimeout(tim_reset(), 100);

    } else {changer();
        clearInterval(mytimer);
        setTimeout(tim_reset(), 100);
    background("white");
        document.getElementById("yrn").innerHTML="Wrong... try another one.";
    }
    console.log(help);
    say= new SpeechSynthesisUtterance(document.getElementById("yrn").innerHTML);
         synth.speak(say);
}
 
function clearc() {
    background("white");
}

