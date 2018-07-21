console.log("yeah");
navigator.getUserMedia(
  {
    video: { width: 1280, height: 720 } ,
    audio: true
  },
  function(stream){
    console.log("successful", stream);
    var video = document.querySelector("video");
    video.src = URL.createObjectURL(stream);
    console.log('myVideo', video)
    video.onloadedmetadata = function(e) {
      console.log("myMetadata", e);
      video.play()
    };
  },
  err => {
    console.log("failed", err);
  }
);
