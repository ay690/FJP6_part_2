let inputTag = document.querySelector("input");
let ultag = document.querySelector("ul");

inputTag.addEventListener("keydown", function(e){
    //console.log(e);
    let key = e.key;
    if(key == "Enter"){
        let value = inputTag.value;
        //console.log(value);
        inputTag.value = "";
        let liTag = document.createElement('li');
        liTag.innerHTML = value;
        ultag.appendChild(liTag);
    }
})