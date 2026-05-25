const usuarioBtn = document.getElementById("usuarioBtn");
const empresaBtn = document.getElementById("empresaBtn");

const formUsuario = document.getElementById("formUsuario");
const formEmpresa = document.getElementById("formEmpresa");

let current = "usuario";

usuarioBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (current === "usuario") return;

    switchToUsuario();
});

empresaBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (current === "empresa") return;

    switchToEmpresa();
});

function switchToUsuario() {
    // Tabs
    usuarioBtn.classList.add("active");
    empresaBtn.classList.remove("active");

    // Form atual sai para a direita
    formEmpresa.style.transform = "translateX(60px)";
    formEmpresa.style.opacity = "0";

    setTimeout(() => {
        formEmpresa.classList.remove("active");

        // Usuário entra da esquerda
        formUsuario.classList.add("active");

        formUsuario.style.transform = "translateX(-60px)";
        formUsuario.style.opacity = "0";

        requestAnimationFrame(() => {
            formUsuario.style.transition = "all 0.25s ease";
            formUsuario.style.transform = "translateX(0)";
            formUsuario.style.opacity = "1";
        });

        current = "usuario";
    }, 200);
}

function switchToEmpresa() {
    // Tabs
    empresaBtn.classList.add("active");
    usuarioBtn.classList.remove("active");

    // Form atual sai para a esquerda
    formUsuario.style.transform = "translateX(-60px)";
    formUsuario.style.opacity = "0";

    setTimeout(() => {
        formUsuario.classList.remove("active");

        // Empresa entra da direita
        formEmpresa.classList.add("active");

        formEmpresa.style.transform = "translateX(60px)";
        formEmpresa.style.opacity = "0";

        requestAnimationFrame(() => {
            formEmpresa.style.transition = "all 0.25s ease";
            formEmpresa.style.transform = "translateX(0)";
            formEmpresa.style.opacity = "1";
        });

        current = "empresa";
    }, 200);
}