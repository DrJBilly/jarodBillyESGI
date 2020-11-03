
/* A TERMINER */


var formu = document.getElementById('formulaire');

formu.addEventListener('submit', function(e) { ; /* caractère autorisé sur l'input text name et prenom*/
    var myInput = document.getElementById('nom');
    var myInput = document.getElementById('prenom');
    var gestionerreur = /^[a-zA-Z-\s]+$/;

    if (myInput.value.tirm() = "") { /* gestion d'erreur */
        var Error = document.getElementById('erreur')
        Error.innerHTML = "Le champs Nom est requis.";
        Error.style.color = 'red';
        e.preventDefault();

    } else if (gestionerreur.test(myInput.value) = false) {
        var Error = document.getElementById('erreur');
        Error.innerHTML = "Le champs doit uniquement contenir des lettre ou tiret.";
        Error.style.color = 'red';
        e.preventDefault();
    }
});