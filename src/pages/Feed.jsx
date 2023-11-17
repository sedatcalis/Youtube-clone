import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { YoutubeContext } from "../context/YoutubeContext";
import Loading from "../components/Loading";
import VideoCard from "../components/VideoCard";

const Feed = () => {
  const { videos } = useContext(YoutubeContext);
  // console.log(videos);
  return (
    <div className="flex gap-3">
      <Sidebar />
      <div className="videos">
        {/* videolar yoksa yükleniyor
        *videolar varsa videoları dön 
        *tipi video olanı her biri için ekrana kart bas
         */}
        {!videos ? (
          <Loading type={"video"}/>
        ) : (
          videos.map((item) => 
           ( item.type === "video" && <VideoCard video={item} key={item.videoId} />)
          )
        )}
      </div>
    </div>
  );
};

export default Feed;
