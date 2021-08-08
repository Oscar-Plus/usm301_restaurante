
//getCajeros

const getCajeros = async ()=>{
    let resp = await axios.get("api/cajeros/get");
    return resp.data;

}

//crearCajero

const crearCajero = async (cajero)=>{
    let resp = await axios.post("api/cajeros/post",cajero,{
        headers: {
            "Content-Type" : "application/json"
        }
    });
    return resp.data;

}

//eliminarCajero
const eliminarCajero = async (id)=>{
    try{
        let resp = await axios.post("api/cajeros/delete",{id},{
        headers: {
            "Content-Type" : "application/json"
        }
            
        });
        return resp.data == "ok";

    }catch(e){
        return false;
    }
}

