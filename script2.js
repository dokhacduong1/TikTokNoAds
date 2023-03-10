// var inputTiktok = "https://www.tiktok.com/@fungame_office/video/7208561324261969198"
// var encodedUrlTiktok = encodeURIComponent(inputTiktok);
const options = {
    method: 'GET',
    params:{
        'url' : 'https://www.tiktok.com/@fungame_office/video/7208561324261969198',
        'minimal' : false
    }
};
fetch(`https://api.douyin.wtf/api`,options)
.then((response) => {
    return response.json();
}).then((response)=>{
    console.log(response);
});
