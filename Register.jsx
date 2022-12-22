import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { auth, storage  } from "../firebase";
import React, { useState } from "react";
import Foldericon from "../Assets/foldericon.jpg";
import "../style.scss"

const Register = () => {
  const [err,setErr] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];  


try{
  const res =  createUserWithEmailAndPassword(auth, email, password)


const storageRef = ref(storage, displayName);

const uploadTask = uploadBytesResumable(storageRef, file);


uploadTask.on(
  (error) => {
    setErr(true)
  }, 
  () => {
  
    getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
      await updateProfile(res.user,{
        displayName,
        photoURL: downloadURL,
      })
    });
  }
);
}catch(err){
  setErr(true);
}
  }
  

  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Prashant malge</span>
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Display name" />
          <input type="email" placeholder="Enter email id" />
          <input type="password" placeholder="Enter password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={Foldericon} alt="" />
            <span>Add File</span>
          </label>
          <button>Sign up</button>
          {err &&<span>something went wrong</span>}
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};
export default Register;