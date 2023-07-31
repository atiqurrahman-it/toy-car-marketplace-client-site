import { useEffect, useState } from "react";
import img1 from "../../../assets/Home/Slider/1.jpg";
import GalleryCard from "./GalleryCard";

const Gallery = () => {
  const [galleries,setGallery]=useState([])

  useEffect(()=>{
    fetch(`https://toy-car-marketplace-server.vercel.app/gallery`)
    .then(res=>res.json())
    .then(data=>{
      setGallery(data)
      console.log(data)
    })

  },[])
  return (
    <div>
      <div className="text-center my-10 ">
        <h1 className="text-5xl text-bold ">Gallery </h1>
      </div>

      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

        {
          galleries.map(gallery=> <GalleryCard gallery={gallery} key={gallery._id}></GalleryCard>)
        }
       

      </div>
    </div>
  );
};

export default Gallery;
