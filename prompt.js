

const add= ()=>{
    console.log("okk")
    const prompts = prompt("Enter a valid Number");
    const number = parseInt(prompts);
    const addNumber = 200 ;
    alert(`the result is : ${addNumber+number} `)
   
}

const showConfirm =()=>{
    const showLocation = confirm("Do you want show location ?");
    if(showLocation){
        console.log(location.href);
    }
    else{
        console.log("why you can't show me .")
    }
}