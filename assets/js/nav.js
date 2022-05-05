function ValidateUsr() {
    if(sessionStorage.getItem("aux") == "true"){
        var boton1 = document.createElement("input");
        // Atributos o Propiedades:
        boton1.id    = "boton_2";
        boton1.type  = "button";
        boton1.value = "Cerrar sesion";
        // Evento:
        boton1.onclick = function(){
            sessionStorage.setItem("aux", "false");
            alert("Sesión finalizada");
            location.reload();
        }
        document.getElementById("lista-menu").appendChild(boton1);
    }
    
}