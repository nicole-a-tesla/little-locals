import { useState, useEffect } from "react";

export default function useVenues({bounds}) {
  const [venues, setVenues] = useState([]);

  useEffect(() => {
    fetch('venues.json')
    .then((response) => response.json())
    .then((json) => setVenues(filterVenues(json, bounds)))
  }, [bounds])

  return venues;
}

function filterVenues(venues, bounds) {
  if (!bounds) {
    return venues;
  }

  return venues.filter(v => {
    return bounds.contains([v.longitude, v.latitude])
  })
}
