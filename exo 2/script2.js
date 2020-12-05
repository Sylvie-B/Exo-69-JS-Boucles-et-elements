/**     premiere partie exo 1   */
let list01 = document.getElementById("liste-commissions");

let newItem = document.createElement("li");
newItem.innerHTML = "1 boîte d'oeufs";
list01.appendChild(newItem);

/** deuxieme partie exo 1  */

let button = document.getElementById("bouton");                     // récup du bouton

button.addEventListener("click", function (event){   // écoute le bouton
                                                        // ici on est dans la fonction, si click, alors :
    event.preventDefault();                                               // supprime le fonctionnement par défaut

    let item = document.getElementById("addItem").value;        // récup le champ ET la valeur

    let newNewItem = document.createElement("li");             // crée un nouvau li

    newNewItem.innerHTML = item;                                     // affecte la valeur de item

    list01.appendChild(newNewItem);                                // ajoute li à la liste
});

/** exercice 2 */
let buttonSuppr = document.getElementById("supprItem");

buttonSuppr.addEventListener("click", function (event) {
    event.preventDefault();
    let listItem = document.getElementsByTagName("li");
    if (listItem.length > 0){
        listItem[listItem.length-1].remove();
    }
    else {
        alert("votre liste est vide");
    }
});

