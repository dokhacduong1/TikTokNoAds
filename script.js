const options = {
    method: 'GET',
  
};
var btnGetlink = getInputVal("btnGetLink");




const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
document.getElementById('getFormTiktok').addEventListener('submit', submitFormTiktok);
var subLink = getInputVal("sucGetLink");

function submitFormTiktok(e) {
    btnGetlink.innerHTML = "Đợi Tý Đang Get Link...";
    e.preventDefault();
    var inputTiktok = getInputVal("link-tiktok");

    var substring = "tiktok.com";
 
    if (!inputTiktok.value.includes(substring)) {
        var htmlItem = `
            <div class="product-item text-center">
              <h3 class="inner-title">
                Nhập Sai Định Dạng TikTok Vui Lòng Nhập Lại.
              </h3>
            </div>
          `;
        console.log(subLink.innerHTML)
        subLink.innerHTML = htmlItem;
        return;
    }
    const targetUrl = `https://api.douyin.wtf/api?url=${inputTiktok.value}&minimal=false`;
    fetch(proxyUrl+ targetUrl, options)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            fetch(response.video_data.nwm_video_url_HQ)

                .then((res) => {
                  
                    return res.blob();
                })

                .then(file => {                 
                    let tempUrl = URL.createObjectURL(file);
                    var htmlItem = `
                <div class="product-item text-center col-12">
                    <iframe width="300" height="315" src="${response.video_data.nwm_video_url_HQ}"> 
                </iframe> 
                </div>
                <div class="product-item text-center">
                    <a id="clickID" href="${tempUrl}" download="My Movie">Download Video</a>
                </iframe>               
              `;
                    subLink.innerHTML = htmlItem;
                    btnGetlink.innerHTML = "Get Link";
                });


        })
}





function getInputVal(id) {
    return document.getElementById(id);
}
