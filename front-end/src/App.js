import './App.css';
import axios from "axios";

const types = ["jpg", "JPG", "gif", "GIF", "png", "PNG", "mp4", "MP4"]

function App() {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col"><img id="pic1" alt="" src="" width="100%" height="100%"/></div>
                    <div className="col"><img id="pic2" alt="" src="" width="100%" height="100%"/></div>
                    <div className="col"><img id="pic3" alt="" src="" width="100%" height="100%"/></div>
                    <div className="col"><img id="pic4" alt="" src="" width="100%" height="100%"/></div>
                </div>
                <div className="row">
                    <div className="col"><img id="pic5" alt="" src="" width="100%" height="100%"/></div>
                    <div className="col"><img id="pic6" alt="" src="" width="100%" height="100%"/></div>
                    <div className="col"><img id="pic7" alt="" src="" width="100%" height="100%"/></div>
                    <div className="col"><img id="pic8" alt="" src="" width="100%" height="100%"/></div>
                </div>
            </div>
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
    let count = 1
    while(dogUrls.length !== 0){
        document.getElementById("pic"+count).setAttribute("src", dogUrls.pop())
        count++
    }
    return
}

export default App;
