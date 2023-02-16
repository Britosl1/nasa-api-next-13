export const getApod = async () => {
  const date = new Date().toISOString().split("T")[0];
  const response = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.API_KEY}&date=${date}`,
    { next: { revalidate: 60 * 60 * 24 } }
  );
  const data = await response.json();

  return data;
};

export const getMarsRoverPhotos = async (camera: string) => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&camera=${camera}&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 * 60 * 12 } }
  );

  const data = await response.json();

  return data;
};

export const getAllMarsRoverPhotos = async () => {
  const response = await fetch(
    `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=${process.env.API_KEY}`,
    { next: { revalidate: 60 * 60 * 12 } }
  );

  const data = await response.json();

  return data;
};
