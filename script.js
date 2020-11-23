let played_cities = [];
let city_info = {
    "R1": {
        "nombre": "Smallville-R1",
        "pj": "Alta",
        "edu": "Baja",
        "amb": "Media",
        "emp": "Media",
        "pob": "Alta"
    },
    "R2": {
        "nombre": "Springfield-R2",
        "pj": "Media",
        "edu": "Baja",
        "amb": "Alta",
        "emp": "Media",
        "pob": "Alta"
    },
    "R3": {
        "nombre": "Shelbyville-R3",
        "pj": "Baja",
        "edu": "Media",
        "amb": "Media",
        "emp": "Baja",
        "pob": "Media"
    },
    "R4": {
        "nombre": "Gotham City-R4",
        "pj": "Media",
        "edu": "Media",
        "amb": "Alta",
        "emp": "Baja",
        "pob": "Media"
    },
    "R5": {
        "nombre": "Metro City-R5",
        "pj": "Baja",
        "edu": "Alta",
        "amb": "Baja",
        "emp": "Alta",
        "pob": "Baja"
    },
    "R6": {
        "nombre": "New City-R6",
        "pj": "Alta",
        "edu": "Alta",
        "amb": "Alta",
        "emp": "Baja",
        "pob": "Baja"
    },
    "R7": {
        "nombre": "Upendi-R7",
        "pj": "Alta",
        "edu": "Baja",
        "amb": "Baja",
        "emp": "Media",
        "pob": "Alta"
    },
    "R8": {
        "nombre": "Prentisstown-R8",
        "pj": "Alta",
        "edu": "Media",
        "amb": "Media",
        "emp": "Baja",
        "pob": "Media"
    },
    "R9": {
        "nombre": "Hansville-R9",
        "pj": "Baja",
        "edu": "Media",
        "amb": "Alta",
        "emp": "Media",
        "pob": "Media"
    },
    "R10": {
        "nombre": "Godric Valley-R10",
        "pj": "Baja",
        "edu": "Alta",
        "amb": "Baja",
        "emp": "Alta",
        "pob": "Baja"
    },
    "R11": {
        "nombre": "Hongville-R11",
        "pj": "Alta",
        "edu": "Media",
        "amb": "Media",
        "emp": "Alta",
        "pob": "Media"
    },
    "R12": {
        "nombre": "Toboso City-R12",
        "pj": "Baja",
        "edu": "Baja",
        "amb": "Alta",
        "emp": "Media",
        "pob": "Alta"
    },
    "R13": {
        "nombre": "CapRl City-R13",
        "pj": "Alta",
        "edu": "Baja",
        "amb": "Media",
        "emp": "Alta",
        "pob": "Alta"
    },
    "R14": {
        "nombre": "Seeb-R14",
        "pj": "Alta",
        "edu": "Alta",
        "amb": "Alta",
        "emp": "Baja",
        "pob": "Baja"
    },
    "R15": {
        "nombre": "Alpes City-R15",
        "pj": "Media",
        "edu": "Alta",
        "amb": "Media",
        "emp": "Media",
        "pob": "Baja"
    },
    "R16": {
        "nombre": "Verburndon-R16",
        "pj": "Baja",
        "edu": "Baja",
        "amb": "Media",
        "emp": "Baja",
        "pob": "Media"
    },
    "R17": {
        "nombre": "Seywellslon Bay-R17",
        "pj": "Alta",
        "edu": "Alta",
        "amb": "Baja",
        "emp": "Baja",
        "pob": "Alta"
    },
    "R18": {
        "nombre": "Lintown-R18",
        "pj": "Alta",
        "edu": "Baja",
        "amb": "Baja",
        "emp": "Media",
        "pob": "Alta"
    },
    "R19": {
        "nombre": "Bridldon-R19",
        "pj": "Baja",
        "edu": "Alta",
        "amb": "Baja",
        "emp": "Baja",
        "pob": "Baja"
    },
    "R20": {
        "nombre": "Port Clunvel-R20",
        "pj": "Media",
        "edu": "Media",
        "amb": "Media",
        "emp": "Media",
        "pob": "Media"
    },
    "R21": {
        "nombre": "Mount Klinwa-R21",
        "pj": "Alta",
        "edu": "Alta",
        "amb": "Alta",
        "emp": "Alta",
        "pob": "Media"
    },
    "R22": {
        "nombre": "Lessey-R22",
        "pj": "Baja",
        "edu": "Alta",
        "amb": "Baja",
        "emp": "Baja",
        "pob": "Alta"
    },
};

