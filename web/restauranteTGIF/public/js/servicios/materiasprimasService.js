
//getMateriaP
const getMateriaP = async ()=>{
    let resp = await axios.get("api/materiasp/get");
    return resp.data;

}

//crearMateriaP
const crearMateriaP = async (materiap)=>{
    let resp = await axios.post("api/materiasp/post", materiap , {
        headers: {
            "Content-Type" : "application/json"
        }
    });
    return resp.data;

}

const eliminarMateriaP = async(id)=>{
    try{
        let resp = await axios.post("api/materiasp/delete" , {id} , {
            headers:{
                "Content-Type" : "application/json"
            }
        });
        return resp.data == "ok";
    }catch(e){
        return false;
    }

}

