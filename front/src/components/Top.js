import Axios from 'axios'
import { useState } from 'react'

function Top(){
    const [searchNum, setSearchNum] = useState('')
    const [nempi, setNempi] = useState('')
    const [gasolineNum, setGasolineNum] = useState('')
    const [longitude, setLongtitude] = useState('')
    const [latitude, setLatitude] = useState('')

    function hello() {
        Axios.get('http://127.0.0.1:5000')
        .then(res => console.log(res))
    }
    hello()

    async function search(){
        if(!validate()) return 
        navigator.geolocation.getCurrentPosition(position => console.log(position))
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject)
        })
        setLongtitude(position.coords.longitude)
        setLatitude(position.coords.latitude)

        Axios.post('http://127.0.0.1:5000/search', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            searchNum: searchNum,
            nempi: nempi,
            gasolineNum: gasolineNum
        }).then(res => console.log(res))
    }

    function validate(){
        if (!searchNum){
            alert('調べる数を入力してください')
            return false 
        }
        if (!nempi){
            alert('燃費を入力してください')
            return false
        }
        if (!gasolineNum){
            alert('入れるガソリンの量を入力してください')
            return false
        }

        const regex = /\d+/
        if (!regex.test(searchNum)){
            alert('調べる数は半角数字で入力してください')
            return false
        }
        if (!regex.test(nempi)){
            alert('燃費は半角数字で入力してください')
            return false
        }
        if (!regex.test(gasolineNum)){
            alert('入れるガソリンの量は半角数字で入力してください')
            return false
        }

        return true
    }

    return(
        <div>
            <br/>
            <header>
            <div className="container">
                <div className="row">
                <div className="col-sm-6">
                    ガソリンスタンド最安検索
                </div>
                <div className="col-sm-3">
                    サイト情報
                </div>
                <div className="col-sm-3">
                    連絡
                </div>
                </div>
            </div>
            </header>
            <br/>

            <div className="container-fluid">
                <div className="row">
                    {/* <div className="col-sm-2">
                        スタート
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="exampleInputName2" placeholder="000-0000"/>
                    </div> */}
                    <div className="col-sm-2">
                        候補
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="searchNum" placeholder="20（個）" onChange={(e) => setSearchNum(e.target.value)}/>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-2">
                    燃費
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="nempi" placeholder="15(km/L)" onChange={(e) => setNempi(e.target.value)}/>
                    </div>
                    <div className="col-sm-2">
                        給油量
                    </div>
                    <div className="col-sm-3">
                        <input type="text" className="form-control" id="gasolineNum" placeholder="30(L)" onChange={(e) => setGasolineNum(e.target.value)}/>
                    </div>
                    <div className="col-sm-2">
                        <button type="button" className="btn btn-primary" onClick={() => search()}>Search</button>
                    </div>
                </div>
            </div>

            <br/>
            
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8">
                        <div className="embed-responsive embed-responsive-4by3">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1942.6509499222325!2d135.77895958310245!3d35.02831644598187!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60010857fbd64b75%3A0x11921ef4ea8c2443!2z5Lqs6YO95aSn5a2m!5e0!3m2!1sja!2sjp!4v1619506146363!5m2!1sja!2sjp" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div className="col-sm-4"></div>
                </div>
            </div>

            <br/>

            <h2>Ranking</h2>
            <ol>
            <li>hogehoge</li>
            <li>fugafuga</li>
            </ol>
        </div>
    )
}

export default Top;