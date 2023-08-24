function connecter() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var year = document.getElementById('year').value;

    if (email === "" || password === "" || year === "") {
        alert("Veuillez remplir tous les champs.");
    } else {
        window.location.href = 'next.html';
    }
}