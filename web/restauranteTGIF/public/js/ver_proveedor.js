const iniciarActualizacion = function(){
    let p = this.Proveedor;

    document.querySelector("#rut-txt").value = p.rut;
    document.querySelector("#nombre-txt").value = p.nombre;
    document.querySelector("#fono-txt").value = p.telefono;
    document.querySelector("#correo-txt").value = p.correo;
    document.querySelector("#ubicacion-txt").value = p.ubicacion;
    document.querySelector("#cod_empresa-txt").value = p.cod_empresa;
    
};

document.querySelector("#modificarP-btn").addEventListener("click" , async ()=>{
    let p = this.Proveedor;
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let telefono = document.querySelector("#fono-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let ubicacion = document.querySelector("#ubicacion-txt").value.trim();
    let cod_empresa = document.querySelector("#cod_empresa-txt").value.trim();


    p.rut = rut ;
    p.nombre = nombre;
    p.telefono = telefono;
    p.correo = correo;
    p.ubicacion = ubicacion;
    p.cod_empresa = cod_empresa;
    console.log(p);

    await actualizarProveedor(p);
    
    let proveedores = await getProveedores();
   
    cargarTabla(proveedores);




});



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
            Swal.fire("Proveedor Eliminado" , "Proveedor eliminado" , "info");
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
         //3. Por cada proveedor generar una fila
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
         let tdCodEMP = document.createElement("td");
         tdCodEMP.innerText = p.cod_empresa;
         let tdAcciones = document.createElement("td");

         let botonEliminar = document.createElement("button");
         botonEliminar.innerText = "Eliminar";
         botonEliminar.classList.add("btn","btn-danger");
         botonEliminar.idProveedor = p.id;

         botonEliminar.addEventListener("click", iniciarEliminacion);

         let botonActualizar = document.createElement("button");
         botonActualizar.innerText = "Actualizar";
         botonActualizar.classList.add("btn" , "btn-info");
         botonActualizar.Proveedor = p;


        botonActualizar.addEventListener("click" , iniciarActualizacion);

         tdAcciones.appendChild(botonEliminar);
         tdAcciones.appendChild( botonActualizar);
         
         
         //5. Agregar los td al tr
         tr.appendChild(tdRut);
         tr.appendChild(tdNombre);
         tr.appendChild(tdFono);
         tr.appendChild(tdCorreo);
         tr.appendChild(tdUbicacion);
         tr.appendChild(tdCodEMP);
         tr.appendChild(tdAcciones);
         //6. Agregar el tr al cuerpo de la tabla. 
         tbody.appendChild(tr);


    }
   
};

document.addEventListener("DOMContentLoaded",async ()=>{
    let proveedores = await getProveedores();
   
    cargarTabla(proveedores);

});