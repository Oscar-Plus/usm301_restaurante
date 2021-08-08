//peticiones al servido = async (funcion esperada)

const cargarTipos = async()=>{
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
});

document.querySelector("#registrarVenta-btn").addEventListener("click",async ()=>{
    let nombre = document.querySelector("#nom_producto-txt").value.trim();
    let tipo   = document.querySelector("#tipos-select").value.trim();
    let precio = document.querySelector("#precio-txt").value.trim();
    let fecha  = document.querySelector("#fecha-txt").value.trim();


    let errores = [];

    if(nombre ===""){
        errores.push("Error falta por rellenar campo Nombre");
    }
    if(precio === ""){
        errores.push("Error falta por rellenar campo precio");
    }else if(precio <= 0){
        errores.push("Error precio debe ser mayor a 0");
    }
    if(fecha === ""){
        errores.push("Error falta por rellenar campo Fecha");
    }

    if(errores.length == 0){
        let venta = {};
        venta.nombre = nombre;
        venta.tipo = tipo;
        venta.precio = precio ;
        venta.fecha = fecha;

        // va al controlador y le pasa los datos
        let res = await crearVenta(venta);

        await Swal.fire("Venta Ingresado" , "Venta Ingresado Exitosamente" ,"info");

        window.location.href = "ver_venta";
    
    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });

    }


})

