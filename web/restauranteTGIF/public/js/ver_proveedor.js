const iniciarEliminacion = async function(){
    //1. obtener el id a eliminar
    let id = this.idProveedor;
    let resp = await Swal.fire({
        title:"¿Esta seguro?",
        text: "Esta operación es irreversible",
        icon: "error",
        showCancelButton:true
    });
    if(resp.isConfirmed){
        //1. Eliminar
        if(await eliminarProveedor(id)){
            //2. Si la eliminacion fue existosa reacargar la tabla
            let proveedores = await getProveedores();
            cargarTabla(proveedores);
            Swal.fire("Proveedor Eliminado" , "Proveedore eliminado" , "info");
        }else{
            //3.Si no fue exitosa , mostrar un mensaje de error.
            Swal.fire("Error" , "No se pudo atender la solicitud" , "error");
        }

    }else{
        Swal.fire("Cancelado" , "Cancelado a petición del usuario" , "info");
    }

};


const cargarTabla = (proveedores)=>{
    //1. Obtener una referencia al cuerpo de la tabla 
    let tbody = document.querySelector("#tbody-proveedor");
    tbody.innerHTML ="";

    //2. Recorrer todas las proveedores 
    for(let i=0; i<proveedores.length; ++i){
         let p = proveedores[i]; 
         //3. Por cada proveedore generar una fila
         let tr = document.createElement("tr");

         //4. GENERAR POR CADA ATRIBUTO del proveedor , un td
         let tdRut = document.createElement("td");
         tdRut.innerText = p.rut; // .rut = campo de la tabla  
         let tdNombre = document.createElement("td");
         tdNombre.innerText = p.nombre;
         let tdFono = document.createElement("td");
         tdFono.innerText = p.telefono;
         let tdCorreo = document.createElement("td");
         tdCorreo.innerText = p.correo;
         let tdUbicacion = document.createElement("td");
         tdUbicacion.innerText = p.ubicacion ; 
         let tdAcciones = document.createElement("td");

         let botonEliminar = document.createElement("button");
         botonEliminar.innerText = "Eliminar";
         botonEliminar.classList.add("btn","btn-danger");
         botonEliminar.idProveedor = p.id;

         botonEliminar.addEventListener("click", iniciarEliminacion);

         tdAcciones.appendChild(botonEliminar);
         
         //5. Agregar los td al tr
         tr.appendChild(tdRut);
         tr.appendChild(tdNombre);
         tr.appendChild(tdFono);
         tr.appendChild(tdCorreo);
         tr.appendChild(tdUbicacion);
         tr.appendChild(tdAcciones);
         //6. Agregar el tr al cuerpo de la tabla. 
         tbody.appendChild(tr);


    }
   
};

document.addEventListener("DOMContentLoaded",async ()=>{
    //Aqui voy a cargar la tabla de proveedores.
    //Lo que haga en esat parte esoy seguro que se esta ejecutando 
    //cuando la pág esta totalmente cargada.
    let proveedores = await getProveedores();
   
    cargarTabla(proveedores);

});