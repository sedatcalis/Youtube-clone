import { createContext, useEffect, useState } from "react";
import { categories } from "../constants";
import { getData } from "../helpers/getData";

export const YoutubeContext = createContext();

// context'de tutulan verileri uygulamaya aktarır
export function YoutubeProvider({ children }) {
  // seçili kategoriyi tutar
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  //   videolaro tutar
  const [videos, setVideos] = useState(null);
  //   console.log(selectedCategory);

  useEffect(() => {
    // api den videolar alınır
    if (
      selectedCategory.type === "home" ||
      selectedCategory.type === "trending"
    ) {
      // yardımcı fonksiyonu kullanıp api istek atma
      getData(`/${selectedCategory.type}`).then((res) => setVideos(res.data.data))
    }

    // tüm kategoriler için istek atma
    if (selectedCategory.type === "category") {
      getData(`/search?query=${selectedCategory.name}&type=video`).then((res) =>
        setVideos(res.data.data)
      );
    }
  }, [selectedCategory]);

  return (
    <YoutubeContext.Provider
      value={{ selectedCategory, setSelectedCategory, videos }}
    >
      {children}
    </YoutubeContext.Provider>
  );
}
