document.addEventListener("DOMContentLoaded", () => {

    if (window.location.pathname.includes("dominios.html")) {
        carregarDominios();
    }

});

async function carregarDominios() {
    try {
        const resposta = await fetch("javaScript/data/iso27002.json");
        const dados = await resposta.json();

        const container = document.getElementById("lista-dominios");

        dados.dominios.forEach(dominio => {
            const div = document.createElement("div");
            div.classList.add("card");

            div.innerHTML = `
                <h3>Domínio ${dominio.numero}</h3>
                <p>${dominio.nome}</p>
            `;

            container.appendChild(div);
        });

    } catch (erro) {
        console.error("Erro ao carregar JSON:", erro);
    }
}