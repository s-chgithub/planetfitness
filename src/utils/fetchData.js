export const exerciseOptions  = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': 'Your api key here',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': 'Your api key here',
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
  };






  export const fetchData = async (url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
};
// export const fetchData = async (url,exerciseOptions) => {
//     const response = await axios.request(url,exerciseOptions);
//     const data= await response.json();
    
//     return data;
// };