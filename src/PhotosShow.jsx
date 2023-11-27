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
      <div class="photoinfo">
      <h1>Photo information</h1>
      <p>Name: {props.photo.name}</p>
      <p>URL: {props.photo.image}</p>
      <p>Location: {props.photo.location}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div class="newinfo">
         <div>
           Name: <input class="updateinput" defaultValue="" name="name" type="text" />
         </div>
         <div>
           URL: <input class="updateinput" defaultValue="" name="image" type="text" />
         </div>
         <div>
           Location: <input class="updateinput" defaultValue="" name="location" type="text" />
         </div>
         </div>
         <div class="modalbuttons">
         <button class="updatebutton" type="submit">Update photo</button>
         <button class="destroybutton" onClick={handleClick}>Destroy photo</button>
         </div>
       </form>
       
    </div>
  );
}