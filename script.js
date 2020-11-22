let player_cities = [];
let cpu_cities = [];
let city_info = {
    "ITA5358":{"nombre":"Smallville"},
    "ITA5359":{"nombre":"Springfield"},
    "ITA5360":{"nombre":"Shelbyville"},
    "ITA5361":{"nombre":"Gotham City"},
    "ITA5362":{"nombre":"Metro City"},
    "ITA5363":{"nombre":"New City"},
    "ITA5364":{"nombre":"Upendi"},
    "ITA5365":{"nombre":"Prentisstown"},
    "ITA5366":{"nombre":"Hansville"},
    "ITA5367":{"nombre":"Godric Valley"},
    "ITA5368":{"nombre":"Hongville"},
    "ITA5369":{"nombre":"Toboso City"},
    "ITA5370":{"nombre":"Capital City"},
    "ITA5371":{"nombre":"Seeb"},
    "ITA5372":{"nombre":"Alpes City"},
    "ITA5373":{"nombre":"Verburndon"},
    "ITA5374":{"nombre":"Seywellslon Bay"},
    "ITA5375":{"nombre":"Lintown"},
    "ITA5376":{"nombre":"Bridldon"},
    "ITA5377":{"nombre":"Port Clunvel"},
    "ITA5378":{"nombre":"Mount Klinwa"},
    "ITA5379":{"nombre":"Lessey"},
};

fill_city_info();

function fill_city_info(){
    for(var key in city_info) {
        let percentage = Math.floor((Math.random() * (100-1)) + 1)
        city_info[key]={
            "nombre":city_info[key]["nombre"],
            "conservadores":percentage,
            "liberales":100-percentage,
            "habitantes":Math.floor((Math.random() * (150000-5000)) + 5000)
        };
      }
}


function show_city_info(id){
    let elmnt = document.getElementById(id)
    if(elmnt.classList.contains("fil0")){
        elmnt.classList.add("on_hover");
    }
    document.getElementById("city_name").textContent= "Ciudad: "+city_info[id]["nombre"];
    document.getElementById("conservadores").textContent= "Conservadores: "+city_info[id]["conservadores"]+"%";
    document.getElementById("liberales").textContent= "Liberales: "+city_info[id]["liberales"]+"%";
}

function remove_hover_color(id){
    document.getElementById(id).classList.remove('on_hover');

    document.getElementById("city_name").textContent= "Ciudad: ";
    document.getElementById("conservadores").textContent= "Conservadores: ";
    document.getElementById("liberales").textContent= "Liberales: ";

}


function set_selected(id){

    if(player_cities.includes(id) && player_cities.length<4 && !cpu_cities.includes(id)){   
        let index = player_cities.indexOf(id);
        player_cities.splice(index, 1);
        remove_hover_color(id);
        document.getElementById(id).classList.add("fil0");
        document.getElementById(id).classList.remove("selected");
        console.log(true);
    }
    else if(player_cities.length<4 && !cpu_cities.includes(id)){
        remove_hover_color(id);
        document.getElementById(id).classList.add("selected");
        document.getElementById(id).classList.remove("fil0");
        player_cities.push(id);

        setTimeout(() => {  
            get_random_city();
        }, Math.floor((Math.random() * (1500-500)) + 500));
    }
}

function get_random_city(){
    let cpu_opt = "ITA53" + Math.floor((Math.random() * (79-58)) + 58); // Gets the id for any city
    console.log(cpu_opt);
    if(player_cities.includes(cpu_opt) || cpu_cities.includes(cpu_opt)){
        get_random_city();
    }
    else if(cpu_cities.length<4){
        document.getElementById(cpu_opt).classList.add("cpu_selected");
        document.getElementById(cpu_opt).classList.remove("fil0");
        cpu_cities.push(cpu_opt);
    }   
}