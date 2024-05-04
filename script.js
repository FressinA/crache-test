document.getElementById('loadButton').addEventListener('click', function() {
    const xhr = new XMLHttpRequest();  // Création de l'objet XMLHttpRequest
    xhr.open('GET', 'connexion.html', true);  // Configuration de la requête GET asynchrone

    xhr.onload = function() {
        if (this.status === 200) {
            document.getElementById('content').innerHTML = this.responseText;  // Injecter le contenu chargé
        } else {
            console.error('Erreur de chargement de la page');
        }
    };

    xhr.onerror = function() {
        console.error('Erreur de requête');
    };

    xhr.send();  // Envoyer la requête
});
