import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function JokeModal({ showjoke, setShowjoke, category }) {
  const [jokeDetails, setJokeDetails] = useState("");
  //const [show, setShow] = useState(false);
  console.log("Category", category);
  const handleClose = () => setShowjoke(false);
  const fetchJokeData = async () => {
    try {
      const response = await axios.get(
        `https://api.chucknorris.io/jokes/random?${category}`
      );
      console.log("JokeModal", response.data);
      setJokeDetails(response.data.value);
    } catch (Error) {
      console.log(Error);
    }
  };
  useEffect(() => {
    fetchJokeData();
  }, []);

  return (
    <div>
      <Modal show={showjoke} onHide={handleClose} style={{ marginLeft:"-7% ",marginTop:"10%"}}>
        <div className="conentStyle">
          <Modal.Header
            closeButton
            style={{ fontSize: "30px",color:"white"}}
          >
            <Modal.Title style={{ marginLeft: "41%", fontSize: "40px" }}>
            {category.charAt(0).toUpperCase() + category.slice(1)}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div
              style={{
                border: "1px solid black",
                margin: "7px",
                padding: "8px",
              }}
            >
              <div style={{ textAlign: "center" }}>"{jokeDetails}"</div>
              <Button
                style={{
                  backgroundColor: "blue",
                  paddingLeft: "40px",
                  paddingRight: "40px",
                  marginLeft: "23%",
                  width: "50%",
                }}
                onClick={() => {
                  fetchJokeData();
                }}
              >
                Next
              </Button>
            </div>
          </Modal.Body>
        </div>
      </Modal>
    </div>
  );
}

export default JokeModal;
