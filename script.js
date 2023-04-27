
document.addEventListener("DOMContentLoaded", function() {

    const taux = {
        "USD": {
            "EUR": 0.8415,
            "GBP": 0.7195,
            "CAD": 1.2285,
            "JPY": 92.3856,
            "XOF": 561.4393,
            "USD": 1,
            "symbole": "$"
        },
        "EUR": {
            "USD": 1.1885,
            "GBP": 0.8575,
            "CAD": 1.4635,
            "JPY": 138.2381,
            "XOF": 656.8343,
            "EUR": 1,
            "symbole": "€"
        },
        "GBP": {
            "USD": 1.3892,
            "EUR": 1.1667,
            "CAD": 1.7068,
            "JPY": 160.9844,
            "XOF": 760.5644,
            "GBP": 1,
            "symbole": "£"
        },
        "CAD": {
            "USD": 0.8142,
            "EUR": 0.6837,
            "GBP": 0.5858,
            "JPY": 94.4323,
            "XOF": 479.4288,
            "CAD": 1,
            "symbole": "$"
        },
        "JPY": {
            "USD": 0.0108,
            "EUR": 0.0072,
            "GBP": 0.0062,
            "CAD": 0.0106,
            "XOF": 6.8571,
            "JPY": 1,
            "symbole": "¥"
        },
        "XOF": {
            "USD": 0.0018,
            "EUR": 0.0015,
            "GBP": 0.0013,
            "CAD": 0.0021,
            "JPY": 0.1459,
            "XOF": 1,
            "symbole": "CFA"
        }
    };
    
    const montant1 = document.querySelector(".montant_1");
    const devise1 = document.getElementById("devise_1");
    const montant2 = document.querySelector(".montant_2");
    const devise2 = document.getElementById("devise_2");
    const symbole1 = document.querySelector(".symbole_1");
    const symbole2 = document.querySelector(".symbole_2");
    const btnValider = document.getElementById("btnValider");
    const btnInverser = document.getElementById("btnInverser");
    
    function convertir(montant1, devise1, montant2, devise2,symbole2) {
        const tauxDeChange = taux[devise1.value][devise2.value];
        const symboleDevise2 = taux[devise2.value].symbole;
        const montantConverti = (montant1.value * tauxDeChange).toFixed(2);
        montant2.textContent = montantConverti+symboleDevise2;
    }
    
    // Appel de la fonction convertir lors de l'événement "click" sur le bouton "Valider"
    btnValider.addEventListener("click", function() {
        convertir(montant1, devise1, montant2, devise2, symbole2);
    });
    
    // Appel de la fonction convertir lors de l'événement "click" sur le bouton "Inverser
btnInverser.addEventListener("click", function() {
    const temp = devise1.value;
    devise1.value = devise2.value;
    devise2.value = temp;
  });
// Valider avec la touche Entrée
montant1.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        convertir(montant1, devise1, montant2, devise2);
    }
});
});