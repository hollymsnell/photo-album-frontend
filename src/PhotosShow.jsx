export function PhotosShow(props) {
  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.photo.name}</p>
      <p>Url: {props.photo.image}</p>
      <p>Width: {props.photo.width}</p>
      <p>Height: {props.photo.height}</p>
    </div>
  );
}