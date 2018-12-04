// https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis

// Initiate SpeechSynthesis API

var synth = window.speechSynthesis;

// Dom elements
var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('#text-input');
var voiceSelect = document.querySelector('#voice-select');
var pitch = document.querySelector('#pitch');
var pitchValue = document.querySelector('#pitch-value');
var rate = document.querySelector('#rate');
var rateValue = document.querySelector('#rate-value');

// Initiate Voice Arrays
var voices = [];

function getVoices() {
    voices = synth.getVoices();
    var selectedIndex = voiceSelect.selectedIndex < 0 ? 0 : voiceSelect.selectedIndex;
    voiceSelect.innerHTML = '';
    //console.log(voices);

    // Loop through the voices to create an option for each voice
    for(i = 0; i < voices.length ; i++) {

        //create option element
        var option = document.createElement('option');
        option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
        
        // Fill Option with Voice and Language
        if(voices[i].default) {
          option.textContent += ' -- DEFAULT';
        }
    
        // Set attributes
        option.setAttribute('data-lang', voices[i].lang);
        option.setAttribute('data-name', voices[i].name);

        // Appending item
        voiceSelect.appendChild(option);
      }
      voiceSelect.selectedIndex = selectedIndex;
};

//getVoices();

if (synth.onvoiceschanged !== undefined) {
    synth.onvoiceschanged = getVoices;
}

// Speak functionality

function speak() {
    //check if currently speaking
    if(synth.speaking){
        console.log("Currently Speaking...");
        return;
    }
    if(inputTxt.value !== '') {
        //Get Text to Speak
        var speakText = new SpeechSynthesisUtterance(inputTxt.value);

        // Speak End
        speakText.onend = function (){
        console.log("End of Speech...");
        };
    
        // Speak Error
        speakText.onerror = function (){
        console.error("Something went wrong...")
        }

        //Selected Voice
        var selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name');
        console.log(selectedVoice);

        // Set Voice to Google British Male UK
        // Set voice to Google British Female


        //Loop through available voices
        for(i = 0; i < voices.length ; i++) {
            if(voices[i].name === selectedVoice) {
                speakText.voice = voices[i];
            }
        };
        
        // Set Pitch and Rate
        speakText.rate = rate.value;
        speakText.pitch = pitch.value;

        //Speak
        synth.speak(speakText);
        //console.log(voices)
    }
};

// Event Listeners

// Form Submit
inputForm.onsubmit = function(event){
    event.preventDefault();
    speak();
    inputTxt.blur();
};

// Rate Value Change
rate.onchange = function() {
    rateValue.textContent = rate.value
};

// Pitch Value Change
pitch.onchange = function() {
    pitchValue.textContent = pitch.value
};

// Voice Select Change
// voiceSelect.onchange = function() {
//     speak()
// };

// On PullFromServer, grabs value from server and updates the view

function pullDown(){
    $.get("/api/presenter/text", function(data){
        var pullDown = "data";
        console.log(pullDown);
        //populate the textbox with the data from the server.
        $("#text-input").innerHTML = pullDown;

    });
}

$("#btnPullSyn").click(function(){
    pullDown();
});

$(document).ready(function(){
    getVoices();
});
