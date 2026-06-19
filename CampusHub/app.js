const search=document.getElementById('search');
search.addEventListener('input',()=>{
const value=search.value.toLowerCase();
document.querySelectorAll('.doc').forEach(doc=>{
const title=doc.querySelector('h2').innerText.toLowerCase();
doc.style.display=title.includes(value)?'block':'none';
});
});