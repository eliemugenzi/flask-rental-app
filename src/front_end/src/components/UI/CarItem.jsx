import React, { useState, useEffect } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import "../../styles/car-item.css";

const CarItem = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('/cars', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data from database');
        }
        return response.json();
      })
      .then(data => {
        setCars(data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      {cars.map((car, index) => (
        <Col key={index} lg="4" md="4" sm="6" className="mb-5">
          <div className="car__item">
            <div className="car__img">
              <img src={car.imgUrl} alt={car.carName} className="w-100" />
            </div>

            <div className="car__item-content mt-4">
              <h4 className="section__title text-center">{car.carName}</h4>
              <h6 className="rent__price text-center mt-">
                ${car.rental_price}.00 <span>/Day</span>
              </h6>

              <div className="car__item-info d-flex align-items-center justify-content-between mt-3 mb-4">
                <span className="d-flex align-items-center gap-1">
                  <i className="ri-car-line"></i> {car.model}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <i className="ri-settings-2-line"></i> {car.automatic ? 'Automatic' : 'Manual'}
                </span>
                <span className="d-flex align-items-center gap-1">
                  <i className="ri-timer-flash-line"></i> {car.speed} km/h
                </span>
              </div>

              <button className="w-50 car__item-btn car__btn-rent">
                <Link to={`/cars/${car.carName}`}>Rent</Link>
              </button>

              <button className="w-50 car__item-btn car__btn-details">
                <Link to={`/cars/${car.carName}`}>More</Link>
              </button>
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};

export default CarItem;
