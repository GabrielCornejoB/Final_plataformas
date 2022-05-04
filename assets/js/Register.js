

function Register() {
    //alert("clicked"); Debug
    /* Getting the values from the form and storing them in variables. */
    let credenciales;
    let username = document.getElementById("fname").value;
    let correo=document.getElementById("email").value;
    let password=md5(document.getElementById("password").value);
    let usuario = {
        "nombre": username, 
        "email":correo,
        "contraseña":password
    };
    /* Checking if the browser supports localstorage. */
    if(typeof(Storage)!="undefined"){
        /* Checking if the email is already in the localstorage. If it is, it will alert the user that
        the email is already in use. If it is not, it will store the user's information in the
        localstorage. */
        if(localStorage.getItem(correo) == undefined){
            credenciales = JSON.stringify(usuario);
            localStorage.setItem(correo,credenciales);
            alert("Registro exitoso");
        }else{
            alert("Correo ya existe");
        }
    }else{
        alert("Navegador no soporta localstorage");
    }
    
}