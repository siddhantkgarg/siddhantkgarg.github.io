


const cards =  [
  { title: 'sid', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"Sid's Personalized Message / A clue to something"},
  { title: 'harsh', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"harsh's Personalized Message / A clue to something"},
  { title: 'deepanjali', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"deepanjali's Personalized Message / A clue to something"},
  { title: 'ipshita', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"ipshita's Personalized Message / A clue to something"},
  { title: 'soni', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"soni's Personalized Message / A clue to something"},
  { title: 'mom', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"mom's Personalized Message / A clue to something"},
  { title: 'dad', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"dad's Personalized Message / A clue to something"},
  { title: 'dj', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"dj's Personalized Message / A clue to something"},
  { title: 'sham', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"sham's Personalized Message / A clue to something"},
  { title: 'doctor', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"Sid's Personalized Message / A clue to something"},
  { title: 'priyanka', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"priyanka's Personalized Message / A clue to something"},
  { title: 'dd', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"dd's Personalized Message / A clue to something"},
  { title: 'shamna', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"shamna's Personalized Message / A clue to something"},
  { title: 'rahul', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"rahul's Personalized Message / A clue to something"},
  { title: 'aleesha', audiosrc: '/audio-wave/audio/sid-audio.mp3',bottom:'0px',text:"aleesha's Personalized Message / A clue to something"},
  { title: 'vishnupriya', audiosrc: '/audio-wave/audio/harsh-audio.mp3',bottom:'0px',text:"vishnupriya's Personalized Message / A clue to something"},
  

  
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
  
  
  


