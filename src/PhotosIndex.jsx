export function PhotosIndex(props) {
  return (
    <div >
      <h1>All photos</h1>
      {props.photos.map((photo) => (
        <div class="card" key={photo.id}>
           <h2>{photo.name}</h2>
           <img class="img" src={photo.image} />
           <p>Width: {photo.width}</p>
           <p>Height: {photo.height}</p>
           <button onClick={() => props.onShowPhoto(photo)}>More info</button>
         </div>
       ))}
    </div>
  );
}