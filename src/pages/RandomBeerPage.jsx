import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE_URL = 'https://ih-beers-api2.herokuapp.com/beers'


const RandomBeersPage = () => {

  const [randomBeer, setRandomBeer] = useState([]);

  const navigate = useNavigate();

  useEffect(() => loadRandomBeer(), [])

  const loadRandomBeer = () => {

    axios
      .get(`${API_BASE_URL}/random`)
      .then(({ data }) => setRandomBeer(data))
      .catch(err => console.log(err))
  }

  return (
    <div className="d-inline-flex flex-column justify-content-center align-items-center w-100 p-4">
      <h2>Random Beer</h2>

      {randomBeer && (
        <>
          <img
            src={randomBeer.image_url}
            alt="beer"
            height="300px"
            width="auto"
          />
          <h3>{randomBeer.name}</h3>
          <p>{randomBeer.tagline}</p>
          <p>Attenuation level: {randomBeer.attenuation_level}</p>
          <p>Description: {randomBeer.description}</p>
          <p>Created by: {randomBeer.contributed_by}</p>

          <button
            className="btn btn-primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Back
          </button>
        </>
      )}
    </div>
  );
}

export default RandomBeersPage;
