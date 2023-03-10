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
                    <img style ="width: 30%;" src="https://freight.cargo.site/t/original/i/2bb9de101433fb9aa7d20c6089ed57a5b0e9058f0383da72f538e9db50bd24c9/Easter_Gif.gif"> 
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