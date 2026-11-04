// Login/registro sin backend: guarda los usuarios en localStorage.
//
// OJO: esto es válido para un TP/demo, pero no es seguridad real —
// localStorage vive en el navegador de cada usuario y cualquiera con
// acceso a la consola puede leerlo. Si en algún momento este proyecto
// necesita manejar datos sensibles de verdad, esto tiene que pasar a
// un backend (Node/PHP/etc.) con la contraseña hasheada en un server.
// Para esta app (elegir tu signo, ver resultados) alcanza y sobra.

const USERS_KEY = "oracle_zodiac_usuarios";
const SESSION_KEY = "oracle_zodiac_sesion";

function hashSimple(texto) {
    // Hash no-criptográfico (djb2) solo para no guardar la contraseña en texto plano.
    let hash = 5381;
    for (let i = 0; i < texto.length; i++) {
        hash = ((hash << 5) + hash) + texto.charCodeAt(i);
        hash = hash & hash;
    }
    return hash.toString(16);
}

function getUsuarios() {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
}

function guardarUsuarios(usuarios) {
    localStorage.setItem(USERS_KEY, JSON.stringify(usuarios));
}

function registrarUsuario(usuario, password) {
    const usuarios = getUsuarios();
    if (usuarios.some(u => u.usuario.toLowerCase() === usuario.toLowerCase())) {
        return { ok: false, error: "Ese usuario ya existe." };
    }
    usuarios.push({ usuario, passHash: hashSimple(password) });
    guardarUsuarios(usuarios);
    iniciarSesion(usuario);
    return { ok: true };
}

function loguearUsuario(usuario, password) {
    const usuarios = getUsuarios();
    const encontrado = usuarios.find(u => u.usuario.toLowerCase() === usuario.toLowerCase());
    if (!encontrado || encontrado.passHash !== hashSimple(password)) {
        return { ok: false, error: "Usuario o contraseña incorrectos." };
    }
    iniciarSesion(encontrado.usuario);
    return { ok: true };
}

function iniciarSesion(usuario) {
    localStorage.setItem(SESSION_KEY, usuario);
}

function cerrarSesion() {
    localStorage.removeItem(SESSION_KEY);
}

function usuarioActual() {
    return localStorage.getItem(SESSION_KEY);
}
