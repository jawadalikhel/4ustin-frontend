
export const fetchNearbyPlaces = async (latitude, longitude, selectedQueryFor, cityName) => {
  // try-catch block to handle any potential errors.
    try {
      const response = await fetch(process.env.REACT_APP_BACKEND_URL + '/places/fetchPlaces', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              lat: latitude,
              lon: longitude,
              queryFor: selectedQueryFor,
              cityName: cityName
          })                    
            });
  
      const responseData = await response.json();                
      if(!response.ok){
          throw new Error(responseData.messsage);
      }
  
      return responseData.places
    } catch (error) {
      console.log(error.messsage, "<---- error in apiServices");
    }
  };