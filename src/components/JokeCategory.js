import React, { useState } from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import JokeModal from "./JokeModal";

function JokeCategory({ category }) {
  const [showjoke, setShowjoke] = useState(false)
  const [jokecategory, setJokecategory] = useState("")

  const handleShowJoke=(jokecategory)=>{
    setShowjoke(true)
    setJokecategory(jokecategory)
  }

  return (
    
    <div className="mainDiv">
      {category?.map((jokecategory) => {
        return (
          <div className="four column wide">
            <Card className="cardstyle"  onClick={() => handleShowJoke(jokecategory)}>
                <Card.Body>
                  <Card.Title
                    style={{ overflow: "hidden",fontSize:"30px",color:"darkblue" }}
                    className="cardTitle"
                  >
                    {jokecategory.charAt(0).toUpperCase() + jokecategory.slice(1)}
                  </Card.Title>
                  <Card.Text className="cardText" style={{ overflow: "hidden",color:"blue" }}>
                    Unlimted Jokes On {jokecategory.charAt(0).toUpperCase() + jokecategory.slice(1)}
                  </Card.Text>
                </Card.Body>
              </Card>
          </div>
        );
      })}{" "}
      <JokeModal showjoke={showjoke} setShowjoke={setShowjoke} category={jokecategory}/>
    </div>
  );
}

export default JokeCategory;
