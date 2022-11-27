const addbtn= document.querySelector("#addbtn")
const urlInput = document.querySelector("#urlInput")
const error = document.querySelector("#error")
const product = document.querySelector("#product")
const inputDiv = document.querySelector("#inputDiv")
// const delete = document.querySelector("#product");

addbtn.addEventListener('click', ()=>{
    if(urlInput.value==""){
        error.innerText ="*please enter URL..."
        return;
    }
    // console.log("vineet")
    product.innerHTML += 
    `<div id="list">
    <img class="addData" src="${urlInput.value}" alt="Image">
    <button class="del">Delete</button>
    </div>`

    urlInput.value="";

})

product.addEventListener('click', function(d){

    if(d.target.classList.contains('del')){
        d.target.parentNode.remove();
    }
     // console.log(d.target.parentNode.remove())
    // console.log(d.target.parentNode)
})


// adding pproduct

inputDiv.addEventListener("submit", (e)=>{
    e.preventDefault();
    const title = e.target.url.value;
    console.log(title);


})

function headphones(head) {


}

