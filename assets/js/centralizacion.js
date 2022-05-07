let contenedor_menu;
let menu_items = [];
let paginas = [];
var iniciarLogin = undefined, iniciarRegistro = undefined;

const menu_html = `
<li class="nav-item">
<a class="nav-link" href="javascript:void(0); " id="item_1" >Home</a>
</li>
<li class="nav-item">
<a class="nav-link" href="javascript:void(0); " id="item_2" >Programación</a>
</li>
<li class="nav-item">
<a class="nav-link" href="javascript:void(0); " id="item_3" >Artistas invitados</a>
</li>
<li class="nav-item">
<a class="nav-link" href="javascript:void(0); " id="item_4" >Contenido API</a>
</li>
<li class="nav-item">
<a class="nav-link" href="javascript:void(0); " id="item_5" >Registro / Inicio sesion</a>
</li>
<li class="nav-item">
<a class="nav-link" id="estado-usr" href="javascript:void(0)"></a>
</li>
`;

window.onload = function(){

    contenedor_menu = document.querySelector("#lista-menu");
    contenedor_menu.innerHTML = menu_html;

    asignarNavegacion();
}

function asignarNavegacion(){
    menu_items.push(document.getElementById("item_1"));
    menu_items.push(document.getElementById("item_2"));
    menu_items.push(document.getElementById("item_3"));
    menu_items.push(document.getElementById("item_4"));
    menu_items.push(document.getElementById("item_5"));

    paginas["item_1"] = "index.html";
    paginas["item_2"] = "programacion.html";
    paginas["item_3"] = "artistas.html";
    paginas["item_4"] = "api.html";
    paginas["item_5"] = "register.html";

    for(var i of menu_items)
    {
        i.addEventListener("click",abrirPagina);
    }
}


function abrirPagina(evento){
    location.href = paginas[evento.target.id];
}