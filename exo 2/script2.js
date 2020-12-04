let list01 = document.getElementById("liste-commissions");

let newItem = document.createElement("li");
newItem.innerHTML = "une boite d'oeufs";
list01.append(newItem);

let button = document.getElementById("bouton");

button.addEventListener("click", function (){

    newItem.innerHTML  = document.getElementById("addItem").innerHTML;
    list01.append(newItem);
});

let supprItem = document.getElementById("suppr");

supprItem.addEventListener("click", function (){
    let i = list01.length -1;
    list01[i].remove();
})

