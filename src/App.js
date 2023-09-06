import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedImages, setSelectedImages] = useState([]);
  const [imgPreview, setImgPreview] = useState("");

  useEffect(() => {
    setSelectedImages([
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFYh53xY9yR8cu_8EJPtI6xf9vj9GCL-sNsw&usqp=CAU",
    ]);
  }, []);

  const onSelectFiles = (e) => {
    const selectedFiles = e.target.files;
    const selectedFilesArray = Array.from(selectedFiles);
    const imagesUrlsArray = selectedFilesArray.map((file) => {
      return URL.createObjectURL(file);
    });
    setSelectedImages((previousImages) =>
      previousImages.concat(imagesUrlsArray)
    );
    console.log(selectedFiles);
    console.log(selectedFilesArray);
    console.log(imagesUrlsArray);
  };

  const handleDelete = (imgUrl) => {
    URL.revokeObjectURL(imgUrl);
    setSelectedImages(
      selectedImages.filter((imgToDelete) => {
        return imgToDelete !== imgUrl;
      })
    );
    imgPreview === imgUrl && setImgPreview("");
  };

  return (
    <div className="App">
      <div className="uploader">
        <section>
          <label>
            + Add Images
            <br />
            <input
              type="file"
              name="images"
              onChange={onSelectFiles}
              multiple
              accept="image/png , image/jpeg"
            />
          </label>
        </section>
        <br />
        <div className="images">
          {selectedImages.map((imgUrl) => (
            <div key={imgUrl} className="image">
              <img src={imgUrl} height="100" width="100" alt="uploaded" />
              <button onClick={() => handleDelete(imgUrl)}>delete</button>
              <div className="middle">
                <div className="text" onClick={() => setImgPreview(imgUrl)}>
                  preview
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="image-previewer">
        {imgPreview && <img src={imgPreview} alt="imgPreview" width={"50%"} />}
      </div>
    </div>
  );
}

export default App;
