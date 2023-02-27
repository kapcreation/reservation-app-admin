import React from 'react'
import './Datatable.scss'
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import rows from './rows'
import { useNavigate, Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch'
import userImg from '../../assets/user.png'
import axios from 'axios';
import { userColumns, hotelColumns, roomColumns } from './columns';

const Datatable = ({ context }) => {
  const { data, setData, loading, error } = useFetch(`${process.env.REACT_APP_API}/${context}s`)
    
  const navigate = useNavigate()

  async function handleDelete(id) {
    try {
      setData(data.filter(item=>item._id !== id))
      await axios.delete(`${process.env.REACT_APP_API}/${context}s/${id}`)
    } catch (error) {
      console.error(error)
    }
  }

  let columns = null
  switch (context) {
    case "user":
      columns = userColumns
    break
    case "hotel":
      columns = hotelColumns
    break
    case "room":
      columns = roomColumns
    break
    default:
    break
  }

  return (
    <div className='datatable'>
      <div className="head">
        <h2>{context + "s"}</h2>
        <Link to={`/${context}s/new`} className='btn'>
          Add new
        </Link>
      </div>
      <DataGrid
        className='data-grid'
        rows={data}
        columns={
          columns({ onView: ()=>navigate("/users/123"), onDelete: (params)=>handleDelete(params.row._id) })}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={row=>row._id}
      />
    </div>
  )
}

export default Datatable