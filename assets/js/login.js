function LoguearUsuario(event) {

    let usuario = document.getElementById("inputUsuario");
    let password = document.getElementById("inputPassword");
    if (usuario.value == "") {
        Toastify({
            text: `Debe llenar usuario`,
            duration: 1500,
            style: {
                background: "rgb(162, 108, 216)"
            },
            gravity: "bottom",
        }).showToast();
    } else if (password.value == "") {
        Toastify({
            text: `Debe llenar password`,
            duration: 1500,
            style: {
                background: "rgb(162, 108, 216)"
            },
            gravity: "bottom",
        }).showToast();
    } else {
        sessionStorage.setItem('nombreUsuario', JSON.stringify(usuario.value))
        event.preventDefault();
        window.location.href = "tabs/quienesSomos.html";
    }
    event.preventDefault();
}

let usuarioNombre = JSON.parse(sessionStorage.getItem('nombreUsuario'))
if (usuarioNombre != null){
    document.getElementById("drdwUsuario").innerHTML = usuarioNombre;
}


function CerrarSesion(event){
    sessionStorage.removeItem('nombreUsuario');
    event.preventDefault();
    window.location.href = "../index.html";
}