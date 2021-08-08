

document.querySelector("#registrarMP-btn").addEventListener("click" , async()=>{
    let cod_mp = document.querySelector("#cod_materiaP-num").value.trim();
    let nom_mp = document.querySelector("#nom_materiaP-txt").value.trim();
    let cant_mp = document.querySelector("#cant_materiaP-num").value.trim();
    let val_mp = document.querySelector("#val_materiaP-num").value.trim();
    let fecha_mp = document.querySelector("#fecha_materiaP-date").value.trim();

    let errores = [];

    if(cod_mp === ""){
        errores.push("Error falta rellenar campo codigo ");

    }else if(cod_mp <=0){
        errores.push("Error  campo codigo debe ser mayor a 0");
    }
    if(nom_mp ===""){
        errores.push("Error falta rellenar campo nombre ");
    }
    if(cant_mp === ""){
        errores.push("Error falta rellenar campo cantidad ");
    }else if(cant_mp <= 0){
        errores.push("Error  campo cantidad debe ser mayor a 0");
    }
    if(val_mp ===""){
        errores.push("Error falta rellenar campo valor ");

    }else if(val_mp <= 0){
        errores.push("Error  campo valor  debe ser mayor a 0");
    }
    if(fecha_mp === ""){
        errores.push("Error falta rellenar campo fecha ");

    }

    if(errores.length == 0){
        let materiaP = {};
        materiaP.cod_materiaP = cod_mp;
        materiaP.nom_materiaP = nom_mp;
        materiaP.cant_materiaP = cant_mp;
        materiaP.val_materiaP  = val_mp;
        materiaP.fecha_materiaP = fecha_mp;

        let res = await crearMateriaP(materiaP);
        await Swal.fire("Materia prima Ingresada" , "Materia prima Ingresada Exitosamente" ,"info");

        window.location.href = "ver_materiaprima";

    }else{
        Swal.fire({
            title:"Errores de validacion",
            icon: "warning",
            html: errores.join("<br />")
        });

    }

    

    
    
    




});