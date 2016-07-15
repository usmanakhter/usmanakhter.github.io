$(document).ready(function() {

var clientHeight = $( window ).height();
var clientWidth = $( window ).width();

$button1=$("<button id='button1'>change grid</button>");//define button1
$button2=$("<button id='button2'>random colors</button>");//define button2
$button3=$("<button id='button3'>clear</button>");//define button3
$("<style type='text/css'> .button{ height: "+(0.05*clientHeight)+"px; width: "+(0.15*clientWidth)+"px; margin:auto 10px;} </style>").appendTo('body');//button css

$('body').append($button1, $button2, $button3);//add buttons to DOM
$('button').addClass("button");//add button CSS


$container=$('<div id="container"></div>');//define container
$("<style type='text/css'> .container{ height: "+(0.90*clientHeight)+"px; width: "+(0.95*clientWidth)+"px; background-color:orange; margin: auto;} </style>").appendTo('body'); //container CSS

$container.appendTo('body');//add container to DOM
$('div#container').addClass('container');//add container CSS

var $n = prompt("How many rows in your grid? (Type 16 for a 16x16 grid)"); //# of rows in grid
var newSquares= function() {
$("<style type='text/css'> .squareStyle{ height: "+((0.90*clientHeight/$n)-2)+"px; width: "+((0.95*clientWidth/$n)-2)+"px; float:left; margin:.99px .99px; background-color:#fff; } </style>").appendTo('#container'); //add squareStyle CSS rule to container

$squares = $('<div id="squares"></div>'); //define squares
$squares.appendTo('#container');// add 1 square to container
for (i=2; i<=($n*$n); i++){
    $squares.clone().appendTo("#container");
};//add copies

$('div#squares').addClass("squareStyle"); // add squareStyle CSS to #squares
}; //end newSquares fxn

var normalHover=function(){
$(".squareStyle").hover(function(){
    $(this).css("background-color", "orange");
    }, function(){
    $(this).css("background-color", "black");
}); //normal hover effect
};

newSquares();
normalHover();

var getRandomColor=function() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var randomHover=function() {
	$(".squareStyle").hover(function(){
	    $(this).css("background-color", "white");
	    }, function(){
	    $(this).css("background-color", getRandomColor());
	}); 
};//random hover effect


$button1.click(function() {
    $(".squareStyle").remove();
    $n = prompt("How many rows in your grid? (Type 16 for a 16x16 grid)"); //# of rows in grid
    newSquares();
    normalHover();
}); //make button1 bind to newSquares fxn

$button2.click(function() {
    $(".squareStyle").remove();
    newSquares();
    randomHover();
}); //make button2 bind to randomSquares fxn

$button3.click(function() {
    $(".squareStyle").remove();
    newSquares();
});


});
