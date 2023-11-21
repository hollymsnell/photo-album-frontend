export function PhotosNew(props) {

     const handleSubmit = (event) => {
       event.preventDefault();
       const params = new FormData(event.target);
       props.onCreatePhoto(params, () => event.target.reset());
     };

  return (
    <div class="newphoto">
      <h1>New Photo</h1>
      <form onSubmit={handleSubmit}>
        <div >
          Name: <input class="newinput" name="name" type="text" />
        </div>
        <div>
          Location: <input class="newinput" name="location" type="text" />
        </div>
        <div>
          Url: <input class="newinput" name="image" type="file" />
        </div>
        <div>
          Width: <input class="newinput" name="width" type="text" />
        </div>
        <div>
          Height: <input class="newinput" name="height" type="text" />
        </div>
        <button class="createphoto" type="submit">Create photo</button>
      </form>
    </div>
  );
}