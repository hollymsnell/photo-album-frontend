import axios from "axios";
import { useState, useEffect } from "react";
import { PhotosIndex } from "./PhotosIndex";
import { PhotosNew } from "./PhotosNew";
import { PhotosShow } from "./PhotosShow";
import { Modal } from "./Modal";

  export function Home() {
    const [photos, setPhotos] = useState([]);
    const [isPhotosShowVisible, setIsPhotosShowVisible] = useState(false);
    const [currentPhoto, setCurrentPhoto] = useState({});


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

        const handleShowPhoto = (photo) => {
                 console.log("handleShowPhoto", photo);
                 setIsPhotosShowVisible(true);
                 setCurrentPhoto(photo);
               };

        const handleUpdatePhoto = (id, params, successCallback) => {
            console.log("handleUpdatePhoto", params);
            axios.patch(`http://localhost:3000/photos/${id}.json`, params).then((response) => {
                setPhotos(
                  photos.map((photo) => {
                    if (photo.id === response.data.id) {
                      return response.data;
                    } else {
                      return photo;
                    }
                  })
                 );
                successCallback();
                handleClose();
              });
            };
            
        const handleClose = () => {
                 console.log("handleClose");
                 setIsPhotosShowVisible(false);
               };

        const handleDestroyPhoto = (photo) => {
           console.log("handleDestroyPhoto", photo);
           axios.delete(`http://localhost:3000/photos/${photo.id}.json`).then((response) => {
                setPhotos(photos.filter((p) => p.id !== photo.id));
                handleClose();
              });
             };
    
       useEffect(handleIndexPhotos, []);

    return (
      <div>
        <PhotosNew onCreatePhoto={handleCreatePhoto}/>
       <PhotosIndex photos={photos} onShowPhoto={handleShowPhoto} />
       <Modal show={isPhotosShowVisible} onClose={handleClose}>
       <PhotosShow photo={currentPhoto} onUpdatePhoto={handleUpdatePhoto} onDestroyPhoto={handleDestroyPhoto}/>
       </Modal>
      </div>
    );
  }