// creation d'une variable ( variable i)

let i = 0;

// Creation de la fonction move quon recupére du bouton on cliqk en html
function move() {

    // creation d'une condition qi recupere la vairalble i
    // si i est strictement égale 0 alors le resultats de i est egale a 1

    if (i === 0) {
        i = 1;
        // creation de la variable elem qui récupere  l' id ma bar de l'html
        let elem = document.getElementById("maBar");

        // creation de la variable width (largeur)
        let width = 1;

        //creation de la variable id qui appellle setinterval
        //set interval La méthode setInterval() appelle la fonction frame (callback ou évalue
        // une expression à des intervalles spécifiés 0.1s (en millisecondes).
        // La méthode setInterval() continuera d'appeler la fonction jusqu'à ce que clearInterval() est appelée, ou la fenêtre est fermée.
        // La valeur de l'ID retournée par setInterval() est utilisée comme paramètre pour la méthode clearInterval().

        let  id = setInterval(frame, 10);

        // creation de la fonctin frame
        function frame() {
            // creation dune condition
            // qui incliue la methodeInterval qui arrete une mineterie //La méthode clearInterval()
             // La valeur de l'ID retournée par setInterval() est utilisée comme paramètre pour la méthode clearI
            if (width >= 100) {
                //La méthode clearInterval() arrête une minuterie défini avec la méthode setInterval() .
                // La valeur de l'ID retournée par setInterval() est utilisée comme paramètre pour la méthode clearInterval().
                clearInterval(id);

                //reitinialise à 0

                i = "100%";
            } else {
                //width += 1%
                width++;

                elem.style.width = width + "%";
            }
        }
    }
}