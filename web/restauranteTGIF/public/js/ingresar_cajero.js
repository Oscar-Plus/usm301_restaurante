document.querySelector("#registrarCajero-btn").addEventListener("click",async ()=>{
    let cod_cajero = document.querySelector("#cod_cajero-txt").value.trim();
    let nom_cajero = document.querySelector("#nom_cajero-txt").value.trim();
    let fono_cajero = document.querySelector("#fono_cajero-txt").value.trim();
    let correo_cajero = document.querySelector("#correo_cajero-txt").value.trim();

    let errores = [];


    if(cod_cajero === ""){
        errores.push("Error falta por rellenar campo Codigo cajero");
    }else if(cod_cajero <= 0){
        errores.push("Error Codigo cajero debe ser mayor a 0");
    }
    if(nom_cajero === ""){
        errores.push("Error falta por rellenar campo Nombre");
    }
    if(fono_cajero === ""){
        errores.push("Error falta por rellenar campo Telefono");
    }
    if(correo_cajero === ""){
        errores.push("Error falta por rellenar campo Correo Electronico");
    }



    if(errores.length == 0){

        let cajero = {};
        cajero.cod_cajero = cod_cajero;
        cajero.nom_cajero = nom_cajero;
        cajero.fono_cajero = fono_cajero;
        cajero.correo_cajero = correo_cajero;

        let res = await crearCajero(cajero);

        await Swal.fire("Cajero Ingresado" , "Cajero Ingresado Exitosamente" ,"info");

        window.location.href = "ver_personalCaja";

    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }

});