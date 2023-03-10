import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


const EditAuthor = (props) => {
  const { id } = useParams();
  const [PetName, setPetName] = useState("");
  const [PetType, setPetType] = useState({});
  const navigate = useNavigate()
  console.log(id);

  
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/allPetShelter/${id}`)
      .then((response) => {
        setPetName(response.data.name);
      })
      .catch((err) => console.log(err.response));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8000/api/author/${id}`, { name: authorName })
      .then((response) => {
        navigate("/")
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <form onSubmit={submitHandler}>
      {authorNotFoundError ? (
        <h2>
          {authorNotFoundError} <Link to="/new">Click here to add author</Link>
        </h2>
      ) : null}
      <Link to="/" className="link">Home</Link>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="input"
          id="name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        {errors.name ? <p>{errors.name.message}</p> : null}
      </div>
      <Stack direction='row'>
      <Button variant="contained" type="submit">
        SUBMIT
      </Button>
      </Stack>
    </form>
  );
};

export default EditAuthor;