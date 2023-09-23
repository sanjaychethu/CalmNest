
          var playBtn=document.getElementById("playBtn");
          const wavesurfer = WaveSurfer.create({
      container: '#waveform',
      waveColor: 'white',
      progressColor: 'light green',
      barWidth: 4,
      responsive:true,
      height:90,
      bearRadius:4
    
      
    })
    wavesurfer.load('musics/10 Minute Mindfullness Meditation.mp3');
    playBtn.onclick=function(){
      wavesurfer.playPause();
      if(playBtn.src.includes("images/kisspng-youtube-play-button-clip-art-pause-button-5ac1a853c6c212.9168316215226409798141.png")){
        playBtn.src="images/pause-icon-29584.png";
      }else{
        playBtn.src="images/kisspng-youtube-play-button-clip-art-pause-button-5ac1a853c6c212.9168316215226409798141.png";
    
      }
    }
    wavesurfer.on('finsh', function(){
      playBtn.src="images/kisspng-youtube-play-button-clip-art-pause-button-5ac1a853c6c212.9168316215226409798141.png";
      wavesurfer.stop();
    
    
    })
    
    
