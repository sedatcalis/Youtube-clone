import axios from "axios";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    'X-RapidAPI-Key': 'a033fd8e7cmshc29f8770f4efad5p1909a3jsn46fcdc574cfc',
    'X-RapidAPI-Host': 'yt-api.p.rapidapi.com'
  },
};
axios.defaults.baseURL = "https://yt-api.p.rapidapi.com";

// veridğimiz url'e istek atıp
// geriye verileri döndüren yardımıxcı fonk
export const getData = async (url) => {
  try {
    const response = await axios.get(url, options);
    return response;
  } catch (err) {
    console.log("Verileri çekerken hata oluştu");
  }
};


 
