let texta=document.getElementById('textareas')
let text2=document.getElementById('text2')
let submit=document.getElementById('submit')
let clear=document.getElementById('clear')
let textup=document.getElementById("textup")
let text=texta.value
clear.addEventListener("click",function(){
    texta.value=""
})
submit.addEventListener("click",function(){
    text2.innerText=`
    ${texta.value.length} letter
    ${texta.value.split(" ").length} words
    ${texta.value.length-texta.value.split(" ").length+1} letters without space`
    document.write(`${toUpperCase(texta.value)}`)
})
