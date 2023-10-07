const FnOnChangeImage = (event, setImage) =>{

    if (event.target.files && event.target.files[0]) {
        setImage(URL.createObjectURL(event.target.files[0]));
    }
}

export default FnOnChangeImage