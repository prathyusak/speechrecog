import React,{Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Input from './components/Input/Input';
import Label from './components/Label/Label';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import ReactDOM from 'react-dom';


class App extends Component {
  constructor() {
    super();
    this.state= {
      recorder:'',
      chunks:[],
      mimeType:'audio/webm;codecs=vp9',
      }
  };

  analyzeResponse = (results) => {
    const textarea = document.getElementById('textoutput');
    if (results.length !== 0) {
      let transcript = []
      results.forEach(result => transcript.push(result.alternatives[0].transcript))
      textarea.innerText = transcript.toString();
      console.log(transcript)
    } 
  };

  renderRecording =(blob) => {
    const blobUrl = URL.createObjectURL(blob,this.state.mimeType);
    const audio = document.getElementById('audio_clip');
    const anchor = document.getElementById('audio_tag');
    anchor.setAttribute('href', blobUrl);
    const now = new Date();
    anchor.setAttribute(
      'download',
      `recording-${now.getFullYear()}-${(now.getMonth() + 1).toString().padStart(2, '0')}-${now.getDay().toString().padStart(2, '0')}--${now.getHours().toString().padStart(2, '0')}-${now.getMinutes().toString().padStart(2, '0')}-${now.getSeconds().toString().padStart(2, '0')}.webm`
    );
    anchor.innerText = 'Download';
    audio.setAttribute('src', blobUrl);
    audio.setAttribute('controls', 'controls');
    const formData = new FormData()
    formData.append('myFile',blob)
    fetch('https://speech-recog-api.herokuapp.com/audio', {method: 'POST',body: formData})
    .then(response => response.json())
    .then(response => this.analyzeResponse(response.result.results))
    .catch(err =>console.log(err))

  };



  record = () => {
    const record=document.getElementById('record')
    if (record.innerText === 'Record') {
        record.style.background = "red";
        record.style.color = "black";
        record.innerText = 'Stop';
        this.state.recorder.start();
        console.log("recorder started");
       } else {
        record.style.background = "black";
        record.style.color = "red";
        record.innerText = 'Record';
        this.state.recorder.stop()
        console.log('recorder stopped')
      }
      this.state.recorder.ondataavailable = e =>  this.setState({chunks:[...this.state.chunks,e.data]});
      this.state.recorder.onstop =  () => {
        const recording = new Blob(this.state.chunks, {
             type: this.state.mimeType
           });
        this.renderRecording(recording);
           this.setState({chunks:[]});
         };
  }
  
  mic = () => {
    const getMic = document.getElementById('mic');
    const record=document.getElementById('record')
    getMic.setAttribute('hidden','hidden');
    record.removeAttribute('hidden');
    const constraints = {audio:true};
    navigator.mediaDevices.getUserMedia(constraints)
    .then(stream=> {
      this.setState({recorder:new MediaRecorder(stream)})
    })
  }

  render() {
    return (
    <div className="App">
      <Navigation />
      <div >
        <Input mic={this.mic} record={this.record}/>
        <Label />
      </div>
    </div>
  );
  }
}

export default App;
        