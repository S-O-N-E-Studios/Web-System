const axios = require('axios');

/**
 * Geocode an address using Google Maps Geocoding API
 * @param {string} address - Address to geocode
 * @returns {object} Geocoded location data
 */
const geocodeAddress = async (address) => {
  try {
    const response = await axios.get('https://maps.googleapis.com/maps/api/geocode/json', {
      params: {
        address,
        key: process.env.GOOGLE_MAPS_API_KEY
      }
    });

    if (response.data.results.length === 0) {
      return null;
    }

    const result = response.data.results[0];
    const { lat, lng } = result.geometry.location;

    // Extract address components
    const addressComponents = result.address_components;
    const city =
      addressComponents.find((c) => c.types.includes('locality'))?.long_name || '';
    const country =
      addressComponents.find((c) => c.types.includes('country'))?.long_name || '';

    return {
      type: 'Point',
      coordinates: [lng, lat],
      formattedAddress: result.formatted_address,
      city,
      country
    };
  } catch (error) {
    console.error('Geocoding error:', error.message);
    return null;
  }
};

module.exports = {
  geocodeAddress
};
