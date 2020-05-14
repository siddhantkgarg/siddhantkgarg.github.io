var util = util || {};
util.toArray = function(list) {
  return Array.prototype.slice.call(list || [], 0);
};

var Terminal = Terminal || function(cmdLineContainer, outputContainer) {
  window.URL = window.URL || window.webkitURL;
  window.requestFileSystem = window.requestFileSystem || window.webkitRequestFileSystem;

  var cmdLine_ = document.querySelector(cmdLineContainer);
  var output_ = document.querySelector(outputContainer);

  const CMDS_ = [
    'cat', 'clear', 'clock', 'date', 'echo', 'help', 'uname', 'whoami',
    'askme'
  ];
  
  var fs_ = null;
  var cwd_ = null;
  var history_ = [];
  var histpos_ = 0;
  var histtemp_ = 0;

  window.addEventListener('click', function(e) {
    cmdLine_.focus();
  }, false);

  cmdLine_.addEventListener('click', inputTextClick_, false);
  cmdLine_.addEventListener('keydown', historyHandler_, false);
  cmdLine_.addEventListener('keydown', processNewCommand_, false);

  //
  function inputTextClick_(e) {
    this.value = this.value;
  }

  //
  function historyHandler_(e) {
    if (history_.length) {
      if (e.keyCode == 38 || e.keyCode == 40) {
        if (history_[histpos_]) {
          history_[histpos_] = this.value;
        } else {
          histtemp_ = this.value;
        }
      }

      if (e.keyCode == 38) { // up
        histpos_--;
        if (histpos_ < 0) {
          histpos_ = 0;
        }
      } else if (e.keyCode == 40) { // down
        histpos_++;
        if (histpos_ > history_.length) {
          histpos_ = history_.length;
        }
      }

      if (e.keyCode == 38 || e.keyCode == 40) {
        this.value = history_[histpos_] ? history_[histpos_] : histtemp_;
        this.value = this.value; // Sets cursor to end of input.
      }
    }
  }

  var count = -1;
  const questionBank = ["Where did we first met ? ", "How much I owe you ? ", "Where should we meet next?","Destination which got cancelled because of you ?"," On a scale of 10, how fun were our meets?"];
const answers  = ["Varkala","500","Mumbai","Hampi","10"];
let used = new Set();
var prevAns=-1;
var currentQuestion;
  //
  function processNewCommand_(e) {

    if (e.keyCode == 9) { // tab
      e.preventDefault();
      // Implement tab suggest.
    } else if (e.keyCode == 13) { // enter
      // Save shell history.
      if (this.value) {
        history_[history_.length] = this.value;
        histpos_ = history_.length;
      }

      // Duplicate current input and append to output section.
      var line = this.parentNode.parentNode.cloneNode(true);
      line.removeAttribute('id')
      line.classList.add('line');
      var input = line.querySelector('input.cmdline');
      input.autofocus = false;
      input.readOnly = true;
      output_.appendChild(line);

      if (this.value && this.value.trim()) {
        var args = this.value.split(' ').filter(function(val, i) {
          return val;
        });
        var cmd = args[0].toLowerCase();
        args = args.splice(1); // Remove cmd from arg list.
      }

     
      switch (cmd) {
        case 'cat':
          var url = args.join(' ');
          if (!url) {
            output('Usage: ' + cmd + ' https://s.codepen.io/...');
            output('Example: ' + cmd + ' https://s.codepen.io/AndrewBarfield/pen/LEbPJx.js');
            break;
          }
          $.get( url, function(data) {
            var encodedStr = data.replace(/[\u00A0-\u9999<>\&]/gim, function(i) {
               return '&#'+i.charCodeAt(0)+';';
            });
            output('<pre>' + encodedStr + '</pre>');
          });          
          break;
        case 'clear':
          output_.innerHTML = '';
          this.value = '';
          return;
        case 'clock':
          var appendDiv = jQuery($('.clock-container')[0].outerHTML);
          appendDiv.attr('style', 'display:inline-block');
          output_.appendChild(appendDiv[0]);
          break;
        case 'date':
          output( new Date() );
          break;
        case 'echo':
          output( args.join(' ') );
          break;
        case 'help':
          output('<div class="ls-files">' + CMDS_.join('<br>') + '</div>');
          break;
        case 'uname':
          output(navigator.appVersion);
          break;
        case 'whoami':
          var result = "<img src=\"" + codehelper_ip["Flag"]+ "\"><br><br>";
          for (var prop in codehelper_ip)
            result += prop + ": " + codehelper_ip[prop] + "<br>";
          output(result);
          break;
        case 'askme':
        if(count<=5){
            console.log("count:"+count);
            if(prevAns === -1 || prevAns===1){
                count=count==-1?1:count;
                currentQuestion = generateRandom();
            }
            output('<div class="question">' +questionBank[currentQuestion]+ '</div>');
            console.log("hello");
        }else{
            output('Wohooo! Type "gift" to get one!');

        }
        console.log("hi");
        break;
        case 'gift':
            output("<img class='gift' src='gift.jpg'></img>")
            output("Now you can call me and say thanks! :D");
            output('<p><a href="tel:+91-9999726176">Click to call me!</a></p>');
            break;
        case 'varkala':
            console.log(currentQuestion);
            if(currentQuestion==0){
                correctAns(0)               
            }
            else
            {
                output("Naah! Think more! I won't let you to next question untill you answer this!")
                prevAns = 0
            }
            break;
        case 'hampi':
        console.log(currentQuestion);
        if(currentQuestion==3){
            correctAns(3)
        }
        else
        {
            output("Naah! Think more! I won't let you to next question untill you answer this!")
            prevAns = 0
        }
        break;
        case '500':
            console.log(currentQuestion);
            if(currentQuestion==1){
                correctAns(1)
            }
            else
            {
                output("Naah! Think more! I won't let you to next question untill you answer this!")
                prevAns = 0
            }
            break;
        case 'mumbai':
            console.log(currentQuestion);
            if(currentQuestion==2){
                correctAns(2)
            }
            else{
                output("Naah! Think more! I won't let you to next question untill you answer this!")
                prevAns = 0
            }
            
            
            break;
        case '10':
            console.log(currentQuestion);
            if(currentQuestion==4){
                correctAns(4) 
            }
            else{
                output("Naah! Think more! I won't let you to next question untill you answer this!")
                prevAns = 0
            }
            
            
            break;
        
        default:
            console.log(count);
            console.log(currentQuestion);
        if(count!==-1){
            if(prevAns==1){
                if(cmd) {
                    output(cmd + ': command not found');
                  }
            }
            else{
                prevAns=0;
                if(currentQuestion!==4)
                output("Naah! Think more! I won't let you to next question untill you answer this!")
                else
                output("Naah! You can't rate me less! It's my code :P") 
            }
                
            }
          else if(cmd) {
            output(cmd + ': command not found');
          }
      };

      window.scrollTo(0, getDocHeight_());
      this.value = ''; // Clear/setup line for next input.
    }
  }

  function correctAns(index){
    output('<div class="answer"> Correct!!! Now "askme" more</div>');
    prevAns=1;
    used.add(index);
    currentQuestion = -1;
    count++;
  }

  function generateRandom(){
      var random = Math.floor(Math.random()*4 );
    while(used.has(random) || used.length==5){
        random = Math.floor(Math.random()*5 );
    }
    return random;
  }


  
  //
  function formatColumns_(entries) {
    var maxName = entries[0].name;
    util.toArray(entries).forEach(function(entry, i) {
      if (entry.name.length > maxName.length) {
        maxName = entry.name;
      }
    });

    var height = entries.length <= 3 ?
        'height: ' + (entries.length * 15) + 'px;' : '';

    // 12px monospace font yields ~7px screen width.
    var colWidth = maxName.length * 7;

    return ['<div class="ls-files" style="-webkit-column-width:',
            colWidth, 'px;', height, '">'];
  }

  //
  function output(html) {
    output_.insertAdjacentHTML('beforeEnd', '<p>' + html + '</p>');
  }

  // Cross-browser impl to get document's height.
  function getDocHeight_() {
    var d = document;
    return Math.max(
        Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
        Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
        Math.max(d.body.clientHeight, d.documentElement.clientHeight)
    );
  }

  //
  return {
    init: function() {
      output('<h2 style="letter-spacing: 4px">Birthday Bash!</h2><p>' + new Date() + '</p><p>Enter "help" for more information.</p>');
    },
    output: output
  }
};