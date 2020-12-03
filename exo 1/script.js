let list01 = document.getElementById("liste-commissions");

let newItem = "une boite d'oeufs";
list01.innerHTML += "<li>" + newItem + "</li>";


let button = document.getElementById("bouton");

button.addEventListener("click", function (){
    let newNewItem = document.createElement("li");
    newNewItem.innerHTML  = document.getElementById("addItem").innerHTML;
    list01.append(newNewItem);
});

