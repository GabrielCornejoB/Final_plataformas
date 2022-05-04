function Login() {
    var credenciales;
    let correo, contraseña, contraseña_revisar;
    correo = document.getElementById("email").value;
    contraseña_revisar = document.getElementById("password").value;
    /* Checking if the browser supports local storage. */
    if(typeof(Storage)!="undefined"){
        /* Checking if the user exists in the local storage. */
        if(localStorage.getItem(correo)!=undefined){
            
            /* Getting the information of the user from the local storage. */
            credenciales = JSON.parse(localStorage.getItem(correo));
            /* For debug
            console.log(credenciales);
            alert("entro");
            */

            /* Checking if the password is correct. */
            if(credenciales.contraseña == md5(contraseña_revisar)){
                alert("Bienvenido, "+credenciales.nombre);
                sessionStorage.setItem("aux", true); //Si aux es true significa que el usuario esta logeado   
            }
        }else{
            alert("Usuario no existe");
        }
    }else{
        alert("El navegador no soporta localstorage")
    }



}