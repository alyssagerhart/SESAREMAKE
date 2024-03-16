import { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage, db } from '../config/firebase';
import { doc, setDoc, updateDoc, collection } from 'firebase/firestore';
import useCurrentUser from './currentUser';
import './Upload.css';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const {currentUser} = useCurrentUser();
  const [fileUrl, setFileUrl] = useState(null);
  const onFileChange = (event) => {
    const currentFile = event.target.files?.[0];
    setFile(currentFile);
    setFileName(currentFile ? currentFile.name : '');
  };


  const handleClick = () => {
    if (!file) return;

    const fileRef = ref(storage, `Resumé/${file.name}`);
    const uploadTask = uploadBytesResumable(fileRef, file);

    const saveDownloadURLToDatabase = async (downloadURL) => {
      try {
        if (!downloadURL) {
          console.error('Download URL is undefined or null.');
          return;
        }
        const userDocRef = doc(collection(db, 'users'), currentUser.uid);
        await updateDoc(userDocRef, { downloadURL });
        console.log('Download URL saved to the database successfully.');
      } catch (error) {
        console.error('Error saving download URL to the database:', error);
      }
    };
    
    
    


    uploadTask.on(
      'state_changed',
      (snapshot) => {
        let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload progress: ${progress}%`);
      },
      (error) => {
        console.error('Error during upload:', error);
      },
      () => {
        console.log('Upload success!');
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('Download URL:', downloadURL);
          const userDocRef = doc(collection(db, 'users'), currentUser.uid);
          setFileUrl(downloadURL);
          saveDownloadURLToDatabase(downloadURL);
          console.log('Download URL:', downloadURL);
          console.log('currentUser:', currentUser);
          console.log('currentUser.uid:', currentUser ? currentUser.uid : 'N/A');

           // Call the onFileUpload prop with the file name and download URL
          //onFileUpload(file.name, downloadURL);

          if (!userDocRef || !downloadURL) {
            console.error('User reference or download URL is undefined.');
            return;
          }

          // Clear the file state and file name after successful upload
          setFile(null);
          setFileName('');
  
        });
        
         
       
      }
    );

    
  };

  return (
    <div className="box">
      <label htmlFor="file-input" className="label" id="file-input-label">
        {fileName || 'Choose File'}
      </label>
      <input type="file" id="file-input" onChange={onFileChange} />
      <br />
      <button onClick={handleClick}>Upload</button>
    </div>
  );
};

export default UploadResume;
