import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const AuthorForm = () => {
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/author", { name })
      .then((response) => {
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.err.errors);
      });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <Link to="/" className="link">Home</Link>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                placeholder="Name"
                required=""
                type="text"
                className="input"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
              {errors.name ? <p>{errors.name.message}</p> : null}
            </div>
            <Stack direction='row'>
            <Button variant="contained" type="submit">
              SUBMIT
            </Button>
            </Stack>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;



