var btn_trans=document.querySelector("#btn-translate");
var txt=document.getElementById("txtarea");
var output=document.querySelector("#output");
console.log(txt);

var data=txt.value;

btn_trans.addEventListener('click',function print(){
    console.log("Button clicked");
    output.innerText="Your text is "+txt.value;
    //console.log(txt.value);
    //console.log(txt.innerText);

})
