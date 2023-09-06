import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [selectedImages, setSelectedImages] = useState([]);

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
    e.target.value = "";
  };

  return (
    <div className="App">
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
            <img src={imgUrl} height="200" width="200" alt="uploaded" />
            <button
              onClick={() =>
                setSelectedImages(
                  selectedImages.filter((p) => {
                    return p !== imgUrl;
                  })
                )
              }
            >
              delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
