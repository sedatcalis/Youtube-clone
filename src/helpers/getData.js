import axios from "axios";

const options = {
  params: { geo: "TR", lang: "tr" },
  headers: {
    "X-RapidAPI-Key": "d901b289e9msh4629810822012a9p11a209jsnf9938023329f",
    "X-RapidAPI-Host": "yt-api.p.rapidapi.com",
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


 
