export const exerciseOptions  = {
  method: 'GET',
  
  headers: {
    'X-RapidAPI-Key': '2b5c5aeb41msh45962c379a0016cp1dcb92jsn3fc6c076dceb',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };

  export const youtubeOptions = {
    method: 'GET',
    
    headers: {
      'X-RapidAPI-Key': '376d7b9e28msh83e91cc8a0e26f5p1def93jsn48c504a10390',
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