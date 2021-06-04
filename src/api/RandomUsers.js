export async function getData(){
    try{
        let resultado = await fetch('https://randomuser.me/api/?results=5');
        let json = await resultado.json();
        return json.resulsts;
    }catch(e){
        console.log("ERR: " + e);
    }
}