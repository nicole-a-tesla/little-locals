import { useState, useEffect } from "react";

export default function useVenues() {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch('venues.json')
    .then((response) => response.json())
    .then((json) => setVenues(json))
  }, [])

  return venues;
}
