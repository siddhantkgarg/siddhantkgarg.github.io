


const cards =  [
  { title: 'sid', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'harsh', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"}
];

new Vue({
  el: '#app',
  data: {
    cards : cards
  },
  methods:{
    playSelected(item){
       console.log(item);
       waveIdMap[item].playPause();
    },
    verifyGuessedName(a,b,i){
      if(a===b.value){
        this.cards[i].bottom = '-200px';
        //this.cards[i].bottom = '-200px';
      }
    },
    computedBottom(i){
      return this.cards[i].bottom;
    }
    }
  });
  var waveIdMap = [];
  cards.map(msg=>{
    msg.wavesurfer  = WaveSurfer.create({
        container: '#'+msg.title,
        waveColor: 'violet',
        progressColor: 'purple'
    });
    msg.wavesurfer.load(msg.audiosrc);
    waveIdMap[msg.title] = msg.wavesurfer;
    // var p = document.getElementById(msg.title+'-play-btn');
    // p.setAttribute('wave-ref',msg.wavesurfer);
  });
  
  
  


