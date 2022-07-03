// function save() { 
//     console.log("Button is clicked")
// } 
// save() 

// let myLeads = `["www.examplelead.com"]`  
// myLeads = JSON.parse(myLeads)
// myLeads.push("www.hamley.com")  
//myLeads = JSON.stringify(myLeads) 
//console.log(typeof myLeads) 

let myLeads = []
const inputEl = document.getElementById("input-element")
const inputButton = document.getElementById("input-button")  
const ulEl = document.getElementById("ul-el")  
const deleteButton = document.getElementById("delete-button")
const tabButton = document.getElementById("tab-button")

//localStorage.setItem("myLeads", "www.examplelead.com") 
//localStorage.getItem("myLeads") 
//console.log(("myLeads"))
//localStorage.clear() 

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads")) 
// if (leadsFromLocalStorage) {
//     myLeads = leadsFromLocalStorage 
//     renderLeads()
// } 
// const tabs = [
//     {url:"https://www.linkedin.com/in/per-harald-borgen/"}
// ]

tabButton.addEventListener("click", function(){    
    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
       myLeads.push(tabs[0].url)                
       localStorage.setItem("myLeads", JSON.stringify(myLeads))  
       renderLeads()
    })   
})

deleteButton.addEventListener("dblclick", function(){ 
    console.log("Double clicked")
    localStorage.clear()  
    myLeads = []
    renderLeads()
  
 })

inputButton.addEventListener("click", function(){  
    myLeads.push(inputEl.value)            
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))  
    renderLeads()
    
    
})  

function renderLeads() {
let listItems = ""
for (i = 0; i < myLeads.length; i++){
    //listItems += "<li>"  + "<a target'=_blank' href = >" + myLeads[i]  + "</li>"  
    listItems += 
    `<li> 
        <a target='_blank' href ="${myLeads[i]}">
        ${myLeads[i]} 
        </a>  
    
    </li>
    `
    ulEl.innerHTML = listItems 
  
// const li = document.createElement("li") 
// li.textContent = myLeads[i] 
// ulEl.append(li) 
}
} 

