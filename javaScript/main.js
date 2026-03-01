document.addEventListener("DOMContentLoaded", () => {

    if (window.location.pathname.includes("dominios.html")) {
        carregarDominios();
    }

    if (window.location.pathname.includes("controles.html")) {
        carregarControles();
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

            div.style.cursor = "pointer";

            div.addEventListener("click", () => {
                localStorage.setItem("dominioSelecionado", dominio.numero);
                window.location.href = "controles.html";
            });

            container.appendChild(div);
        });

    } catch (erro) {
        console.error("Erro ao carregar JSON:", erro);
    }
}

async function carregarControles() {
    try {
        const resposta = await fetch("javaScript/data/iso27002.json");
        const dados = await resposta.json();

        const dominioNumero = localStorage.getItem("dominioSelecionado");

        const dominio = dados.dominios.find(d => d.numero === dominioNumero);

        const container = document.getElementById("lista-controles");

        if (!dominio) {
            container.innerHTML = "<p>Domínio não encontrado.</p>";
            return;
        }

        dominio.objetivos.forEach(objetivo => {
            objetivo.controles.forEach(controle => {

                const div = document.createElement("div");
                div.classList.add("card");

                div.innerHTML = `
                    <h3>${controle.codigo} - ${controle.titulo}</h3>
                    <p>${controle.descricao}</p>
                `;

                container.appendChild(div);
            });
        });

    } catch (erro) {
        console.error("Erro ao carregar controles:", erro);
    }

    console.log("Dominio salvo:", dominioNumero);
console.log("Dominios do JSON:", dados.dominios);
console.log("Dominio encontrado:", dominio);
}