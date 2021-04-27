import { useState } from 'react';
import '../styles/App.css';

function App() {
  const [postal, setPostal] = useState('');

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    var crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options);

  // 現在地とその郵便番号を返す
  function nowPosition(){
    console.log('hello?')
    navigator.geolocation.getCurrentPosition(position=>{
      console.log(position)
      fetch("https://geoapi.heartrails.com/api/json?method=searchByGeoLocation&x="+position.coords.longitude
      +"&y="+position.coords.latitude)
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(err => console.log(err))
    },
    err => {
      console.log(err)
    })
  }

  return (
    <div className="App">
      <button onClick={()=>nowPosition()}>Click</button>
      出典:「位置参照情報」(国土交通省)の加工情報・「HeartRails Geo API」(HeartRails Inc.)
    </div>
  );
}

export default App;
