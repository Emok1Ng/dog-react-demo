import logo from './logo.svg';
import './App.css';
import axios from "axios";
import {wait} from "@testing-library/user-event/dist/utils";

const types = ["jpg", "JPG", "gif", "GIF", "png", "PNG", "mp4", "MP4"]

function App() {
    return (
        <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            </header>
            <button type="submit" className="btn btn-info" onClick={getDogs}>Find More Dogs!</button>
        </div>
    );
}
async function getDogs(){
    let dogUrls = []
    let url = "https://random.dog/woof.json"
    let temp = ""
    let type = ""
    while(dogUrls.length < 8){
        await axios.get(url, {}).then(function (resp){
            temp = resp.data.url.toString()
            type = temp.split('.').pop()
            if(types.includes(type)){
                dogUrls.push(temp)
            }
        }).catch(resp => {
            console.log("Failed!")
        })
    }
    console.log(dogUrls)
}

export default App;
