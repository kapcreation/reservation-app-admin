import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs, userInputs } from "./formSource";
import axios from "axios"
import { uploadImage } from "../../firebase";

const New = ({ context }) => {
  let title = "No title"
  let inputs = []

  switch (context) {
    case "user":
      title="Add new user"
      inputs = userInputs
    break
    case "hotel":
      title="Add new hotel"
      inputs = hotelInputs
    break
    default:
    break
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      const formData = new FormData(e.currentTarget) 
      const data = Object.fromEntries(formData.entries());

      if (data.img) {
        data.img = await uploadImage(data.img)
      }
      if (data.photos) {
        const photos = formData.getAll('photos')
        data.photos = await Promise.all(photos.map(img => {
          const imgURL = uploadImage(img)
          return imgURL
        }))
      }
      switch (context) {
        case "user":
          await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, data)
        break
        case "hotel":
          await axios.post(`${process.env.REACT_APP_API_URL}/hotels`, data)
        break
        default:
        break
      }
      
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="new">
      <Sidebar />
      <div className="container">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <form onSubmit={handleSubmit}>
            {inputs.map((input, i) => (
              <div key={i}>
                <label>{input.label}</label>
                <input {...input} />
              </div>
            ))}
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;