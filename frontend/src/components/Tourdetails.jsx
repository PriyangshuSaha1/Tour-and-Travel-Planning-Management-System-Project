import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const Tourdetails = () => {
  const { id } = useParams();

  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);

  const getTourDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5600/api/tours/${id}`);

      console.log("Single Tour:", res.data);

      // Handle different response formats
      if (res.data && res.data._id) {
        setTour(res.data);
      } else if (res.data && res.data.tours) {
        setTour(res.data.tours);
      } else if (res.data && res.data.tour) {
        setTour(res.data.tour);
      } else {
        setTour(null);
      }
    } catch (err) {
      console.log(err);
      setTour(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getTourDetails();
  }, [id]);

  // Loading Screen
  if (loading) {
    return (
      <h1 className="text-center mt-10 text-2xl font-bold">
        Loading...
      </h1>
    );
  }

  // Tour Not Found
  if (!tour) {
    return (
      <div className="text-center mt-10">
        <h1 className="text-2xl text-red-600 font-bold">
          Tour Not Found
        </h1>

        <Link
          to="/view"
          className="inline-block mt-4 bg-blue-700 text-white px-4 py-2 rounded"
        >
          Back
        </Link>
      </div>
    );
  }

  // Tour Details
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">

        <h1 className="text-3xl font-bold text-blue-700 text-center mb-6">
          Tour Details
        </h1>

        <h2 className="text-xl font-bold mb-4">
          Title: {tour.title}
        </h2>

        <p className="mb-3">
          <strong>Description:</strong> {tour.description}
        </p>

        <p className="text-green-700 font-bold text-xl mb-5">
          Price: ₹ {tour.price}
        </p>

        <Link
          to="/view"
          className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800"
        >
          Back
        </Link>

      </div>
    </div>
  );
};

export default Tourdetails;





















// import React,{useState,useEffect} from 'react'
// import axios from 'axios';
// import {Link , useParams} from "react-router-dom";


// const Tourdetails = () => {

//     const {id} = useParams();
//     const [tour,setTour] = useState(null);

//     const getTourDetails = async () => {
//         const res = await axios.get(`http://localhost:5600/api/tours/${id}`);
//         setTour(res.data.tours);
//     }

//     useEffect(() => {
//         getTourDetails();
//     },[id]);

//      if (!tour) {
//         return <h2>Loading...</h2>;
//     }

//   return <>
//         <div>
//             <h1>Tour Details</h1>
//             <h3>Title: {tour.title}</h3>
//             <p>Description: {tour.description}</p>
//             <p>Price: {tour.price}</p>
//         </div>

//   </>
// }

// export default Tourdetails