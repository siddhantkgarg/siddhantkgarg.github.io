


const cards =  [
  { title: 'Aleesha', audiosrc: '/audio-wave/audio/Aleesha',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Bhuvana', audiosrc: '/audio-wave/audio/Bhuvana.mp3',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Ipshita', audiosrc: '/audio-wave/audio/Ipshita.m4a',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Lilesh', audiosrc: '/audio-wave/audio/Lilesh.mpeg',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Ojas', audiosrc: '/audio-wave/audio/Ojas_',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/ojas-pk.jpg"},
  { title: 'Priyanka', audiosrc: '/audio-wave/audio/Priyanka',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Rishabh', audiosrc: '/audio-wave/audio/Rishabh.m4a',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Roshni', audiosrc: '/audio-wave/audio/Roshni.mp3',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Shamna', audiosrc: '/audio-wave/audio/Shamna.m4a',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Supriya', audiosrc: '/audio-wave/audio/Supriya',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/supriya.jpeg"},
  { title: 'Vaishali', audiosrc: '/audio-wave/audio/Vaishali.aac',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/vaishali.jpeg"},
  { title: 'Vandana', audiosrc: '/audio-wave/audio/Vandana',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/dummy.webp"},
  { title: 'Apurva', audiosrc: '/audio-wave/audio/Apurva',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/apurva-pk.jpeg"},
  { title: 'Vishnu', audiosrc: '/audio-wave/audio/Vishnu',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/vishnu.jpeg"},
  { title: 'Deepa', audiosrc: '/audio-wave/audio/Deepa.aac',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/deepa.jpeg"}
  

  
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
  
  
  


