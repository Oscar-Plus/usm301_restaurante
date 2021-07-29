//peticiones al servido = async (funcion esperada)

const cargarTipos = async()=>{
    //1. Ir a buscar los tipos a la api
    let resultado = await axios.get("api/tipos/get");
    let tipos = resultado.data;

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
