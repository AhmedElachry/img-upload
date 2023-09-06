// Assuming you have an input element with id "fileInput" to select the file
const fileInput = document.getElementById('fileInput');

// Add an event listener to handle the file selection
fileInput.addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
  const files = event.target.files;

  // Ensure that a file was selected
  if (files.length === 0) {
    console.log('No file selected');
    return;
  }

  const file = files[0];
  const reader = new FileReader();

  // Set up an event listener to handle when the file is loaded
  reader.onload = function(event) {
    const fileContent = event.target.result;

    // Do something with the file content
    console.log(fileContent);
  };

  // Start reading the file as text
  reader.readAsText(file);
}