// from https://codeburst.io/html5-speech-recognition-api-670846a50e92
window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
let currentTranscript = "";
let finalTranscript = "";

let p = document.createElement("p");
const words = document.querySelector(".wordsContainer");
words.appendChild(p);

let recognition = new window.SpeechRecognition();
recognition.interimResults = true;
recognition.maxAlternatives = 10;
recognition.continuous = true;

// function to start Speech Recognition
function startRecognition() {
    recognition.start();
    console.log("Begin speech recognition.")
}

//function to end speech recognition
function stopRecognition() {
    recognition.stop();
    console.log("Speech recognition has stopped.");
    console.log("Final Transcript: " + finalTranscript)
}

function clearText() {
    $(".wordsContainer").empty();
    finalTranscript = "";
    currentTranscription = "";
    interimTranscript = ""
    console.log("Clear text button clicked")
}

// function to submit the data to the server.
function submitToServer(event){
    event.preventDefault();
    var speech = {
        text: finalTranscript
        //text: "Brian is a wiz"
    }
    $.post("api/presenter/text", speech)
    console.log(speech)
    console.log("Submitted to Server!")
};

recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex, len = event.results.length; i < len; i++) {
    let transcript = event.results[i][0].transcript;

    if (event.results[i].isFinal) {
        finalTranscript += transcript + "\n";
        currentTranscript = transcript;

        //aim to push the currentTranscript on to the SQL Server
        
        //finalTranscript = transcript;
        console.log("Current Transcript: "+ currentTranscript);
                
        $(".wordsContainer").append(currentTranscript + "<br>" + "<br>")
        } else {
            interimTranscript += transcript; // interimTranscript is not final
        }
    }        
}

$(document).ready(function(){
    $("#btnStartRec").click(startRecognition); // button to start speech recognition
    $("#btnEndRec").click(stopRecognition); // button to stop speech recognition
    $("#btnClearRec").click(clearText); //button to clear the display 
     $("#btnSubmitRec").click(submitToServer); // button to push the final transcript to the server
});

    