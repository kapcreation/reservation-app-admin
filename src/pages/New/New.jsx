import "./New.scss";
import Sidebar from "../../components/Sidebar/Sidebar";
import Navbar from "../../components/Navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState } from "react";
import { hotelInputs, roomInputs, userInputs } from "./formSource";
import axios from "axios"
import { uploadImage } from "../../firebase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const New = ({ context }) => {
  const [loading, setLoading] = useState(false)
  let title = "No title"
  let inputs = []
  let endpoint = ""

  switch (context) {
    case "user":
      title="Add new user"
      inputs = userInputs
      endpoint = "auth/register"
    break
    case "hotel":
      title="Add new hotel"
      inputs = hotelInputs
      endpoint = "hotels"
    break
    case "room":
      title="Add new room"
      inputs = roomInputs
      endpoint = "rooms"
    break
    default:
    break
  }

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setLoading(true)
      const form = e.currentTarget
      const formData = new FormData(form) 
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
    
      await axios.post(`${process.env.REACT_APP_API}/${endpoint}`, data)

      toast(`${context} successfully created!`)
      form.reset()
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
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
            <button disabled={loading}>Create new {context}</button>
          </form>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default New;