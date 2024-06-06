
let respuesta = document.getElementById("respuesta");

function callApiRequest(){

// Make a request for a user with a given ID
    axios.get('https://3.139.100.115/iot-car-control/back-end/apis/getRegistro.php')
    .then(function (response) {
        // handle success
        console.log(response);

        let respuestaServidor =
        response.data=='a'?"Adelante": response.data=='c'?"Izquierda":
        response.data=='b'?"Atras":response.data=='d'?"Derecha": "Detener";
        
        respuesta.innerHTML="Respuesta: <strong>" + respuestaServidor +"</strong>";


    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    });
}

setInterval(callApiRequest, 2000);