let proposals = {
    "R1": {
        "A": "A = Cierre de iglesias para construir universidades públicas  ",
        "B": "B = Disminuir personal de escuelas públicas para disminuir impuestos ",
        "C": "C = Subir impuestos a empresas para subsidiar a familias pobres  ",
        "D": "D = Construir una universidad pública en una reserva natural "
    },
    "R2": {
        "A": "A = Aumentar importación de productos producidos dentro del país, para reducir sus costos de venta ",
        "B": "B = Cierre de iglesias para construir universidades públicas ",
        "C": "C = Cerrar producción petrolera y aumentar energías limpias ",
        "D": "D = Cárcel para maltratadores de animales "
    },
    "R3": {
        "A": "A = Subir impuestos a empresas para subsidiar a familias pobres   ",
        "B": "B = Aumentar impuestos para aumentar la calidad de la educación  ",
        "C": "C = Cerrar producción petrolera y aumentar energías limpias ",
        "D": "D = Reducir impuestos a empresas para que aumenten el salario mínimo "
    },
    "R4": {
        "A": "A = Cárcel para maltratadores de animales ",
        "B": "B = Aumentar impuestos para aumentar la calidad de la educación ",
        "C": "C = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "D": "D = Apoyo fracking "
    },
    "R5": {
        "A": "A = Apoyo fracking ",
        "B": "B = Cerrar producción petrolera y aumentar energías limpias ",
        "C": "C = Disminuir personal de escuelas públicas para disminuir impuestos ",
        "D": "D = Subir impuestos a empresas para subsidiar a familias pobres  "
    },
    "R6": {
        "A": "A = Apoyo al matrimonio igualitario  ",
        "B": "B = Aumentar importación de productos producidos dentro del país, para reducir sus costos de venta ",
        "C": "C = Implementar educación sexual en todas las escuelas ",
        "D": "D = Aumentar impuestos para aumentar la calidad de la educación "
    },
    "R7": {
        "A": "A = Apoyo al aborto ",
        "B": "B = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "C": "C = Cárcel para maltratadores de animales ",
        "D": "D = Implementación de educación sexual en todas las escuelas "
    },
    "R8": {
        "A": "A = Apoyo adopción homoparental   ",
        "B": "B = Rechazo adopción homoparental ",
        "C": "C = Apoyo matrimonio igualitario ",
        "D": "D = Aumentar impuestos para aumentar la calidad de la educación "
    },
    "R9": {
        "A": "A = Prohibir importación de productos producidos dentro del país ",
        "B": "B = Subir impuestos a empresas para subsidiar a familias pobres   ",
        "C": "C = Reducir impuestos a empresas para que aumenten el salario mínimo ",
        "D": "D = Cierre de universidades para construir iglesias "
    },
    "R10": {
        "A": "A = Apoyo fracking ",
        "B": "B = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "C": "C = Cerrar producción petrolera y aumentar energías limpias ",
        "D": "D = Construir una universidad pública en una reserva natural "
    },
    "R11": {
        "A": "A = Cárcel para maltratadores de animales ",
        "B": "B = Rechazo aborto ",
        "C": "C = Aumentar importación de productos producidos dentro del país, para reducir sus costos de venta ",
        "D": "D = Cierre de iglesias para construir universidades públicas "
    },
    "R12": {
        "A": "A = Rechazo adopción homoparental ",
        "B": "B = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "C": "C = Apoyo fracking ",
        "D": "D = Cierre de iglesias para construir universidades públicas "
    },
    "R13": {
        "A": "A = Implementación de educación sexual en todas las escuelas ",
        "B": "B = Cierre de universidades para construir iglesias  ",
        "C": "C = Cierre de iglesias para construir universidades públicas ",
        "D": "D = Rechazo aborto "
    },
    "R14": {
        "A": "A = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "B": "B = rechazo matrimonio igualitario ",
        "C": "C = Prohibir importación de productos producidos dentro del país ",
        "D": "D = Disminuir personal de escuelas públicas para disminuir impuestos "
    },
    "R15": {
        "A": "A = Reducir impuestos a empresas para que aumenten el salario mínimo ",
        "B": "B = Implementación de educación sexual en todas las escuelas ",
        "C": "C = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "D": "D = Cárcel para maltratadores de animales "
    },
    "R16": {
        "A": "A = Rechazo aborto ",
        "B": "B = Implementación de educación sexual en todas las escuelas ",
        "C": "C = Cierre de universidades para construir iglesias ",
        "D": "D = Cierre de iglesias para construir universidades públicas "
    },
    "R17": {
        "A": "A = Cerrar producción petrolera y aumentar energías limpias ",
        "B": "B = Construir una universidad pública en una reserva natural ",
        "C": "C = Cárcel para maltratadores de animales ",
        "D": "D = Disminuir personal de escuelas públicas para disminuir impuestos "
    },
    "R18": {
        "A": "A = Apoyo al aborto ",
        "B": "B = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "C": "C = Cárcel para maltratadores de animales ",
        "D": "D = Implementación de educación sexual en todas las escuelas "
    },
    "R19": {
        "A": "A = Apoyo fracking ",
        "B": "B = Cerrar producción petrolera y aumentar energías limpias ",
        "C": "C = Disminuir personal de escuelas públicas para disminuir impuestos ",
        "D": "D = Subir impuestos a empresas para subsidiar a familias pobres   "
    },
    "R20": {
        "A": "A = Cárcel para maltratadores de animales ",
        "B": "B = Aumentar impuestos para aumentar la calidad de la educación  ",
        "C": "C = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "D": "D = Apoyo fracking "
    },
    "R21": {
        "A": "A = Apoyo matrimonio igualitario ",
        "B": "B = rechazo matrimonio igualitario ",
        "C": "C = Apoyo aborto ",
        "D": "D = Disminuir personal de escuelas públicas para disminuir impuestos "
    },
    "R22": {
        "A": "A = Apoyo fracking ",
        "B": "B = Aumento de impuestos para esterilizar y cuidar animales callejeros ",
        "C": "C = Cerrar producción petrolera y aumentar energías limpias ",
        "D": "D = Construir una universidad pública en una reserva natural "
    },
};

