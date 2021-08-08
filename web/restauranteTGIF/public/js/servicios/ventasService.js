// getVentas
const getVentas = async(filtro ="todos")=>{
    let resp ;
    
    if(filtro =="todos"){
        resp = await axios.get("api/ventas/get");
    }else{
        resp = await axios.get(`api/ventas/filtrar?filtro=${filtro}`);
    }
   
    return resp.data;
}

//crearVenta
const crearVenta = async (venta)=>{
    let resp = await axios.post("api/ventas/post",venta,{
        headers: {
            "Content-Type" : "application/json"
        }
    })
    return resp.data;
}

//eliminarVenta
const eliminarVenta = async(id)=>{
    try{
        
        let resp = await axios.post("api/ventas/delete",{id},{
            headers: {
                "Content-Type" : "application/json"
            }
        });
        return resp.data == "ok";

    }catch(e){
        return false;
    }

}