// generate messages the chatbot will return 
var greetings = [
    'Hi there, it\'s ChatBot :-)', 
    'Hello! I\'m ChatBot', 
    'Hi, I\'m ChatBot!', 
    'Hey there, how are you? I\'m ChatBot', 
    'Hey, ChatBot here!'
];

var secondMessage = [
    'I want to ask you some questions!', 
    'I\'m going to ask some questions to get to know you better!', 
    'Let me ask you a couple of questions!'
];

var chatBotMessages = [
    'Do you have any pets? I have two cats!', 
    'Where are you from?', 
    'What is your favorite type of music?', 
    'What is your favorite food?', 
    'What is your favorite color? Mine is yellow',  
    'What are you up to these days?', 
    'What is your favorite book?',
    'What is your favorite movie?', 
    'Where is the last place you traveled to?', 
    'What is the weather like where you are?',
    'Do you remember your most recent dream?', 
    'If you could visit any place in the world, where would you go?'
];

var wouldYouRather =[
    'Would you rather live in a desert or in the North Pole?', 
    'Would you rather live in a cave or in a tree house?',
    'Would you rather have to sing in front of strangers or dance in front of strangers?',
    'Would you rather run a quick mile or hike for three hour?',
    'Would you rather be able to fly or be invisible?',
    'Would you rather go to sleep early or have to stay up late at a party?', 
    'Would you rather go to the moon, or go to mars?', 
    'Would you rather fight 10 duck-sized horses, or 1 horse-sized duck?'
];

//grab a random message from the array
function getGreeting() {
    return(greetings[Math.floor(Math.random() * greetings.length)]);
};
function getBotMessage() {
    return(chatBotMessages[Math.floor(Math.random() * chatBotMessages.length)]);
};  
function getBotWouldYouRather() {
    return(wouldYouRather[Math.floor(Math.random() * wouldYouRather.length)]);
};  
function getSecondMessage() {
    return(secondMessage[Math.floor(Math.random() * secondMessage.length)]);
};

//a couple of options of messages depending on chatbot message count
let chatbotCount = 0; 
function chatBotMessage() {

    if(chatbotCount === 0){
        newBotMsg(getGreeting());
    } else if (chatbotCount === 1){
        newBotMsg(getSecondMessage());
    } else if(chatbotCount === 5){
        newBotMsg("Let's play 'Would You Rather'!");
    } else if (chatbotCount > 5 && chatbotCount <12) {
        newBotMsg(getBotWouldYouRather());
    } else if (chatbotCount===12){
        newBotMsg("That was fun! Thanks for playing!");
    } else {
        newBotMsg(getBotMessage());
    }
    chatbotCount ++; 
};

// save entered text value to make a new text bubble on the screen
function newTextMessage() {
    let textValue = document.getElementById("input").value;
    newScreenMsg(textValue);
    // console.log(textValue);
};

//current time and format to just show hours and minutes
function addTimeFormat(timeStamp) {
    timeStamp = timeStamp.split(":");
    var hour = timeStamp[0]; 
    var min = timeStamp[1]; 
    var ampm = timeStamp[2].split(" ");
    ampm = ampm[1];
    var totalTime = hour + ":" + min+ " " + ampm;
    return totalTime;
};

//create new bot message on screen
function newBotMsg(text){
    let newTextBoxBot = document.createElement("div");
    let newTextContentBot = document.createElement("p");
    $(newTextBoxBot).addClass("bubble bot").append(newTextContentBot);
    $(newTextContentBot).append(text);

    let screenSpace = document.getElementById("screen"); 
    $(screenSpace).append(newTextBoxBot);

    //add time
    let timeStamp = new Date().toLocaleTimeString();
    let timeSpace = document.createElement("p");
    $(timeSpace).addClass("time");
    $(newTextBoxBot).append(timeSpace);
    $(timeSpace).append(addTimeFormat(timeStamp));
};

 //create new user message on screen
function newScreenMsg(text){
    let newTextBox = document.createElement("div");
    let newTextContent = document.createElement("p"); 
    $(newTextBox).addClass("bubble user").append(newTextContent);
    $(newTextContent).append(text);

    let screenSpace = document.getElementById("screen"); 
    $(screenSpace).append(newTextBox);

    //add time
    let timeStamp = new Date().toLocaleTimeString();
    let timeSpace = document.createElement("p");
    $(timeSpace).addClass("time");
    $(newTextBox).append(timeSpace);
    $(timeSpace).append(addTimeFormat(timeStamp));
};

//AUTOSCROLL
function scrollToBottom(id){
    var element = document.getElementById(id);
    element.scrollTop = element.scrollHeight - element.clientHeight;
};

// send on keypress enter(key =13)
var send = document.getElementById("input");
send.addEventListener("keyup", function(event){
    if(event.which === 13) {
        document.getElementById("send").click();
    }
});

//loading bubble animation
function loadingBubble() {
    var circle = '<div class = "circle-holder"><div class = "circle"></div></div>';
    let loading = document.createElement("div"); 
    
    $(loading).addClass("bubble bot circle-holder load-7 ").append(circle);    

    let screenSpace = document.getElementById("screen"); 
    $(screenSpace).append(loading);
};


