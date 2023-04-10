import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from 'react-router-dom';
import { GetOne } from '../../API/product';
import { render } from 'react-dom';
interface formData {
    name : string,
    price : number,
    description : string,
    image : string,
  }
const UpdateProduct = (props:any) => {
    const [Image , SetImage] = useState("");
    const { register, handleSubmit, reset } = useForm()
    const navigate = useNavigate()
    const {id} = useParams();   
    useEffect(() => {
        const CurrentProduct = props?.data?.data?.find((data:any) => data._id == id);
        reset(CurrentProduct)
    },[props])
    const OnHandleSubmit = async (data:any) => {
        data.image = await SubmitImage()
        props.OnUpdate(data);
        navigate("Admin/Show")
    }
    const SubmitImage = async () => {
        const data  = new FormData();
        const cloud_name = "dsbiugddk";
        const upload_preset = "demo-ECMA";
        data.append("file", Image);
        data.append("upload_preset", upload_preset);
        data.append("cloud_name", cloud_name)
        data.append("folder", "Upload_ECMA1")
        const takeData = await  axios.post(`https://api.cloudinary.com/v1_1/dsbiugddk/image/upload`, data)
        .then((data:any) =>  data);
        return takeData.data.secure_url
    }
  return (
    <div>
    <form onSubmit={handleSubmit(OnHandleSubmit)} >
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Cập nhật Name</label>
    <input type="text" className="form-control" {...register("name")} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Cập nhật Price</label>
    <input type="number" className="form-control" {...register("price")}  id="exampleInputPassword1" />
  </div>
  <div className="mb-3">     
    <label htmlFor="exampleInputPassword1" className="form-label">Cập nhật Image</label>
    <input type="file" className="form-control" onChange={(e:any) => SetImage(e.target.files[0])} name='image' id="exampleInputPassword1" />
  </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Cập nhật Description</label>
  <textarea className="form-control" {...register("description")} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>

  <button type="submit" className="btn btn-primary">Cập nhật sản phẩm</button>
</form>

    </div>
  )
}

export default UpdateProduct