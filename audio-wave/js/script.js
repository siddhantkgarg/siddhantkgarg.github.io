


const cards =  [
  { title: 'Aleesha', audiosrc: '/audio-wave/audio/Aleesha',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/aleesha.jpg"},
  { title: 'Lilesh', audiosrc: '/audio-wave/audio/Lilesh.mpeg',bottom:'0px',text:"Clue 1 : What's common between Floor, flour and Bake??" ,"img":false},
  { title: 'Ipshita', audiosrc: '/audio-wave/audio/Ipshita.m4a',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/ipshita.JPG"},
  { title: 'Priyanka', audiosrc: '/audio-wave/audio/Priyanka',bottom:'0px',text:"Clue 2 : What can give you a raise ? " ,"img":false},
  { title: 'Ojas', audiosrc: '/audio-wave/audio/Ojas_',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/ojas-pk.jpg"},
  { title: 'Bhuvana', audiosrc: '/audio-wave/audio/Bhuvana.mp3',bottom:'0px',text:"Clue 3 : Surprise of Gurgaon!" ,"img":false},
  { title: 'Supriya', audiosrc: '/audio-wave/audio/Supriya',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/supriya.jpeg"},
  { title: 'Rishabh', audiosrc: '/audio-wave/audio/Rishabh.m4a',bottom:'0px',text:"Clue 4 :  A fairy tale ? " ,"img":false},
  { title: 'Shamna', audiosrc: '/audio-wave/audio/Shamna.m4a',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/shamna.jpeg"},
  { title: 'Roshni', audiosrc: '/audio-wave/audio/Roshni.mp3',bottom:'0px',text:"Clue 5 : The one you trust has all the answers!" ,"img":false},
  { title: 'Vaishali', audiosrc: '/audio-wave/audio/Vaishali.aac',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/vaishali.jpeg"},
  { title: 'Vandana', audiosrc: '/audio-wave/audio/Vandana',bottom:'0px',text:"Ok Enough! Not all messages are clues!" ,"img":false},
  { title: 'Vishnu', audiosrc: '/audio-wave/audio/Vishnu',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/vishnu.jpg"},
  {title: 'Deepa', audiosrc: '/audio-wave/audio/Deepa.aac',bottom:'0px',text:"Something important coming up.." ,"img":false},
  { title: 'Apurva', audiosrc: '/audio-wave/audio/Apurva',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/apurva-pk.jpeg"},  
  {title:"Kirti", audiosrc: '/audio-wave/audio/kirti.m4a',bottom:'0px',text:"A trip to US ?? Enjoy the lockdown!!" ,"img":false},
  { title: 'Deepanjali', audiosrc: '/audio-wave/audio/deepanjali.ogg',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/deepanjali.jpeg"},  
  {title:"Sid", audiosrc: '/audio-wave/audio/Sid.aac',bottom:'0px',text:"" ,"img":"/audio-wave/static/img/sid.jpg"}
  

  
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
  
  
  


