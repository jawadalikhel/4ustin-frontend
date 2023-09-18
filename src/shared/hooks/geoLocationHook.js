// useGeolocation.js (in a separate file)
import { useState, useEffect } from 'react';

const useGeolocation = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getUserGeoLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude
            setLocation({ latitude, longitude });
          },
          error => {
            setError(error);
          }
        );
      } else {
        setError(new Error('Geolocation not supported'));
      }
    };

    getUserGeoLocation();
  }, []);

  return { location, error };
};

export default useGeolocation;
