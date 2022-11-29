const addbtn= document.querySelector("#addbtn")
const urlInput = document.querySelector("#urlInput")
const error = document.querySelector("#error")
const product = document.querySelector("#product")
const btns = document.querySelectorAll(".btn")
// const delete = document.querySelector("#product");


//=============================Add Items=================================

function addItems () {
//it showing error when input is empty and you click on add button
    if(urlInput.value==""){
        error.innerText ="*please enter URL..."
        return;
    }
    // console.log("vineet")

//it add html file and images
    product.innerHTML += 
    `<div id="list">
    <img class="addData" src="${urlInput.value}" alt="Image">
    <button class="del">Delete</button>
    </div>`

//it blank input after adding the item
    urlInput.value="";
};

//==========================Delete Items====================

function deleteItem (d){
//it delete one item when you click on delete button
    if(d.target.classList.contains('del')){
        d.target.parentNode.remove();
    }
     // console.log(d.target.parentNode.remove())
    // console.log(d.target.parentNode)
};

//=======================Filter Items=========================

function filterItems () {
    // console.log(e);
    // if()
};

addbtn.addEventListener('click', addItems);
product.addEventListener('click', deleteItem);
// btns.addEventListener('click', filterItems);