// LandingPage.js
import React from 'react';

import Weather from '../components/Weather';
import Box from "../../shared/components/UIElements/Box";

import Header from '../components/Header';
import FullScreenWeightBox from '../../shared/components/UIElements/FullScreenWeightBox';

import {LANDINGPAGE_4BOXES_SECTION, LANDINGPAGE_FULL_WEIGHT_SELECTION} from "../../shared/resources/placeHolderDatas/LandingPageData";

import "./Styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className='landingPage'>
      <Header />
      <Weather />
      <div className="box-container">
        {
          LANDINGPAGE_4BOXES_SECTION.map((item) =>{
            return <Box key={item.id} id={item.id} imageSrc={item.image} title={item.title} description={item.description} url={item.url}/>
          })
        }
      </div>
      {
        LANDINGPAGE_FULL_WEIGHT_SELECTION.map((section) =>{
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
