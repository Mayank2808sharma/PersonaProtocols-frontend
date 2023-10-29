import React, { useState } from 'react';
import axios from 'axios';

function FileUploadComponent({ sessionId }) {
  const [file, setFile] = useState(null);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('sessionId', sessionId);

    try {
      await axios.post('http://localhost:5000/upload', formData);
      alert('File Uploaded!');
    } catch (error) {
      console.error('Error uploading file:', error);
      alert('Failed to upload file.');
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Upload</button>
    </div>
  );
}

export default FileUploadComponent;
