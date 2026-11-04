// Genera las 3 cards de signos de la página según el data-elemento del <body>.
// Reemplaza el HTML que antes estaba escrito a mano y duplicado en cada página.
document.addEventListener("DOMContentLoaded", () => {
    const elemento = document.body.dataset.elemento;
    const signos = SIGNOS_POR_ELEMENTO[elemento] || [];
    const contenedor = document.getElementById("cards-wrap");

    contenedor.innerHTML = signos.map((signo, i) => {
        const n = i + 1;
        return `
            <div class="card" id="card-${n}">
                <input type="checkbox" class="open-card" id="open-card-${n}" checked />
                <label class="open-card-label" for="open-card-${n}"></label>
                <input type="checkbox" class="card-toggle" id="card-toggle-${n}" />
                <label class="card-toggle-label" for="card-toggle-${n}"></label>
                <div class="card-image" style="background-image: url('${signo.imagen}')"></div>
                <div class="card-header">
                    <h2>${signo.nombre}</h2>
                </div>
                <div class="card-content left-content">
                    <h3>${signo.positivo.titulo}</h3>
                    <p>${signo.positivo.texto}</p>
                </div>
                <div class="card-content right-content">
                    <h3>Aspecto negativo</h3>
                    <p>${signo.negativo}</p>
                </div>
                <div class="card-footer">
                    <button type="button" class="ver-mas" data-target="open-card-${n}">Descubre más</button>
                </div>
            </div>
        `;
    }).join("");

    // "Descubre más" ahora hace algo: abre la card (antes era un href="#" muerto).
    contenedor.querySelectorAll(".ver-mas").forEach(btn => {
        btn.addEventListener("click", () => {
            document.getElementById(btn.dataset.target).checked = false;
        });
    });

    document.getElementById("loginButton")?.addEventListener("click", () => {
        window.location.href = "index.html";
    });
});
