const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '9602695c1dmsh9ff64eec51027cep1f1514jsn6be0f91ba589',
        'X-RapidAPI-Host': 'tiktok-download-without-watermark.p.rapidapi.com'
    }
};
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
    fetch(`https://tiktok-download-without-watermark.p.rapidapi.com/analysis?url=${encodedUrlTiktok}`, options)
        .then((response) => {
            return response.json();
        })
        .then((response) => {
            console.log(response)
            fetch(response.data.play)

                .then(res => res.blob())

                .then(file => {

                    let tempUrl = URL.createObjectURL(file);
                    var htmlItem = `
                <div class="product-item text-center col-12">
                    <iframe width="300" height="315" src="${response.data.play}"> 
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