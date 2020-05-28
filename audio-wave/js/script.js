


const cards =  [
  { title: 'Aleesha', audiosrc: '/audio-wave/audio/Aleesha',bottom:'0px',text:"/audio-wave/static/img/dummy.webp" },
  { title: 'Bhuvana', audiosrc: '/audio-wave/audio/Bhuvana.mp3',bottom:'0px',text:"harsh's Personalized Message / A clue to something"},
  { title: 'Ipshita', audiosrc: '/audio-wave/audio/Ipshita.m4a',bottom:'0px',text:"deepanjali's Personalized Message / A clue to something"},
  { title: 'Lilesh', audiosrc: '/audio-wave/audio/Lilesh.mpeg',bottom:'0px',text:"soni's Personalized Message / A clue to something"},
  { title: 'Ojas', audiosrc: '/audio-wave/audio/Ojas_',bottom:'0px',text:"Sid's Personalized Message / A clue to something"},
  { title: 'Priyanka', audiosrc: '/audio-wave/audio/Priyanka',bottom:'0px',text:"priyanka's Personalized Message / A clue to something"},
  { title: 'Rishabh', audiosrc: '/audio-wave/audio/Rishabh.m4a',bottom:'0px',text:"dd's Personalized Message / A clue to something"},
  { title: 'Roshni', audiosrc: '/audio-wave/audio/Roshni.mp3',bottom:'0px',text:"shamna's Personalized Message / A clue to something"},
  { title: 'Shamna', audiosrc: '/audio-wave/audio/Shamna.m4a',bottom:'0px',text:"rahul's Personalized Message / A clue to something"},
  { title: 'Supriya', audiosrc: '/audio-wave/audio/Supriya',bottom:'0px',text:"aleesha's Personalized Message / A clue to something"},
  { title: 'Vaishali', audiosrc: '/audio-wave/audio/Vaishali.aac',bottom:'0px',text:"vishnupriya's Personalized Message / A clue to something"},
  { title: 'Vandana', audiosrc: '/audio-wave/audio/Vandana',bottom:'0px',text:"vishnupriya's Personalized Message / A clue to something"},
  

  
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
      if(a.toUpperCase() === b.value.toUpperCase()){
        waveIdMap[a].pause();
        this.cards[i].bottom = '-500px';
        this.cards[i].error = 'red';
        //this.cards[i].bottom = '-200px';
      }else{
        waveIdMap['wrong'].play();
      }
    },
    computedBottom(i){
      return this.cards[i].bottom;
    }
    }
  });
  var waveIdMap = [];
  cards.map(msg=>{
    cards.error = "black";
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
  
  var wrong = WaveSurfer.create({
    container: '#hidden',
    waveColor: 'violet',
    progressColor: 'purple'
});
wrong.load('/audio-wave/audio/wrong-ans.mp3');
waveIdMap['wrong'] = wrong;
  
  
  


