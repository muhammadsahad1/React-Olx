import React, { useState, useContext, useRef } from "react";
import Header from "../Header/Header";
import { db, storage } from "../../firebase/config";
import {
  getDownloadURL,
  ref as storageRef,
  uploadBytes,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { AuthContext, firebaseContext } from "../../store/context";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { checkValidation } from "../../validation/createProduct";

import "./create.css";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImaged] = useState(null);
  const navigate = useNavigate();
  const fileInput = useRef("");
  
  const { user } = useContext(AuthContext);

  const handleSubmit = async () => {
    const messageValid = checkValidation(name, category, price);
    toast.error(messageValid);

    if (messageValid === null) {
      if (image === null) {
        toast.error("Place select an image before sumbitting");
      }
    }

    try {
      const imageRef = storageRef(storage, `image/${image.name}`);
      const snapShot = await uploadBytes(imageRef, image);
      const url = await getDownloadURL(snapShot.ref);

      const usersCollectionRef = collection(db, "Products");
      const date = new Date();
      const newProduct = await addDoc(usersCollectionRef, {
        name: name,
        category: category,
        price: price,
        image: url,
        userId : user.uid,
        createAt: date.toDateString(),
      });
      console.log("newProduct", newProduct);
      setName("");
      setPrice("");
      setImaged(null);
      setCategory("");
      toast.success("Product added successfully");
      navigate("/");
    } catch (error) {
      console.log(error)
      toast.error(error.message);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <card>
        <div className="centerDiv">
          <label htmlFor="fname">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="fname"
            name="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <br />
          {image !== null ? (
            <img
              alt="Posts"
              width="200px"
              height="200px"
              src={image ? URL.createObjectURL(image) : " "}
            />
          ) : null}
          <br />
          <input
            onChange={(e) => {
              setImaged(e.target.files[0]);
            }}
            type="file"
            ref={fileInput}
          />
          <br />
          <button className="uploadBtn" onClick={handleSubmit}>
            upload and Submit
          </button>
        </div>
      </card>
    </React.Fragment>
  );
};

export default Create;
