function(properties, context) {

    let content = properties.content || "Empty";
    let fileName = properties.filename || "myfile";
    let fileExtension = properties.extension || "txt";


    let blob = new Blob([content], { type: "text/plain" });


    let a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `${fileName}.${fileExtension}`;


    document.body.appendChild(a);
    a.click();

    // Nettoyage
    document.body.removeChild(a);
    URL.revokeObjectURL(a.href);
}
