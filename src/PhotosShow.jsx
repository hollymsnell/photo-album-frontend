export function PhotosShow(props) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.photo.name}</p>
      <p>Location: {props.photo.location}</p>
      <p>Width: {props.photo.width}</p>
      <p>Height: {props.photo.height}</p>
    </div>
  );
}