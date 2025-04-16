async function checkNews() {
    const authorInput = document.getElementById("authorInput").value || "";
    const newsInput = document.getElementById("newsInput").value ;

    if (newsInput.trim() === "") {
        alert("Veuillez saisir le nom de l'auteur et la nouvelle avant de vérifier.");
        return;
    }

    try {
        const response = await fetch("http://localhost:5000/predict", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ author: authorInput, news: newsInput }),
        });

        const result = await response.json();
        displayResult(result);
    } catch (error) {
        console.error("Erreur :", error);
        alert("Une erreur s'est produite lors du traitement de votre demande.");
    }
}

function displayResult(result) {
    const resultElement = document.getElementById("result");

    if (result.error) {
        resultElement.innerHTML = "Erreur : " + result.error;
    } else {
        if (result.prediction === 1) {
            resultElement.innerHTML = "Cette nouvelle est fausse.";
        } else {
            resultElement.innerHTML = "Cette nouvelle est vraie.";
        }
    }
}
