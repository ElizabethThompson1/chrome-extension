let myLeads = null
myLeads = [];
const inputBtn = document.getElementById("button-el");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBtn = document.getElementById("delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
  myLeads = leadsFromLocalStorage
  renderLeads()
}


inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = ""
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
});

deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear()
  myLeads = []
  renderLeads()
})

function renderLeads() {
  let listItems = "";

  for (let i = 0; i < myLeads.length; i++) {
    listItems +=
      `<li>
        <a href = " ${myLeads[i]} " target='_blank'> 
          ${myLeads[i]}
        </a>
      </li>`
  }
  ulEl.innerHTML = listItems
}



