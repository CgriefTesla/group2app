function Taihi(){

const [str, setStr] = useState('default');

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

function doAPI(event) {
  fetch('http://127.0.0.1:5000/api')
  .then(res => res.json())
  .then(json => {
    console.log(json)
    setStr(json.result)
  })
  event.preventDefault();
}

return (
  <div className="App">
    <button type="button" className="btn btn-primary" onClick={()=>nowPosition()}>Click</button>
    <button type="button" className="btn" onClick={(e)=>doAPI(e)}>API</button>
    {str}
    <br/>
    出典:「位置参照情報」(国土交通省)の加工情報・「HeartRails Geo API」(HeartRails Inc.)
  </div>
);
}

export default Taihi;