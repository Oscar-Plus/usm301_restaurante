const iniciarActualizacionC = function(){
    let c = this.Cajero;
    document.querySelector("#cod_cajero-txt").value  = c.cod_cajero;
    document.querySelector("#nom_cajero-txt").value = c.nom_cajero;
    document.querySelector("#fono_cajero-txt").value = c.fono_cajero;
    document.querySelector("#correo_cajero-txt").value = c.correo_cajero;
};

const iniciarEliminacionC  = async function(){
    let id = this.idCajero;
    let resp = await Swal.fire({
        title:"¿Esta seguro?",
        text: "Esta operación es irreversible",
        icon: "error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        if(await eliminarCajero(id)){
            let cajeros = await getCajeros();
            cargarTablaC(cajeros)
            Swal.fire("Personal de caja Eliminado" , "Personal eliminado correctamente" , "info");

        }else{
            Swal.fire("Error" , "No se pudo atender la solicitud" , "error");
        }

    }else{
        Swal.fire("Cancelado" , "Cancelado a petición del usuario" , "info");
    }

};

const cargarTablaC = (cajeros)=>{
    let tbody = document.querySelector("#tbody-cajero");
    
    tbody.innerHTML = "";

    cajeros.forEach(c => {

        let tr = document.createElement("tr");

        let tdCod_cajero = document.createElement("td");
        tdCod_cajero.innerText = c.cod_cajero;
        let tdNom_cajero = document.createElement("td");
        tdNom_cajero.innerText = c.nom_cajero;
        let tdFono_cajero = document.createElement("td");
        tdFono_cajero.innerText = c.fono_cajero;
        let tdCorreo_cajero = document.createElement("td");
        tdCorreo_cajero.innerText = c.correo_cajero;
        let tdAcciones = document.createElement("td");

        let btnEliminarC = document.createElement("button");
        btnEliminarC.innerText = "Eliminar";
        btnEliminarC.classList.add("btn","btn-danger");
        btnEliminarC.idCajero = c.id;

        btnEliminarC.addEventListener("click",iniciarEliminacionC);

        let btnActualizarC = document.createElement("button");
        btnActualizarC.innerText = "Actualizar";
        btnActualizarC.classList.add("btn" , "btn-info");
        btnActualizarC.Cajero = c;

        btnActualizarC.addEventListener("click" , iniciarActualizacionC);

        tdAcciones.appendChild(btnEliminarC);
        tdAcciones.appendChild(btnActualizarC);
        
        tr.appendChild(tdCod_cajero);
        tr.appendChild(tdNom_cajero);
        tr.appendChild(tdFono_cajero);
        tr.appendChild(tdCorreo_cajero);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);


    });


};


document.addEventListener("DOMContentLoaded",async ()=>{
    let cajeros = await getCajeros();

    cargarTablaC(cajeros);

});