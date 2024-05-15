import dotenv from "dotenv";

const envFound = dotenv.config();

if(envFound.error){
    throw new Error("[-] No se ha encontrado el fichero .env");
}

export default {
    port:process.env.PORT || 4002
}