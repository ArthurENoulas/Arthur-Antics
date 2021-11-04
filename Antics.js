//window.onload = choosePic;
var turn = 1;
function chooseQs(){
	var questions = ["what musical instrument does this make you think of?",
	 "what European country do you think of?",
	"what famous person does this picture make you think of in 1-2 words?",
	 "what room in the house does this make you think of in answer has to be a room",
	" What occupation do you associate this picture with?",
	"what family member do you associate this picture with (must be a mutual family member)",
	"what dinner table item is this picture associated with? could be a food!",
	" what holiday does this picture remind you of",
	"what family member do you associate this picture with?",
	 "What action verb can you think of?",
	 "what mammal can you think of?",
	"what song title does this picture remind you of?",
"What TV character does this remind u of?",
"What TV series does this remind u of?",
"What car make or model does this make u think of?",
"What vacation place do u think of?",
"What school subject do u think of?",
"What animal do you think of?",
"What fruit does this picture make u think of?",
"what actor does this make you think of?",
"What would be the name of the artist that drew this picture?",
	"what sports team does this make you think of?",
"What musical instrument?", 
"What genre of music?",
"what genre of movies?",
"what 4 letter word beginning with a vowel?",
"An animal with 3 letters in its name?",
"What Noble Gas from the periodic table comes to mind?",
"which metal on the periodic table?",
"What mathematical formula?",
"Which USA President (say first name to match easier) ?",
"What adjective does this make you think of?",
"This symbolizes the (chinese new year) of the ______.",
"How does this picture make you feel?",
"What do you see?",
"what pizza topping?",
"What Dairy Product?",
"what farm animal?",
"Which zodiac sign?",
"Which one of Santa’s Reindeer is in this picture?",
"What African Country do you associate this picture with?",
"What object would you add to spice up this picture?",
"How many tears can this picture make you shed?",
"on a scale of 1 to 10, how ugly is this picture?",
"on a scale of 1-10, how beautiful is this picture?",
"on a scale of 1-100, how old is this picture? (years)",
"How long would you let your friend(s) hold this picture?",
"what is your favorite color in this picture?",
"name one person you would give this picture to.",
"Put down 4 words for each corner of the picture.",
"is bigfoot in this picture?",
"give a name to this picture"
	];
	var randomNumber1 = Math.floor(Math.random()*questions.length);
	var randomNumber2 = Math.floor(Math.random()*questions.length);
	var randomNumber3 = Math.floor(Math.random()*questions.length);
document.getElementById("item1").innerHTML =
questions[randomNumber1];
document.getElementById("item2").innerHTML = 
questions[randomNumber2];
document.getElementById("item3").innerHTML =
questions[randomNumber3];
return questions[randomNumber1];
return questions[randomNumber2];
return questions[randomNumber3];
}
//window.onload = choosePic;


var decision = Math.random();
function choosePic()
	
{
	//var i = document.getElementById("myPicture")="<img src='" + randomizer +".jpg' width='185' height='185' id = 'myPicture'>";
var	myPix = [
"pix/1.jpg",
"pix/2.jpg",
"pix/3.jpg",
"pix/4.jpg",
"pix/5.jpg",
"pix/6.jpg",
"pix/7.jpg",
"pix/8.jpg",
"pix/9.jpg",
"pix/10.jpg",
"pix/11.jpg",
"pix/12.jpg",
"pix/13.jpg",
"pix/14.jpg",
"pix/15.jpg",
"pix/16.jpg",
"pix/17.jpg",
"pix/18.jpg",
"pix/19.jpg",
"pix/20.jpg",
"pix/21.jpg",
"pix/22.jpg",
"pix/23.jpg",
"pix/24.jpg",
"pix/25.jpg",
"pix/26.jpg",
"pix/27.jpg",
"pix/28.jpg",
"pix/29.jpg",
"pix/30.jpg",
"pix/31.jpg",
"pix/32.jpg",
"pix/33.png",
"pix/34.png",
"pix/35.jpg",
"pix/36.png",
"pix/37.png",
"pix/38.jpg",
"pix/39.jpg",
"pix/40.png",
"pix/41.png",
"pix/42.png",
"pix/43.jpg",
"pix/44.jpg",
"pix/45.png",
"pix/46.jpg",
"pix/47.jpg",
"pix/48.jpg",
"pix/49.jpg",
"pix/50.jpg",
"pix/51.jpg",
"pix/52.png",
"pix/53.png",
"pix/54.jpg",
"pix/55.jpg",
"pix/56.jpg",
"pix/58.jpg",
"pix/59.png",
"pix/60.jpg",
"pix/61.jpg",
"pix/62.jpg",
"pix/63.jpg",
"pix/64.jpg",
"pix/65.jpg",
"pix/66.png",
"pix/67.jpg",
"pix/68.jpg",
"pix/69.jpg",
"pix/70.jpg",
"pix/71.jpg",
"pix/72.jpg",
"pix/73.jpg",
"pix/74.jpg",
"pix/75.jpg",
"pix/76.jpg",
"pix/77.jpg",
"pix/78.jpg",
"pix/79.jpg",
"pix/80.jpg"];
var randomizer = Math.floor(Math.random()*myPix.length);
var randomPic = document.getElementById("myPicture").src = myPix[randomizer];
return randomPic;



	}



function chooseGoal(){
	var myGoal = ["Match!", "Don't Match!"];
	var randomizer = Math.floor(Math.random()*myGoal.length);
	document.getElementById("rule1").innerHTML = myGoal[randomizer];
	return randomizer;
}
//player names.
function getPlayerOne(){
	var player1 = prompt("username", "");
	document.getElementById("enterName0").innerHTML = player1 + "";
}



function getPlayerTwo(){
	var player2 = prompt("username", "");
	document.getElementById("enterName1").innerHTML = player2 + "";
	}

function getPlayerThree(){
	var player3 = prompt("username", "");
	document.getElementById("enterName2").innerHTML = player3 + "";

}

function getPlayerFour(){
	var player4 = prompt("username", "");
	document.getElementById("enterName3").innerHTML = player4 + "";

}



function getPlayerFive(){
	var player5 = prompt("username", "");
	document.getElementById("enterName4").innerHTML = player5 + "";

}

function getPlayerSix(){
	var player3 = prompt("username", "");
	document.getElementById("enterName5").innerHTML = player6 + "";

}

function getPlayerSeven(){
	var player3 = prompt("username", "");
	document.getElementById("enterName6").innerHTML = player7 + "";

}
function getPlayerEight(){
	var player8 = prompt("username", "");
	document.getElementById("enterName7").innerHTML = player8 + "";

}


