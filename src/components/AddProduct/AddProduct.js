import React, { useState } from "react";
import ReactDOM from "react-dom";
import Select from "react-select";
import { useForm, Controller } from "react-hook-form";
import { Checkbox, Input } from "@material-ui/core";
import axios from "axios";
// import { Input as AntdInput } from "antd";


// API: 076690580c2aca01a56d81e286b1f439
const AddProduct = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [imageURL, setImageURL] = useState();

  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      weight: data.weight,
      price: data.price,
      imageURL: imageURL
    };
    const url = `http://localhost:5000/addProduct`;

    fetch(url, { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(productData)
    })
    .then(res => console.log(res))
  };

  const handleAddProduct = productImage => {
    const imageData = new FormData();
    imageData.set('key', '076690580c2aca01a56d81e286b1f439')
    imageData.append('image', productImage.target.files[0])
    
    axios.post('https://api.imgbb.com/1/upload', imageData)
    .then(res => {
      setImageURL(res.data.data.display_url);
      console.log(setImageURL(res.data.data.display_url));
    })
    .catch(err => console.log(err))

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Product Name" defaultValue="" {...register("name")} /> <br />
      <input name="weight" placeholder="Weight" defaultValue="" {...register("weight")} /> <br />
      <input name="price" placeholder="Price" defaultValue="" {...register("price")} /> <br />
      <input type="file" onChange={handleAddProduct} /> <br />
      {errors.exampleRequired && <span>This field is required</span>} <br />

      <input type="submit" />
    </form>
  );
};

export default AddProduct;