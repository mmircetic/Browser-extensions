let myLeads = [];
let text = document.querySelector("#input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl =document.querySelector("#ul-el");
const delBtn = document.querySelector("#delete-btn");







inputBtn.addEventListener("click", function(){
	myLeads.push(text.value);
	renderItems();
	text.value = "";

    localStorage.setItem("myLeads",JSON.stringify(myLeads));

});

function renderItems(){
	let listItems = "";
    for( let i = 0; i<myLeads.length; i++){
     listItems += "<li><a target = '_blank' href= '" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";}
     	    ulEl.innerHTML = listItems;
             }


delBtn.addEventListener("dblclick",function(){
       localStorage.clear();
       myLeads =[];
       renderItems();
})










