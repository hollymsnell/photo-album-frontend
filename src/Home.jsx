import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";
import { Modal } from "./Modal";

  export function Home() {
    const [photos, setPhotos] = useState([]);

       const handleIndexPhotos = () => {
         console.log("handleIndexPhotos");
         axios.get("http://localhost:3000/photos.json").then((response) => {
           console.log(response.data);
           setPhotos(response.data);
         });
       };

       const handleCreatePhoto = (params, successCallback) => {
            console.log("handleCreatePhoto", params);
             axios.post("http://localhost:3000/photos.json", params).then((response) => {
               setPhotos([...photos, response.data]);
               successCallback();
             });
           };
    
       useEffect(handleIndexPhotos, []);

    return (
      <div>
        <PhotosNew onCreatePhoto={handleCreatePhoto}/>
       <PhotosIndex photos={photos} />
       <Modal show={true}>
        <h1>test</h1>
       </Modal>
      </div>
    );
  }