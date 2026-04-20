function rolarDado() {
    var sorteio = Math.floor(Math.random() * 6) + 1;
    var face = document.getElementById("face");

    face.classList.add("rolar");

    setTimeout(function () {
        switch (sorteio) {
            case 1:
                face.src = "img/face1.png";
                break;
            case 2:
                face.src = "img/face2.png";
                break;
            case 3:
                face.src = "img/face3.png";
                break;
            case 4:
                face.src = "img/face4.png";
                break;
            case 5:
                face.src = "img/face5.png";
                break;
            case 6:
                face.src = "img/face6.png";
                break;
            default:
                break;
        }
        face.classList.remove("rolar");
    }, 700);
}
