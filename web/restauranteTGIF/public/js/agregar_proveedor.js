document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let rut = document.querySelector("#rut-txt").value;
    let nombre = document.querySelector("#nombre-txt").value;
    let telefono = document.querySelector("#fono-txt").value;
    let correo = document.querySelector("#correo-txt").value;
    let ubicacion = document.querySelector("#ubicacion-txt").value;

    let proveedor =  {};
    proveedor.rut = rut ;
    proveedor.nombre = nombre;
    proveedor.telefono = telefono;
    proveedor.correo = correo;
    proveedor.ubicacion = ubicacion;

    // va al controlador , le pasa los datos
    let res = await crearProveedor(proveedor);

    await Swal.fire("Proveedor Ingresado" , "Proveedor Ingresado Exitosamente" ,"info");
 
    window.location.href = "ver_proveedor";
});