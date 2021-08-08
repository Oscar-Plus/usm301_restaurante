const cargarTipos = async ()=>{
    //1. Ir a buscar el filtro
    let filtroCbx = document.querySelector("#filtro-cbx");
    //2. Ir a buscar los tipos 
    let tipos = await getTipos();

    tipos.forEach(t=>{
        let option = document.createElement("option");
        option.innerText = t;
        option.value = t;
        filtroCbx.appendChild(option);

    });

}

const Tipos = async()=>{
    //1. Ir a buscar los tipos a la api
    let tipos = await getTipos();

    //2. Cargar los tipos dentro del select
    let tiposSelect = document.querySelector("#tipos-select");
    tipos.forEach(t=> {
        let option = document.createElement("option");
        option.innerText = t;
        tiposSelect.appendChild(option);
    });
};

document.addEventListener("DOMContentLoaded", ()=>{
    cargarTipos();
    Tipos();
});

const iniciarActualizacionV = function(){
    let v = this.Venta;
    document.querySelector("#nom_producto-txt").value = v.nombre ;
    document.querySelector("#tipos-select").value = v.tipo;
    document.querySelector("#precio-txt").value = v.precio;
    document.querySelector("#fecha-txt").value = v.fecha;

};


const iniciarEliminacionVenta = async function (){
    let id = this.idVenta;

    let resp = await Swal.fire({
        title : "¿Estas seguro?",
        text  : "Esta oprecaion es irreversible",
        icon  : "error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        if(await eliminarVenta(id)){
            let ventas = await getVentas();
            cargarTablaV(ventas);
            Swal.fire("Venta Eliminada" , "Venta eliminada" , "info");
        }else{
            Swal.fire("Error" , "No se pudo atender la solicitud" , "error");
        }


    }else{
        Swal.fire("Cancelado" , "Cancelado a petición del usuario" , "info");
    }


};




const cargarTablaV = (ventas)=>{
    let tbody = document.querySelector("#tbody-venta");
    tbody.innerHTML ="";

    for(i=0 ; i < ventas.length; i++){
        let v = ventas[i];

        let tr = document.createElement("tr");

        let tdNom_produto = document.createElement("td");
        tdNom_produto.innerText = v.nombre;
        let tdTipo        = document.createElement("td");
        tdTipo.innerText  = v.tipo;
        let tdPrecio      = document.createElement("td");
        tdPrecio.innerText = v.precio;
        let tdFecha        = document.createElement("td");
        tdFecha.innerText  = v.fecha;
        let tdAcciones = document.createElement("td");
        
        let botonEliminarVenta = document.createElement("td");
        botonEliminarVenta.innerText = "Eliminar";
        botonEliminarVenta.classList.add("btn","btn-danger");
        botonEliminarVenta.idVenta = v.id;

        botonEliminarVenta.addEventListener("click" , iniciarEliminacionVenta);

        let btnActualizarV = document.createElement("button");
        btnActualizarV.innerText = "Actualizar";
        btnActualizarV.classList.add("btn" , "btn-info");
        btnActualizarV.Venta = v;

        btnActualizarV.addEventListener("click" , iniciarActualizacionV);

        tdAcciones.appendChild(botonEliminarVenta);
        tdAcciones.appendChild(btnActualizarV);

        tr.appendChild(tdNom_produto);
        tr.appendChild(tdTipo);
        tr.appendChild(tdPrecio);
        tr.appendChild(tdFecha);
        tr.appendChild(tdAcciones);

        tbody.appendChild(tr);


    }

};

document.querySelector("#filtro-cbx").addEventListener("change",async()=>{
    let filtro = document.querySelector("#filtro-cbx").value;
    let ventas = await getVentas(filtro);

    cargarTablaV(ventas);

});

document.addEventListener("DOMContentLoaded",async ()=>{

    await cargarTipos();

    let ventas = await getVentas();

    cargarTablaV(ventas);
});