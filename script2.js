var btnGetlink = getInputVal("btnGetLink");





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

    var encodedUrlTiktok = encodeURIComponent(inputTiktok.value);

    var htmlItem = `
                <div class="product-item text-center col-12">
                    <iframe width="300" height="315" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/02/4cbe8d_f1ed2800a49649848102c68fc5a66e53mv2.gif?fit=476%2C280&ssl=1"> 
                </iframe> 
                </div>
                <div class="product-item text-center">
                    <a id="clickID" href="https://api.douyin.wtf/download?url=${inputTiktok.value}&prefix=true&watermark=false" download="My Movie">Download Video</a>
                </iframe>               
              `;
    subLink.innerHTML = htmlItem;
    btnGetlink.innerHTML = "Get Link";
}





function getInputVal(id) {
    return document.getElementById(id);
}