$(function() {

    //Allow the user to start live stream audio

    $("#live-audio-start").on("click", function () {
        //gets browser audio
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(mediaStream => {
            //chunks audio data and sends it to the server
            console.log('raw stream',mediaStream);
            const recorder = new MediaRecorder(mediaStream, {type: "audio/*", timeSlice: 500});
            recorder.start({timeSlice:500});
            console.log('recorder variable', recorder);
            recorder.ondataavailable = function(chunk) {
                console.log('inside ondataavailable');
                $.put("/live/audio", chunk)
                .then(function(result){
                    console.log('inside promise')
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