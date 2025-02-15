/*(el=>el&&el.remove())(document.querySelector('div.row.mt-100>div>img'));*/
document.querySelectorAll('div.row.mt-100>div>*').forEach(el=>el&&el.remove());
document.querySelectorAll('body > div.container-fluid > div > div.col.d-none.d-md-block > div.row.header-nav.pd-10 > div.col-4.d-flex.justify-content-start.align-items-center > a > img').forEach(el=>el&&el.remove());
// document.querySelectorAll('div.row.mt-100>div').forEach(e=>e.insertAdjacentHTML('afterbegin','<h1 style="color:#fff;">VocabSize</h1>'));
(el=>el&&el.remove())(document.querySelector('body>div>div:nth-child(3)>div>div>div:nth-child(3)'));
(el=>el&&el.remove())(document.querySelector('body>div>div:nth-child(3)>div>div>div:nth-child(2)'));
/*document.querySelectorAll('.label_input').forEach(el=>el.style.color='#fff');*/
// document.querySelectorAll('.btn').forEach(el=>el.style.backgroundColor='#222');
// document.querySelectorAll('.btn').forEach(el=>el.style.borderColor='#fff');
document.querySelectorAll(".txt_input").forEach(function(e){let event=new Event('change');let autofillValue=e.value;e.value="";e.dispatchEvent(event);e.value=autofillValue;e.dispatchEvent(event);});
/*document.querySelectorAll('.txt_input').forEach(el=>el.style.backgroundColor='#222');*/
/*document.querySelectorAll('.txt_input').forEach(el=>el.style.color='#fff');*/
/*load this css file into head https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/themes/dark/style.css*/
/*document.head.insertAdjacentHTML('beforeend', '<link rel="stylesheet" href="https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/themes/dark/style.css">');*/
document.querySelectorAll("[for='txt_email']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Username")
document.querySelectorAll("[for='txt_password']").forEach(e=>e.innerText="\xa0\xa0\xa0\xa0Password")

fetch(`https://raw.githubusercontent.com/pisc639-NT/vocabsize/refs/heads/main/themes/dark/style.css?cachebust=${Date.now()}`).then(x=>x.text()).then(x=>document.head.insertAdjacentHTML('beforeend', `<style>${x}</style>">`));