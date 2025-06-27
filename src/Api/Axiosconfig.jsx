import axios from "axios" 

const instance = axios.create({
     baseURL: "https://productshowcasebackend.onrender.com",
}) ;

export default instance ;