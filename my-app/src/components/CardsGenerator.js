import React, { useState, useEffect } from "react";
import mockProductData from "./mockProductData";
import logo from "../assets/images/COPMEBA.png";
import { Link } from "react-router-dom";

function CardsGenerator() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    // Pour l'instant j'utilise mon fichier mockStockData.js qui me permet de simuler l'appel API
    setStockData(mockProductData);
  }, []);

  // Définissez le nombre de colonnes par ligne (4 ou 5, selon votre choix)
  const columnsPerRow = 4;

  return (
    <div className="container-fluid">
      <div className="row">
        {stockData.map((product, index) => (
          <div key={index} className={`col-md-${12 / columnsPerRow}`}>
            <div className="card" style={{ width: "100%", margin: "0.5rem" }}>
              <div>
                <img
                  className="card-img-top"
                  src={logo}
                  alt="Carte des meubles"
                />
              </div>
              <div className="card-body">
                <Link to="/DetailPage">
                  <h5 className="card-title">{product.name}</h5>
                </Link>

                <p className="card-text">{product.description}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{product.dimension}</li>
                <li className="list-group-item">{product.material}</li>
                <li className="list-group-item">{product.color}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardsGenerator;
