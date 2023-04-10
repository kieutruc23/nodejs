import React, { useEffect, useState } from 'react'
import axios from "axios";
import { useForm , SubmitHandler } from "react-hook-form"

import { GetAllCategory } from '../../API/product';
interface formData {
    name : string,
    price : number,
    description : string,
    image : string,
    categoryId : string
}
const AddProduct = (props:any) => {
  
        const [Image , SetImage] = useState("");
        const [Category, setcategory] = useState([])
        useEffect(() => {
          GetAllCategory().then(({data}) => setcategory(data));
        }, [])
        const { register, handleSubmit } = useForm<formData>();
        const OnHandSubmit: SubmitHandler<formData> = async (data:formData) =>  { 
        data.image = await SubmitImage();
        props.Onadd(data)
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
    <form onSubmit={handleSubmit(OnHandSubmit)}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Nhập Name</label>
    <input type="text" className="form-control"  {...register("name", {
      required : true
    })} id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Nhập Price</label>
    <input type="number" className="form-control" {...register("price", {
      required : true
    })}  id="exampleInputPassword1" />
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Nhập Image</label>
    <input type="file" className="form-control" {...register("image", {
      required : true
    })} onChange={(e:any) => SetImage(e.target.files[0])} name='image' id="exampleInputPassword1" />
  </div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Nhập Description</label>
  <textarea className="form-control" {...register("description", {
      required : true
    })} id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">Nhập Danh Mục</label>
  <br />
 <select className="form-select" aria-label="Default select example" {...register('categoryId', {
      required : true
    })}>
  <option selected >Vui lòng chọn danh mục</option>
  {
    Category?.data?.map((data:any) => <option key={data._id} value={data._id}>{data.name}</option>)
  }
  </select>
</div>

  <button type="submit" className="btn btn-primary">Thêm sản phẩm</button>
</form>

    </div>
  )
}

export default AddProduct