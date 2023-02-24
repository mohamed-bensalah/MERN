import { useEffect, useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


import axios from "axios";
import "../App.css";
import { Link } from "react-router-dom";
const DisplayAll = () => {
  const [allAuthors, setAllAuthors] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/author")
      .then((response) => {
        setAllAuthors(response.data);
      })
      .catch((err) => {

      });
  }, []);

  const handleDeleteAuthor = (idFromBelow) => {
    axios
      .delete(`http://localhost:8000/api/author/${idFromBelow}`)
      .then((response) => {
        const filteredAuthors = allAuthors.filter((author) => {
          return author._id !== idFromBelow;
        });
        setAllAuthors(filteredAuthors);
      })
      .catch((err) => {
      });
  };
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-8">
          <Link to="/new" className="link">Add an author</Link>
          <p className="purple-text">We have quotes by:</p>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions Available</th>
              </tr>
            </thead>
            <tbody>
              {allAuthors.map((author, index) => {
                return (
                  <tr key={author._id}>
                    <td>{author.name}</td>
                    <td>
                      <Link to={`/edit/${author._id}`}>
                      <Stack direction='row'>
            <Button variant="contained" color="success">
                 Edit
            </Button>
            </Stack>
                      </Link>
                      <Stack>
                      <Button
                        onClick={() => handleDeleteAuthor(author._id)}
                      variant="contained" color="error">

                        Delete
                      </Button>
                      </Stack>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DisplayAll;


