export function PhotosIndex(props) {
  return (
    <div >
      <h1>All photos</h1>
      <div class="row">
      {props.photos.map((photo) => (
        <div class="card" key={photo.id}>
           <h2>{photo.name}</h2>
           <img class="img" src={photo.image} />
           <p>{photo.location}</p>
           <button class="moreinfo" onClick={() => props.onShowPhoto(photo)}>More info</button>
         </div>
       ))}
       </div>
    </div>
  );
}