let pointsmatrix = {
    "R1": {
        0: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 3,
                "bot": 0
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": 1
            }
        }
    },
    "R2": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": 3
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 0,
                "bot": 2
            }
        }
    },
    "R3": {
        0: {
            0: {
                "user": 3,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": 3
            }
        },
        1: {
            0: {
                "user": 0,
                "bot": 1
            },
            1: {
                "user": -1,
                "bot": 2
            }
        }
    },
    "R4": {
        0: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 2,
                "bot": -1
            }
        },
        1: {
            0: {
                "user": 2,
                "bot": 3
            },
            1: {
                "user": 1,
                "bot": -1
            }
        }
    },
    "R5": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": 0
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 0,
                "bot": 1
            }
        }
    },
    "R6": {
        0: {
            0: {
                "user": 3,
                "bot": 2
            },
            1: {
                "user": 3,
                "bot": 1
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 1
            },
            1: {
                "user": -1,
                "bot": 1
            }
        }
    },
    "R7": {
        0: {
            0: {
                "user": 3,
                "bot": 2
            },
            1: {
                "user": 3,
                "bot": 3
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": 1
            }
        }
    },
    "R8": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": 1
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 2
            },
            1: {
                "user": 0,
                "bot": 2
            }
        }
    },
    "R9": {
        0: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 3,
                "bot": 1
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": 0
            }
        }
    },
    "R10": {
        0: {
            0: {
                "user": -2,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": -1
            }
        },
        1: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 2,
                "bot": -2
            }
        }
    },
    "R11": {
        0: {
            0: {
                "user": 2,
                "bot": -1
            },
            1: {
                "user": 2,
                "bot": 3
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 0
            },
            1: {
                "user": -2,
                "bot": 2
            }
        }
    },
    "R12": {
        0: {
            0: {
                "user": 2,
                "bot": 3
            },
            1: {
                "user": 3,
                "bot": 2
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 0,
                "bot": 2
            }
        }
    },
    "R13": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": -2
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 3
            },
            1: {
                "user": -2,
                "bot": -1
            }
        }
    },
    "R14": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": -1
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 3
            },
            1: {
                "user": -2,
                "bot": -1
            }
        }
    },
    "R15": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": 2
            }
        },
        1: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 1,
                "bot": 2
            }
        }
    },
    "R16": {
        0: {
            0: {
                "user": 3,
                "bot": 2
            },
            1: {
                "user": 3,
                "bot": 0
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 2
            },
            1: {
                "user": 0,
                "bot": 2
            }
        }
    },
    "R17": {
        0: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 3,
                "bot": 3
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 2
            },
            1: {
                "user": -1,
                "bot": 1
            }
        }
    },
    "R18": {
        0: {
            0: {
                "user": 3,
                "bot": 2
            },
            1: {
                "user": 3,
                "bot": 3
            }
        },
        1: {
            0: {
                "user": 1,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": 1
            }
        }
    },
    "R19": {
        0: {
            0: {
                "user": -2,
                "bot": 2
            },
            1: {
                "user": -1,
                "bot": 1
            }
        },
        1: {
            0: {
                "user": 3,
                "bot": 1
            },
            1: {
                "user": 0,
                "bot": 1
            }
        }
    },
    "R20": {
        0: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 2,
                "bot": -1
            }
        },
        1: {
            0: {
                "user": 2,
                "bot": 3
            },
            1: {
                "user": 1,
                "bot": -1
            }
        }
    },
    "R21": {
        0: {
            0: {
                "user": 2,
                "bot": 2
            },
            1: {
                "user": 2,
                "bot": -1
            }
        },
        1: {
            0: {
                "user": -1,
                "bot": 3
            },
            1: {
                "user": -2,
                "bot": -1
            }
        }
    },
    "R22": {
        0: {
            0: {
                "user": -2,
                "bot": 2
            },
            1: {
                "user": 1,
                "bot": -1
            }
        },
        1: {
            0: {
                "user": 2,
                "bot": 1
            },
            1: {
                "user": 2,
                "bot": -2
            }
        }
    },
};

