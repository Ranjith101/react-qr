import  QRCode  from "qrcode";
import { useState } from "react";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [val, setVal] = useState('');

  const GenerateQrCode = () =>{
    QRCode.toDataURL(url,{width:800,margin:2,color:{
      dark:'#335383ff',
      // light:'#0000ff'
    }},(err, url)=>{
      if(err)
        return console.error(err)
        console.log(url)
        setQrcode(url)
        setVal('')
      
    })
  }

  function handleSubmit(e) {
    e.preventDefault();
    GenerateQrCode();
    setUrl('')
  }
  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <br />
      <input type="text" value={url} id='url' onChange={(evt) => setUrl(evt.target.value) }  placeholder="eg.https://www.google.com" />
      <button className="btn" onClick={handleSubmit}>Generate</button>
      {qrcode && <>
      
      <img src={qrcode}/>
      <a href={qrcode} className="btn" download="qrcode.png">Download</a>
      </>}
      
    </div>
  );
}

export default App;
