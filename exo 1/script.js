let list01 = document.getElementById("liste-commissions");

let newItem = "une boite d'oeufs";

list01.innerHTML += "<li>" + newItem + "</li>";

function retour (){
    let newNewItem = document.createElement("li");
    newNewItem.innerHTML = document.getElementById("ajout").value;
    document.getElementById("liste-commissions").append(newNewItem);
}

