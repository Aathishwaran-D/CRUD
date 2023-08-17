 let form = document.getElementById("form");
 let input = document.getElementById("input");
 let msg = document.getElementById( "msg");
 let post = document.getElementById("post");
 let data={};
 let head=document.getElementById("head");
 form.addEventListener("submit", (e)=>{
    e.preventDefault();
    formValidation();
 }) ;
 let formValidation = ()=> {
    if (input.value === ""){
        msg.innerHTML = "Comments cannot be blank";
    }
    else{
        msg.innerHTML = "";
        enteredData();
    }
 }
//CREATE
let enteredData = ()=>{    
    data["text"] = input.value;
    createpost();
};
//READ
let createpost=()=>{
            post.innerHTML+=`<div>
            <p>${data.text}</p>
            <span class="options">
                <i onClick= "updatePost(this)" class="fa-solid fa-pen-to-square"></i>
                <i onClick= "deletePost(this)" class="fa-solid fa-trash-can"></i>
            </span>
        </div>`;
        input.value="";
}
//DELETE
let deletePost =(e) =>{
    e.parentElement.parentElement. remove();
}
//UPDATE
let updatePost = (e)=>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
     e.parentElement.parentElement. remove();
}