export function PhotosShow(props) {

  const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
         props.onUpdatePhoto(props.photo.id, params, () => event.target.reset());
       };

  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.photo.name}</p>
      <p>Location: {props.photo.location}</p>
      <p>Width: {props.photo.width}</p>
      <p>Height: {props.photo.height}</p>
      <form onSubmit={handleSubmit}>
         <div>
           Name: <input defaultValue="props.photo.name" name="name" type="text" />
         </div>
         <div>
           Location: <input defaultValue="props.photo.location" name="location" type="text" />
         </div>
         <div>
           Width: <input defaultValue="props.photo.width" name="width" type="text" />
         </div>
         <div>
           Height: <input defaultValue="props.photo.height" name="height" type="text" />
         </div>
         <button type="submit">Update photo</button>
       </form>
    </div>
  );
}