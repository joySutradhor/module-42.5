


const text = document.getElementById("textValue");
const add = () => {
    const value = localStorage.getItem("count");
    console.log(value);
    let count = 1 ;
if(value == null){
    count = 1;
}
else if(value){
    count = parseInt(value)+1 ;
}
else {
    count ++
}
  localStorage.setItem("count", text.innerText = count);

}

const show = () => {
    const value = localStorage.getItem("count");
    if (value) {
        text.innerText = value ;
    }
}

show();