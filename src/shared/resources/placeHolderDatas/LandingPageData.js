import ImageToBox from "../images/atx2.jpeg";
import PlaceToEatImage from "../images/eat.jpeg";
import shopLocalImage from "../images/shop.jpeg";
import nightlifeImage from "../images/nightlife.jpeg";
import outdoorImage from "../images/outdoor.jpeg";

export const LANDINGPAGE_4BOXES_SECTION = [
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
  
  export const LANDINGPAGE_FULL_WEIGHT_SELECTION = [
    {
      id: "thingsTodo",
      image: ImageToBox,
      title: "THINGS TO DO",
      url: "thingsToDo",
      boxStyles: {
        height: "auto"
      }
    },
    {
      id: "austinite",
      image: ImageToBox,
      title: "VISIT LIKE AN AUSTINITE",
      url: "visitLikeAustinite",
      boxStyles: {
        height: "auto"
      }
    },
    {
      id: "submitPictures",
      image: ImageToBox,
      title: "SUBMIT YOUR PICTURES",
      description: "Share the sights and sounds of your experience!",
      url: "submitPictures"
    },
    {
      id: "news",
      title: "NEWS",
      url: "news",
      boxStyles: {
        height: "auto"
      }
    }
  ]