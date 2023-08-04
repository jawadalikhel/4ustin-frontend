// LandingPage.js
import React from 'react';

import Weather from '../components/Weather';
import Box from "../../shared/components/UIElements/Box";
import "./styles/LandingPage.css";

import ImageToBox from "../components/images/atx2.jpeg";
import Header from '../components/Header';
import SubmitPictures from '../components/SubmitPictures';

const DUMMY_DATA = [
  {
    id: "01",
    image: ImageToBox,
    title: "PLACES TO EAT",
    description: "From Fine Dining To Food Trucks"
  },
  {
    id: "02",
    image: ImageToBox,
    title: "SHOP LOCAL",
    description: "We're Called Weird For a reason"
  },
  {
    id: "03",
    image: ImageToBox,
    title: "NIGHTLIFE",
    description: "your Best Night In Austin"
  },
  {
    id: "04",
    image: ImageToBox,
    title: "OUTDOORS",
    description: "From Bats to Water"
  },
]

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Header />
      <SubmitPictures />
      <Weather />
      <div className="box-container">
        {
          DUMMY_DATA.map((item) =>{
            return <Box key={item.id} id={item.id} imageSrc={item.image} title={item.title} description={item.description} />
          })
        }
      </div>
    </div>
  );
}

export default LandingPage;
