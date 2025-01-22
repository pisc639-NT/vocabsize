document.querySelectorAll('div.row.mt-100>div>*').forEach(el=>el&&el.remove());
document.querySelectorAll("div.col-4>a>img").forEach(el=>el&&el.remove());
document.querySelectorAll("div.col-4>a").forEach(el=>el.innerHTML="VocabSize");
document.querySelectorAll('div.row.mt-100>div').forEach(e=>e.insertAdjacentHTML('afterbegin','<h1>VocabSize</h1>'));
(el=>el&&el.remove())(document.querySelector('body>div>div:nth-child(3)>div>div>div:nth-child(3)'));
(el=>el&&el.remove())(document.querySelector('body>div>div:nth-child(3)>div>div>div:nth-child(2)'));
document.querySelectorAll(".txt_input").forEach(function(e){let event=new Event('change');let autofillValue=e.value;e.value="";e.dispatchEvent(event);e.value=autofillValue;e.dispatchEvent(event);});
document.querySelectorAll("[for='txt_email']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Username")
document.querySelectorAll("[for='txt_password']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Password")
fetch('https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/themes/dark/style.css').then(x=>x.text()).then(x=>document.head.insertAdjacentHTML('beforeend',`<style>${x}</style>">`));