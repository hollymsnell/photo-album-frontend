export function PhotosShow(props) {

  const handleSubmit = (event) => {
        event.preventDefault();
        const params = new FormData(event.target);
         props.onUpdatePhoto(props.photo.id, params, () => event.target.reset());
       };

  const handleClick = () => {
    props.onDestroyPhoto(props.photo);
  };

  return (
    <div>
      <h1>Photo information</h1>
      <p>Name: {props.photo.name}</p>
      <p>URL: {props.photo.image}</p>
      <p>Location: {props.photo.location}</p>
      <form onSubmit={handleSubmit}>
         <div>
           Name: <input defaultValue="props.photo.name" name="name" type="text" />
         </div>
         <div>
           URL: <input defaultValue="props.photo.image" name="image" type="text" />
         </div>
         <div>
           Location: <input defaultValue="props.photo.location" name="location" type="text" />
         </div>
         <button class="updatebutton" type="submit">Update photo</button>
       </form>
       <button class="destroybutton" onClick={handleClick}>Destroy photo</button>
    </div>
  );
}