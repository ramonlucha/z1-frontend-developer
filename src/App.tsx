import React, { useState } from "react";
import MainCard from "./components/maincard/MainCard";
import TakingPhotoCard from "./components/takingphotocard/TakingPhotoCard";



const App = () => {
   const [takingPicture, setTakinPicture] = useState(false);
   const show =
    takingPicture == false ? (
      <MainCard clickHandler={(click)=>setTakinPicture(click)}></MainCard>
    ) : (
      <TakingPhotoCard clickHandler={(click)=>setTakinPicture(click)}></TakingPhotoCard>
    );
  return show;
};

export default App;