function show_city_info(id) {
    let elmnt = document.getElementById(id)
    if (elmnt.classList.contains("fil0")) {
        elmnt.classList.add("on_hover");
    }
    get_city_info(id);
}

function get_city_info(id) {
    document.getElementById("city_name").textContent = "Ciudad: " + city_info[id]["nombre"];
    document.getElementById("pj").textContent = "Poblacion Joven: " + city_info[id]["pj"];
    document.getElementById("edu").textContent = "Calidad de Educación: " + city_info[id]["edu"];
    document.getElementById("amb").textContent = "Calidad de Medio Ambiente: " + city_info[id]["amb"];
    document.getElementById("emp").textContent = "Cantidad de Empresarios: " + city_info[id]["emp"];
    document.getElementById("pob").textContent = "Pobreza: " + city_info[id]["pob"];
}

function remove_hover_color(id) {
    document.getElementById(id).classList.remove('on_hover');
    remove_city_info();
}

function remove_city_info(){
    document.getElementById("city_name").textContent = "Ciudad: ";
    document.getElementById("pj").textContent = "Poblacion Joven: ";
    document.getElementById("edu").textContent = "Calidad de Educación: ";
    document.getElementById("amb").textContent = "Calidad de Medio Ambiente: ";
    document.getElementById("emp").textContent = "Cantidad de Empresarios: ";
    document.getElementById("pob").textContent = "Pobreza: ";
}


function set_selected(id) {
    if (!played_cities.includes(id)) {
        document.getElementById(id).classList.remove('on_hover');
        document.getElementById(id).classList.add("selected");
        document.getElementById(id).classList.remove("fil0");
        played_cities.push(id);
        set_question(id);
        document.getElementById("WindowBack").style.display = "block";
        setTimeout(function () {
            get_city_info(id);
        }, 1);
    }
}


var userpoints = 0;
var botpoints = 0;
var botproposal;
var currentregion;

function set_question(id) {
    document.getElementById("OptionA").textContent = proposals[id]["A"];
    document.getElementById("OptionB").textContent = proposals[id]["B"];
    document.getElementById("OptionC").textContent = proposals[id]["C"];
    document.getElementById("OptionD").textContent = proposals[id]["D"];
    botproposal = Math.floor(Math.random() * (2));
    if (botproposal == 0) document.getElementById("BotOption").textContent = proposals[id]["C"];
    if (botproposal == 1) document.getElementById("BotOption").textContent = proposals[id]["D"];
    currentregion = id;
}

function SaveOption(opt) {
    console.log(currentregion + ": " + opt + "-" + botproposal);
    var output = pointsmatrix[currentregion][opt][botproposal];
    console.log(output);
    userpoints += output["user"];
    botpoints += output["bot"];
    remove_city_info();
    document.getElementById("WindowBack").style.display = "none";    
    document.getElementById("usercurrent").textContent = "Jugador: " + userpoints;
    document.getElementById("botcurrent").textContent = "Bot: " + botpoints;
    if(played_cities.length == 22){
        if(userpoints > botpoints) document.getElementById("result").textContent = "El Jugador gana la eleccion";
        if(botpoints > userpoints) document.getElementById("result").textContent = "El Bot gana la eleccion";
        if(botpoints == userpoints) document.getElementById("result").textContent = "Se ha presentado un empate";
        document.getElementById("Reload").style.display = "block";
    }
}

function Reload(){
    location.reload();
}