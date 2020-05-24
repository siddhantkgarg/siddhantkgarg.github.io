


const cards =  [
  { title: 'sid', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'harsh', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'deepanjali', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'ipshita', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'soni', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'mom', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'dad', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'dj', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'sham', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'doctor', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'priyanka', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'dd', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'shamna', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'rahul', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'k1', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"},
  { title: 'k2', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"2"},
  { title: 'k3', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"1"}

  
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
  
  
  


