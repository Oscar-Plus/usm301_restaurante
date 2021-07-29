//ESTE ARCHIVO VA A TENER LAS OPERACIONES PARA COMUNICARSE CON EL CONTROLLER

//getProveedores
const getProveedores = async ()=>{
    let resp = await axios.get("api/proveedores/get");
    return resp.data;
    
}

//crearProveedor
const crearProveedor = async(proveedor)=>{
    // Estructura de peticiones post al servidor con axios
    let resp = await axios.post("api/proveedores/post", proveedor,{
        headers: {
            "Content-Type" : "application/json"
        }
    });
    return resp.data;

    
}

//eliminarProveedor
const eliminarProveedor = async(id)=>{
    try{
            let resp = await axios.post("api/proveedores/delete" , {id},{
             headers: {
                       "Content-Type" : "application/json"
              }
         });
         return resp.data == "ok";

    }catch(e){
        return false;

    } 


}