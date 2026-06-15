function showMessage() {
    const msg = document.getElementById("message");

    msg.innerHTML = "🚀 Botão Cyber Ativado!";

    setTimeout(() => {
        msg.innerHTML = "";
    }, 3000);
}
