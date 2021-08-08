const iniciarActualizacionMP = function (){
    let mp = this.MateriaP;

    document.querySelector("#cod_materiaP-num").value = mp.cod_materiaP;
    document.querySelector("#nom_materiaP-txt").value = mp.nom_materiaP;
    document.querySelector("#cant_materiaP-num").value = mp.cant_materiaP;
    document.querySelector("#val_materiaP-num").value = mp.val_materiaP;
    document.querySelector("#fecha_materiaP-date").value = mp.fecha_materiaP;

}


const iniciarEliminacionMP = async function(){
    let id  = this.idMateriaP;
    let resp = await Swal.fire({
        title:"¿Esta seguro?",
        text: "Esta operación es irreversible",
        icon: "error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        if(await eliminarMateriaP(id)){
            let materiasp = await getMateriaP();
            cargarTablaMP(materiasp);
            Swal.fire("Materia Prima eliminada" , "Eliminada correctamente" , "info");
        }else{
            Swal.fire("Error" , "No se pudo atender la solicitud" , "error");
        }
        
    }else{
        Swal.fire("Cancelado" , "Cancelado a petición del usuario" , "info");
    }

};



const cargarTablaMP = (materiaP)=>{
    let tbody = document.querySelector("#tbody-materiap");
    tbody.innerHTML = "";
    
    materiaP.forEach(mp => {
        
        let tr  = document.createElement("tr");

        let tdCod_mp = document.createElement("td");
        tdCod_mp.innerText = mp.cod_materiaP;
        let tdNom_mp = document.createElement("td");
        tdNom_mp.innerText = mp.nom_materiaP ;
        let tdCant_mp = document.createElement("td");
        tdCant_mp.innerText = mp.cant_materiaP;
        let tdVal_mp = document.createElement("td");
        tdVal_mp.innerText = mp.val_materiaP;
        let tdFecha_mp = document.createElement("td");
        tdFecha_mp.innerText = mp.fecha_materiaP;
        let tdAcciones = document.createElement("td");
        
        let btnEliminarMP = document.createElement("button");
        btnEliminarMP.innerText = "Eliminar";
        btnEliminarMP.classList.add("btn" , "btn-danger");
        btnEliminarMP.idMateriaP = mp.id;

        btnEliminarMP.addEventListener("click" , iniciarEliminacionMP);

        let btnActualizarMP = document.createElement("button");
        btnActualizarMP.innerText = "Actualizar";
        btnActualizarMP.classList.add("btn" , "btn-info");
        btnActualizarMP.MateriaP = mp;

        btnActualizarMP.addEventListener("click" , iniciarActualizacionMP);

        tdAcciones.appendChild(btnEliminarMP);
        tdAcciones.appendChild(btnActualizarMP);

        tr.appendChild(tdCod_mp);
        tr.appendChild(tdNom_mp);
        tr.appendChild(tdCant_mp);
        tr.appendChild(tdVal_mp);
        tr.appendChild(tdFecha_mp);
        tr.appendChild(tdAcciones);


        tbody.appendChild(tr);
    });

};



document.addEventListener("DOMContentLoaded" ,async ()=>{
    let materiaP = await getMateriaP();
    cargarTablaMP(materiaP);
});