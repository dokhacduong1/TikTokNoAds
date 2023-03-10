// var inputTiktok = "https://www.tiktok.com/@fungame_office/video/7208561324261969198"
// var encodedUrlTiktok = encodeURIComponent(inputTiktok);
const options = {
    method: 'GET',
    headers:{
        'Access-Control-Allow-Origin': '127.0.0.1:5500'
    }
};
fetch(`https://api.douyin.wtf/api?url=https://www.tiktok.com/@fungame_office/video/7208561324261969198&minimal=false`)
.then((response) => {
    return response.json();
}).then((response)=>{
    console.log(response);
});
