// LandingPage.js
import React from 'react';

import Weather from '../components/Weather';
import Box from "../../shared/components/UIElements/Box";
import "./styles/LandingPage.css";

import ImageToBox from "../components/images/atx2.jpeg";
import Header from '../components/Header';
import SubmitPictures from '../../shared/components/UIElements/FullScreenWeightBox';

const DUMMY_DATA = [
  {
    id: "01",
    image: ImageToBox,
    title: "PLACES TO EAT",
    description: "From Fine Dining To Food Trucks",
    url: "eat"
  },
  {
    id: "02",
    image: ImageToBox,
    title: "SHOP LOCAL",
    description: "We're Called Weird For a reason",
    url: "shop"
  },
  {
    id: "03",
    image: ImageToBox,
    title: "NIGHTLIFE",
    description: "your Best Night In Austin",
    url: "nightlife"
  },
  {
    id: "04",
    image: ImageToBox,
    title: "OUTDOORS",
    description: "From Bats to Water",
    url: "outdoors"
  },
];

const submitPictures = {
  id: "submitPictures01",
  image: ImageToBox,
  title: "SUBMIT YOUR PICTURES",
  description: "Share the sights and sounds of your experience!",
  url: "submit-pictures"
}

const austinite = {
  id: "austinite01",
  image: ImageToBox,
  title: "VISIT LIKE AN AUSTINITE",
  url: "austinite",
  boxStyles: {
    height: "15vw"
  }
}

const thingsToDo = {
  id: "thingsTodo",
  image: ImageToBox,
  title: "THINGS TO DO",
  url: "thingsToDo",
  boxStyles: {
    height: "15vw"
  }
}

const news = {
  id: "news01",
  // image: ImageToBox,
  title: "NEWS",
  url: "news",
  boxStyles: {
    height: "50px"
  }
}

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Header />
      <SubmitPictures data={submitPictures}/>
      <Weather />
      <div className="box-container">
        {
          DUMMY_DATA.map((item) =>{
            return <Box key={item.id} id={item.id} imageSrc={item.image} title={item.title} description={item.description} url={item.url}/>
          })
        }
      </div>
      <SubmitPictures data={austinite}/>
      <SubmitPictures data={thingsToDo}/>
      <SubmitPictures data={news}/>
      
    </div>
  );
}

export default LandingPage;
