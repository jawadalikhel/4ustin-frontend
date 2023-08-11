import axios from 'axios';
const API_KEY = "AIzaSyDFbEN9gh-kB68Qz8hgM_YXU3m0XX84hkk";

export const fetchNearbyPlaces = async (latitude, longitude, selectedQueryFor, cityName) => {
  console.log(selectedQueryFor, "<------ shop")
// try-catch block to handle any potential errors.
  try {
    // The "await" keyword indicates that the code will wait for the response before proceeding.
    // const response = await axios.get(`/nearbysearch/json?keyword=${queryForPlace}&location=${latitude},${longitude}&radius=2000&key=${API_KEY}`);
    const response = await axios.get(`textsearch/json?location=${latitude}%2C${longitude}&query=local%20${selectedQueryFor}%20in%20${cityName}&radius=5000&key=${API_KEY}`)
    // Using the "reduce" function to process each result in the API response and accumulate data.
    // filteredPlaces in reduce represents the accumulator, which is the value that is gradually built up as the function
    // iterates through the array
      const placesData = response.data.results.reduce((filteredPlaces, place) =>{
        if(place.rating >= 3.5 && place.user_ratings_total >= 5){
            // Extracting the photo reference from the first photo (if available) for the place.
            const photo = place.photos && place.photos.length > 0 ? place.photos[0].photo_reference : null;
            filteredPlaces.push({
                id: place.place_id,
                name: place.name,
                photo,
                rating: place.rating,
                userRatingTotal: place.user_ratings_total,
                address: place.formatted_address,
                location: place.geometry.location
                });
        }
        return filteredPlaces;
    },[]); // The initial value for the "reduce" function is an empty array.
    return placesData;
  } catch (error) {
    throw error;
  }
};