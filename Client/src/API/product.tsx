import { InterFace } from "./interface";


export const create = (data:any) => {
    return InterFace.post("/product", data);
}
export const GetAll = () => {
    return InterFace.get("/product");
}
export const GetOne = (id:any) => {
    return InterFace.get("/product/"+ id);
}
export const Delete = (id:any) => {
    const accessToken = localStorage.getItem("accessTokent");
    return InterFace.delete("/product/"+ id, {
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    });
}
export const UpdateNewProduct = (data:any) => {
    const accessToken = localStorage.getItem("accessTokent");
    return InterFace.put("/product/"+ data._id,data , {
        headers : {
            Authorization : `Bearer ${accessToken}`
        }
    });
}

//todo Get Category

export const GetAllCategory = () => {
    return InterFace.get("/Category");
}
export const CreatCategory = (data:any) => {
    return InterFace.post("/Category", data);
}
export const removeCategory = (id:any) => {
    return InterFace.delete("/Category/"+ id);
}
//todo Login 
export const RegisterUser = (data:any) => {
    return InterFace.post("/signup", data);
}
export const loginUser = (data:any) => {
    return InterFace.post("/Signin", data);
}