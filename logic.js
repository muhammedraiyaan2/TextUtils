let texta=document.getElementById('textareas')
let text2=document.getElementById('text2')
let submit=document.getElementById('submit')
let clear=document.getElementById('clear')
let textup=document.getElementById("textup")
let upcase=document.getElementById("case")
let copy=document.getElementById("copy")
// darkmode
let dark=document.getElementById('dark')
let body=document.getElementById('body')
let nav=document.getElementById('nav')
nav.style.background="#f8f9fa"
nav.style.color="#212529"
let text=texta.value
clear.addEventListener("click",function(){
    texta.value=""
})
copy.addEventListener("click",function(){
    texta.select();
    texta.setSelectionRange(0, texta.value+1);
    navigator.clipboard.writeText(texta.value);
})
submit.addEventListener("click",function(){
    text2.innerText=`
    ${texta.value.length} letter
    ${texta.value.split(" ").length} words
    ${texta.value.length-texta.value.split(" ").length+1} letters without space
    ${texta.value.split(" ").length-1} spaces`})
upcase.addEventListener("click",function(){
    textup.innerText=`
    ${texta.value.toUpperCase()} Upper case
    ${texta.value.toLowerCase()} Lower case`
})
// darkmode
dark.addEventListener("click",function(){
    body.style.backgroundColor="#212529"
    body.style.color="#f8f9fa"
    nav.style.backgroundColor="#1c1c1c"
})
dark.addEventListener("dblclick",function(){
    body.style.color="#212529"
    body.style.backgroundColor="#fff"
    nav.style.backgroundColor="#f8f9fa"
    nav.style.color="white"
})
