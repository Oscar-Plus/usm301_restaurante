document.querySelector("#registrar-btn").addEventListener("click",async ()=>{
    let rut = document.querySelector("#rut-txt").value.trim();
    let nombre = document.querySelector("#nombre-txt").value.trim();
    let telefono = document.querySelector("#fono-txt").value.trim();
    let correo = document.querySelector("#correo-txt").value.trim();
    let ubicacion = document.querySelector("#ubicacion-txt").value.trim();
    let cod_empresa = document.querySelector("#cod_empresa-txt").value.trim();



    let errores = [];


    if(rut === ""){
        errores.push("Error falta por rellenar campo Rut");
    }else{
        let proveedores = await getProveedores();
        let proveedorEncontrado = proveedores.find(p=>p.rut.toLowerCase() === rut.toLowerCase());
        if(proveedorEncontrado != undefined){
            errores.push("El proveedor ya existe");
        }
    }
    if(nombre === ""){
        errores.push("Error falta por rellenar campo Nombre");
    }
    if(telefono === ""){
        errores.push("Error falta por rellenar campo Telefono");
    }
    if(correo === ""){
        errores.push("Error falta por rellenar campo Correo");
    }
    if(ubicacion === ""){
        errores.push("Error falta por rellenar campo Ubicacion");
    }
    if(cod_empresa === ""){
        errores.push("Error falta por rellenar campo COD EMP");
    }else if(cod_empresa <= 0){
        errores.push("Error codigo de la empresa debe ser mayor a 0");
    }
    

    if(errores.length == 0){

        let proveedor =  {};
        proveedor.rut = rut ;
        proveedor.nombre = nombre;
        proveedor.telefono = telefono;
        proveedor.correo = correo;
        proveedor.ubicacion = ubicacion;
        proveedor.cod_empresa = cod_empresa;

        // va al controlador , le pasa los datos
        let res = await crearProveedor(proveedor);

        await Swal.fire("Proveedor Ingresado" , "Proveedor Ingresado Exitosamente" ,"info");
    
        window.location.href = "ver_proveedor";
   
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });
    }

});