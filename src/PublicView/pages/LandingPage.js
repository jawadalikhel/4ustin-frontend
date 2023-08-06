// LandingPage.js
import React from 'react';

import Weather from '../components/Weather';
import Box from "../../shared/components/UIElements/Box";
import "./styles/LandingPage.css";

import ImageToBox from "../components/images/atx2.jpeg";
import PlaceToEatImage from "../components/images/eat.jpeg";
import shopLocalImage from "../components/images/shop.jpeg";
import nightlifeImage from "../components/images/nightlife.jpeg";
import outdoorImage from "../components/images/outdoor.jpeg";


import Header from '../components/Header';
import FullScreenWeightBox from '../../shared/components/UIElements/FullScreenWeightBox';

const DUMMY_DATA = [
  {
    id: "01",
    image: PlaceToEatImage,
    title: "PLACES TO EAT",
    description: "From Fine Dining To Food Trucks",
    url: "eat"
  },
  {
    id: "02",
    image: shopLocalImage,
    title: "SHOP LOCAL",
    description: "We're Called Weird For a reason",
    url: "shop"
  },
  {
    id: "03",
    image: nightlifeImage,
    title: "NIGHTLIFE",
    description: "your Best Night In Austin",
    url: "nightlife"
  },
  {
    id: "04",
    image: outdoorImage,
    title: "OUTDOORS",
    description: "From Bats to Water",
    url: "outdoors"
  },
];

const landingPageSectionBoxes = [
  {
    id: "submitPictures",
    image: ImageToBox,
    title: "SUBMIT YOUR PICTURES",
    description: "Share the sights and sounds of your experience!",
    url: "submit-pictures"
  },
  {
    id: "austinite",
    image: ImageToBox,
    title: "VISIT LIKE AN AUSTINITE",
    url: "austinite",
    boxStyles: {
      height: "15vw"
    }
  },
  {
    id: "thingsTodo",
    image: ImageToBox,
    title: "THINGS TO DO",
    url: "thingsToDo",
    boxStyles: {
      height: "15vw"
    }
  },
  {
    id: "news",
    title: "NEWS",
    url: "news",
    boxStyles: {
      height: "50px"
    }
  }
]

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Header />
      <Weather />
      <div className="box-container">
        {
          DUMMY_DATA.map((item) =>{
            return <Box key={item.id} id={item.id} imageSrc={item.image} title={item.title} description={item.description} url={item.url}/>
          })
        }
      </div>
      {
        landingPageSectionBoxes.map((section) =>{
          return (
            <FullScreenWeightBox key={section.id} url={section.url} image={section.image} boxStyles={section.boxStyles ? section.boxStyles : null}>
              <h1>{section.title}</h1>
              <p>{section.description ? section.description : null}</p>
            </FullScreenWeightBox>
          )
        })
      }
    </div>
  );
}

export default LandingPage;
