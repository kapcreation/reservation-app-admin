import userImg from '../../assets/user.png'

export const userColumns = (actions) => [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cell-img">
          <img src={params.row.img || userImg} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  }, 
  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <button onClick={()=>actions.onView()}>View</button>
          <button onClick={()=>actions.onDelete(params)}>Delete</button>
        </div>
      );
    },
  },
];


export const hotelColumns = (actions) => [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <button onClick={()=>actions.onView()}>View</button>
          <button onClick={()=>actions.onDelete(params)}>Delete</button>
        </div>
      );
    },
  },
];

export const roomColumns = (actions) => [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
  {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cell-action">
          <button onClick={()=>actions.onView()}>View</button>
          <button onClick={()=>actions.onDelete(params)}>Delete</button>
        </div>
      );
    },
  },
];
