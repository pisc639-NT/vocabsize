let d=document;

d.querySelectorAll('div.row.mt-100>div>*').forEach(e=>e&&e.remove());
d.querySelectorAll('div.row.mt-100>div').forEach(e=>e.insertAdjacentHTML('afterbegin','<h1>VocabSize</h1>'));

// d.querySelectorAll("div.col-4>a>img").forEach(e=>e&&e.remove());
// d.querySelectorAll("div.col-4>a").forEach(e=>e.innerText="VocabSize");
d.querySelectorAll("[src='https://vocabsize.xeersoft.co.th/assets/images/logo_on_bar.png']").forEach(function(params){});
d.querySelectorAll("[for='txt_email']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Username");
d.querySelectorAll("[for='txt_password']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Password");

d.querySelectorAll("body>div>div:nth-child(3)>div>div>div:nth-child(n+2)").forEach((e=>e&&e.remove()));

d.querySelectorAll(".txt_input").forEach(function(e){let event=new Event('change');let autofillValue=e.value;e.value="";e.dispatchEvent(event);e.value=autofillValue;e.dispatchEvent(event);});
d.querySelectorAll(".btn_listen_word1, .btn_stop_word1").forEach(e=>e.classList.remove("span_hidden"));
fetch('https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/themes/dark/style.css').then(x=>x.text()).then(x=>d.head.insertAdjacentHTML('beforeend',`<style>${x}</style>">`));