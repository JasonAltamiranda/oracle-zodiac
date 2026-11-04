// Datos centralizados de los 12 signos, agrupados por elemento.
// Antes esto estaba duplicado a mano en fuego.html, tierra.html, aire.html y agua.html.
// Ahora las cards se generan dinámicamente desde acá (ver elemento.js).
const SIGNOS_POR_ELEMENTO = {
    fuego: [
        {
            nombre: "Aries",
            imagen: "imagenes/aries.png",
            positivo: {
                titulo: "Líder Natural y Aventurero",
                texto: "Audaces y con una actitud desenfrenada ante los desafíos de la vida. Su pasión y la toma de decisiones rápidas los convierte en personas apasionantes y emocionantes."
            },
            negativo: "Impulsividad y falta de paciencia, además de arriesgarse demasiado. Tampoco soportan equivocarse ni el fracaso."
        },
        {
            nombre: "Leo",
            imagen: "imagenes/leo.png",
            positivo: {
                titulo: "Fuertes y ambiciosos",
                texto: "Carismáticos, seguros y con una fuerte presencia, les encanta destacar en lo que hacen y brillar en cualquier situación, son protectores con sus seres queridos y disfrutan compartir su éxito, les gusta ser reconocidos."
            },
            negativo: "Egocentrismo y necesidad de atención."
        },
        {
            nombre: "Sagitario",
            imagen: "imagenes/sagitario.png",
            positivo: {
                titulo: "Optimista y aventurero",
                texto: "Siempre buscan nuevas experiencias y desafíos, dicen lo que piensan sin rodeos y aman aprender y explorar el mundo. Suelen ser el alma de la fiesta y contagian su entusiasmo."
            },
            negativo: "Actúan sin pensar en las consecuencias y huyen de relaciones o situaciones que sienten que los limitan."
        }
    ],
    tierra: [
        {
            nombre: "Tauro",
            imagen: "imagenes/tauro.png",
            positivo: {
                titulo: "Persistente y determinado",
                texto: "Cuando se proponen algo, no paran hasta lograrlo, son personas en las que se puede confiar plenamente, disfrutan de la estabilidad, el lujo y los placeres sensoriales. No se alteran fácilmente y prefieren la calma además tienen los pies en la tierra y buscan soluciones funcionales."
            },
            negativo: "Una vez que toman una decisión, es difícil hacerlos cambiar de opinión además pueden enfocarse demasiado en lo material y en el dinero."
        },
        {
            nombre: "Virgo",
            imagen: "imagenes/virgo.png",
            positivo: {
                titulo: "Analíticos y detallistas",
                texto: "Les gusta el orden y la planificación, se esfuerzan por hacer las cosas bien. Razonan antes de actuar y buscan soluciones prácticas además no suelen llamar la atención y prefieren la privacidad."
            },
            negativo: "Pueden volverse demasiado críticos consigo mismos y con los demás. Esperan que los demás sean tan disciplinados como ellos."
        },
        {
            nombre: "Capricornio",
            imagen: "imagenes/capricornio.png",
            positivo: {
                titulo: "Ambiciosos y disciplinados",
                texto: "Siempre buscan el éxito y trabajan duro para lograrlo. Ven la vida con los pies en la tierra y toman decisiones lógicas. Son personas en las que se puede contar en cualquier situación. No se rinden fácilmente y saben que el éxito toma tiempo."
            },
            negativo: "A veces les cuesta relajarse y disfrutar del momento además tienden a ver el lado difícil de las cosas y a preocuparse demasiado."
        }
    ],
    aire: [
        {
            nombre: "Géminis",
            imagen: "imagenes/geminis.png",
            positivo: {
                titulo: "Curiosos y versátiles",
                texto: "Les encanta hablar, aprender y compartir ideas, siempre buscan nuevas experiencias y conocimientos. Además se ajustan fácilmente a los cambios y nuevas situaciones. Son alegres, carismáticos y disfrutan de la vida."
            },
            negativo: "Pueden hablar sin pensar y meterse en problemas por ello además suelen ser vistos como personas con personalidades cambiantes, lo que genera desconfianza."
        },
        {
            nombre: "Libra",
            imagen: "imagenes/libra.png",
            positivo: {
                titulo: "Equilibrados y armoniosos",
                texto: "Buscan la paz y evitan los conflictos. Tienen carisma y suelen agradar a los demás. Analizan bien las situaciones y buscan soluciones imparciales. Disfrutan del amor y las relaciones armoniosas."
            },
            negativo: "Les cuesta elegir porque siempre analizan todas las opciones además buscan compañía constantemente y les cuesta estar solos."
        },
        {
            nombre: "Acuario",
            imagen: "imagenes/acuario.png",
            positivo: {
                titulo: "Innovadores y visionarios",
                texto: "Les gusta pensar por sí mismos y hacer las cosas a su manera. Aunque valoran su libertad, disfrutan compartir con personas interesantes. Se preocupan por el bienestar de los demás y buscan mejorar el mundo. Aman aprender y reflexionar sobre ideas nuevas."
            },
            negativo: "A veces desafían normas solo por el placer de ser diferentes y suelen perderse en ideas utópicas sin enfocarse en lo práctico."
        }
    ],
    agua: [
        {
            nombre: "Cáncer",
            imagen: "imagenes/cancer.png",
            positivo: {
                titulo: "Emocionales y sensibles",
                texto: "Se preocupan mucho por sus seres queridos. Poseen una gran capacidad artística y emocional. Son personas confiables en relaciones personales y laborales. Captan detalles y emociones que otros pueden pasar por alto."
            },
            negativo: "Son muy influenciados por sus emociones y pueden ser impredecibles. Se toman las cosas de manera muy personal y pueden herirse fácilmente."
        },
        {
            nombre: "Escorpio",
            imagen: "imagenes/escorpio.png",
            positivo: {
                titulo: "Intensos y apasionados",
                texto: "No muestran fácilmente lo que piensan o sienten. No temen enfrentar desafíos y siempre buscan sus objetivos. En el amor y la amistad, son fieles y confiables."
            },
            negativo: "Si alguien los traiciona, pueden guardar resentimiento por mucho tiempo. Saben cómo influenciar a los demás para lograr lo que quieren y pueden pasar de la pasión al odio con facilidad."
        },
        {
            nombre: "Piscis",
            imagen: "imagenes/piscis.png",
            positivo: {
                titulo: "Soñadores y creativos",
                texto: "Sienten el dolor y las emociones de los demás como propias. Se conectan con lo místico y lo trascendental. Buscan relaciones llenas de amor y entrega. Se ajustan a diferentes situaciones con facilidad."
            },
            negativo: "Se dejan llevar fácilmente por las opiniones de los demás y les cuesta establecer rutinas y mantenerse organizados."
        }
    ]
};
