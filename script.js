var input = document.querySelector("input");
var text = document.querySelectorAll("textarea");
var button = document.querySelectorAll("button");
button[0].addEventListener("click",function(){
    var rl = input.value[0].toUpperCase();
    var n = parseInt(input.value.substring(1));
    var str = text[0].value;
    var newstr = "";
    if(rl === 'R')
    {
        for(let j=0;j<str.length;j++)
            newstr = newstr.concat(String.fromCharCode(str.charCodeAt(j)+n)).toUpperCase(); 
    } 
    else
    {
        for(let j=0;j<str.length;j++)
            newstr = newstr.concat(String.fromCharCode(str.charCodeAt(j)-n)).toUpperCase();
    }
    text[0].value = "The Encrypted Code is: "+newstr;   
});
button[1].addEventListener("click",function(){
    var rl = input.value[0];
    var n = parseInt(input.value.substring(1));
    var str = text[1].value;
    var newstr = "";
    if(rl === 'R')
    {
        for(let j=0;j<str.length;j++)
            newstr = newstr.concat(String.fromCharCode(str.charCodeAt(j)-n)).toUpperCase();
    } 
    else
    {
        for(let j=0;j<str.length;j++)
            newstr = newstr.concat(String.fromCharCode(str.charCodeAt(j)+n)).toUpperCase();
    }
    text[1].value = "The Decrypted Code is: "+newstr;   
});




