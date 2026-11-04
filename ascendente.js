document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("calcularBtn").addEventListener("click", calcularZodiacoYAscendente);
});

// Los archivos de imagen se guardan sin tildes ni mayúsculas (cancer.png, geminis.png...)
// para no romperse en servidores case-sensitive. Esta función pasa "Cáncer" -> "cancer".
function nombreArchivo(signo) {
    return signo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function calcularZodiacoYAscendente() {
    let fecha = document.getElementById("fecha").value;
    let hora = document.getElementById("hora").value;

    if (!fecha || !hora) {
        alert("Por favor, completa todos los campos.");
        return;}

    let [año, mes, dia] = fecha.split("-").map(Number);
    let signoZodiacal = determinarSignoZodiacal(dia, mes);
    let horoscopoChino = calcularHoroscopoChino(año);
    let ascendente = calcularAscendente(dia, mes, hora);
    let descendente = determinarDescendente(ascendente);
    let signoLunar = calcularSignoLunar(fecha, hora);
    
    document.getElementById("zodiacalResultado").innerText = signoZodiacal;
    document.getElementById("chinoResultado").innerText = horoscopoChino;
    document.getElementById("ascendenteResultado").innerText = ascendente;
    document.getElementById("descendenteResultado").innerText = descendente;
    document.getElementById("signoLunarResultado").innerText = signoLunar;
    document.getElementById("imgZodiacal").src = `imagenes/${nombreArchivo(signoZodiacal)}.png`;
    document.getElementById("imgZodiacal").style.display = "block";
}
//SIGNO ZODIACAL
function determinarSignoZodiacal(dia, mes) {
    const signos = [
        [20, "Capricornio", "Acuario"],
        [19, "Acuario", "Piscis"],
        [20, "Piscis", "Aries"],
        [20, "Aries", "Tauro"],
        [21, "Tauro", "Géminis"],
        [21, "Géminis", "Cáncer"],
        [23, "Cáncer", "Leo"],
        [23, "Leo", "Virgo"],
        [23, "Virgo", "Libra"],
        [23, "Libra", "Escorpio"],
        [22, "Escorpio", "Sagitario"],
        [22, "Sagitario", "Capricornio"]
    ];
    let signo = dia < signos[mes - 1][0] ? signos[mes - 1][1] : signos[mes - 1][2];
    document.getElementById("zodiacalResultado").innerText = signo;   
    document.getElementById("imgZodiacal").src = `imagenes/${nombreArchivo(signo)}.png`;
    document.getElementById("imgZodiacal").style.display = "block";  
    return signo;
}
//HOROSCOPO CHINO
function calcularHoroscopoChino(año) {
    const signosChinos = ["Mono", "Gallo", "Perro", "Cerdo", "Rata", "Buey", "Tigre", "Conejo", "Dragón", "Serpiente", "Caballo", "Cabra"];
    if (!año || isNaN(año)) {
        return "Desconocido";  
    }
    const signoChino = signosChinos[año % 12] || "Desconocido";  
    let imagenesSignosChinos = {
        "Mono": "imagenes/mono.png",
        "Gallo": "imagenes/gallo.png",
        "Perro": "imagenes/perro.png",
        "Cerdo": "imagenes/cerdo.png",
        "Rata": "imagenes/rata.png",
        "Buey": "imagenes/buey.png",
        "Tigre": "imagenes/tigre.png",
        "Conejo": "imagenes/conejo.png",
        "Dragón": "imagenes/dragon.png",
        "Serpiente": "imagenes/serpiente.png",
        "Caballo": "imagenes/caballo.png",
        "Cabra": "imagenes/cabra.png"
    };
    let imagenSrc = imagenesSignosChinos[signoChino] || "imagenes/desconocido.png";
    document.getElementById("chinoResultado").innerText = signoChino;
    document.getElementById("imgChino").src = imagenSrc;
    document.getElementById("imgChino").style.display = "block";  
    return signoChino;
}
//ASCENDENTE
function calcularAscendente(dia, mes, hora) {
    const ascendentes = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo", "Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    let horaNumerica = parseInt(hora.split(":")[0]);
    let ascendente = ascendentes[(mes + dia + horaNumerica) % 12];
    document.getElementById("ascendenteResultado").innerText = ascendente;
    document.getElementById("imgAscendente").src = `imagenes/${nombreArchivo(ascendente)}.png`;
    document.getElementById("imgAscendente").style.display = "block";  
    return ascendente;
}
//DESCENDENTE
function determinarDescendente(ascendente) {
    const opuestos = {
        "Aries": "Libra", "Tauro": "Escorpio", "Géminis": "Sagitario", "Cáncer": "Capricornio","Leo": "Acuario","Virgo": "Piscis", "Libra": "Aries", "Escorpio": "Tauro","Sagitario": "Géminis", "Capricornio": "Cáncer", "Acuario": "Leo", "Piscis": "Virgo"};
    let descendente = opuestos[ascendente];
    document.getElementById("descendenteResultado").innerText = descendente;
    document.getElementById("imgDescendente").src = `imagenes/${nombreArchivo(descendente)}.png`;
    document.getElementById("imgDescendente").style.display = "block";
    return descendente;
}
//SIGNO LUNAR
function calcularSignoLunar(fechaNacimiento, horaNacimiento) {
    const signosLunares = ["Aries", "Tauro", "Géminis", "Cáncer", "Leo", "Virgo","Libra", "Escorpio", "Sagitario", "Capricornio", "Acuario", "Piscis"];
    const fecha = new Date(fechaNacimiento);
    const hora = new Date(fecha);
    hora.setHours(horaNacimiento.split(":")[0]);
    hora.setMinutes(horaNacimiento.split(":")[1]);
    const fechaBase = new Date(2000, 0, 6);  
    const diasTranscurridos = (hora - fechaBase) / (1000 * 60 * 60 * 24); // convierto en días
    const cicloLunar = diasTranscurridos % 29.5;// Calculamos el ciclo lunar en días, dura aproximadamente 29.5 días
    // En cada ciclo lunar, el signo cambia aproximadamente cada 2.45 días, ya que 29.5 días / 12  = 2.45 días
    const signoLunarIndex = Math.floor(cicloLunar / 2.45);  // Esto asigna en qué signo lunar estamos
    const indiceSignoLunar = Math.floor((signoLunarIndex + 12) % 12);// Asegura que el índice se mantenga dentro del rango válido (0 a 11)
    const signoLunar = signosLunares[indiceSignoLunar];
    document.getElementById("imgLuna").src = `imagenes/${nombreArchivo(signoLunar)}.png`;
    document.getElementById("imgLuna").style.display = "block";
    return signoLunar;
}





