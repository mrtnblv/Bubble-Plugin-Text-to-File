function(properties, context) {
    // Récupération des entrées utilisateur
    let content = properties.content || "Empty";
    let fileName = properties.filename || "myfile";
    let fileExtension = properties.extension || "txt";

    // Création d'un Blob pour contenir le texte
    let blob = new Blob([content], { type: "text/plain" });

    // Création d'un lien de téléchargement
    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${fileName}.${fileExtension}`;

    // Ajout du lien au DOM et déclenchement du téléchargement
    document.body.appendChild(a);
    a.click();

    // Nettoyage
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}
