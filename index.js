var btn_trans=document.querySelector("#btn-translate");
var txt=document.getElementById("txtarea");
var output=document.querySelector("#output");
console.log(txt);


//var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";
// now mking a banana app so we take api url
var url="https://api.funtranslations.com/translate/minion.json";

function constructUrl(inputText)
{
    return url+"?"+"text="+inputText;
}
function errorHandler(error)
{
    console.log("error occured",error);
}

btn_trans.addEventListener('click',function print(){
    console.log("Button clicked");
    var data=txt.value;
    //output.innerText="Your text is "+txt.value;
    //console.log(txt.value);
    //console.log(txt.innerText);

    //fetch url
    output.innerText="Translated :"
    fetch(constructUrl(data))
    .then(response=>response.json())
    .then(json=>{
        var tranlate_text=json.contents.translated;
        output.innerText=tranlate_text;
    });

})
