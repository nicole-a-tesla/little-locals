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

  const maxLat = Math.max(bounds._sw.lat, bounds._ne.lat);
  const minLat = Math.min(bounds._sw.lat, bounds._ne.lat);

  const maxLng = Math.max(bounds._sw.lng, bounds._ne.lng);
  const minLng = Math.min(bounds._sw.lng, bounds._ne.lng);

  return venues.filter(v => {
    return v.latitude <= maxLat
      && v.latitude >= minLat
      && v.longitude <= maxLng
      && v.longitude >= minLng;
  })
}
