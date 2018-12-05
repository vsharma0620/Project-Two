$(function() {

    //Allow the user to start live stream audio

    $("#live-audio-start").on("click", function () {
        //gets browser audio
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(mediaStream => {
            //chunks audio data and sends it to the server
            console.log(mediaStream);
            const recorder = new MediaStreamRecorder(mediaStream, {type: "audio/*", timeSlice: 6000});

            recorder.ondataavailable = function(chunk) {
                $.put("/live/audio", chunk)
                .then(function(result){
                    if (response.status >= 200 && response.status < 300) {
                        console.log("chunk", chunk);
                        console.log("result", result)
                    } else {
                        var error = new Error(response.statusText)
                        error.response = response
                        throw error
                    } 
                    recorder.cancel();
                });
            };
                
                
        });
    });

});
    //converts stream to AudioBuffer object