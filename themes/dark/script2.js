let d=document;
let ds=(e=>d.querySelector(e));
let dsa=(e=>d.querySelectorAll(e));
let dsah=(e=>dsa(e).forEach(e=>e.style.display="None"));

// dsa('div.row.mt-100>div>*').forEach(e=>e&&e.remove());
dsah('div.row.mt-100>div>*')
dsa('div.row.mt-100>div').forEach(e=>e.insertAdjacentHTML('afterbegin','<h1>VocabSize</h1>'));

// dsa("div.col-4>a>img").forEach(e=>e&&e.remove());
// dsa("div.col-4>a").forEach(e=>e.innerText="VocabSize");
dsa("[src='https://vocabsize.xeersoft.co.th/assets/images/logo_on_bar.png']").forEach(function(e){e.parentElement.innerText="VocabSize";e.remove();});
dsa("[for='txt_email']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Username");
dsa("[for='txt_password']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Password");

// dsa("body>div>div:nth-child(3)>div>div>div:nth-child(n+2)").forEach((e=>e&&e.remove()));
dsah("body>div>div:nth-child(3)>div>div>div:nth-child(n+2)")

dsa(".txt_input").forEach(function(e){let event=new Event('change');let autofillValue=e.value;e.value="";e.dispatchEvent(event);e.value=autofillValue;e.dispatchEvent(event);});
dsa(".btn_listen_word1, .btn_stop_word1").forEach(e=>e.classList.remove("span_hidden"));

$$("img[src='https://vocabsize.xeersoft.co.th/assets/images/btn_speech.png']").forEach(function(e){e.src="https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/images/icon/Settings.svg";e.width="30"})

fetch('https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/themes/dark/style.css').then(x=>x.text()).then(x=>d.head.insertAdjacentHTML('beforeend',`<style>${x}</style>">`));