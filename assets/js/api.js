window.onload=validate();
function validate() {
    /* Checking if the browser supports the local storage. */
    if(typeof(Storage) !== 'undefined'){
        /* Checking if the user is logged in or not. */
        if(sessionStorage.getItem('aux') == 'true'){
            alert('Contenido de API');
        }else{
            alert('Debe iniciar sesión para ver esta página');
            window.location.href = "register.html";
        }
    }else{
        alert("Storage no soportado por navegador");
    }
}
function apiShow() {
    //Mostrar el contenido de la API
}