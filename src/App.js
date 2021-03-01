import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Reviews from './Reviews.js';

function App() {

  // const reviews = [
  //   {
  //     id: "1",
  //     title: "Review 1",
  //     score: 3,
  //     description: "Description for review 1",
  //     dateCreated: "2021-01-05 17:41",
  //     reviewerClientId: "123",
  //     reviewedProductId: "456"
  //   },
  //   {
  //     id: "2",
  //     title: "Review 2",
  //     score: 1,
  //     description: "Description for review 2",
  //     dateCreated: "2021-01-05 18:41",
  //     reviewerClientId: "789",
  //     reviewedProductId: "1011"
  //   }
  // ];

  return (
    <div>
      <h1>Pet store</h1>
      <Reviews />
    </div>
  );
}

export default App;
