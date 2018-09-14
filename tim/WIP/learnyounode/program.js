const http = require('http');
const bl = require('bl');

let requests = [];
let responseCount = 0;

function Request(url){
    this.url = url;
    this.data = null;
}

function makeRequest(url) {
    let request = new Request(url);
    requests.push(request);

    http.get(request.url, function(res) {
        let str = '';
        res.setEncoding("utf8")
        res.pipe(bl((err,data)=>{
            if (err) console.log(err);
            request.data = data.toString();
            responseCount++;
            if (responseCount == requests.length) {
                requests.forEach((req)=>console.log(req.data));
            }
        }))
    })
}

for (let i = 2; i < process.argv.length; i++){
    makeRequest(process.argv[i]);
}
