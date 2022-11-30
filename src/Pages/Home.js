import React, {useState, useEffect} from "react";
import '../Component/Home.css';
import axios from "axios";

export default function Home(){
    const [photos, setPhotos] = useState([]);
    
    const key = '31657769-cc724a3f600ddb772dcd00e99';
    // const keyword = 'happy';
    const getPhotos = async() => {

      try {
        let response = await axios({ 
          method: 'GET', 
                // 'auth-token': process.env.REACT_APP_API_KEY
          url: `https://pixabay.com/api/?key=${key}`
          });
      
        setPhotos(response.data.hits)
      }catch (e) {
      console.log(e.message)}
    }
      useEffect(() => {
            // 'auth-token': process.env.REACT_APP_API_KEY
        getPhotos();
            });
          
            
            // photos.map((gambar, index) => {
      console.log(photos)
      return (
        <>
          {photos.map((gambar, index) => {
            return (
              // <div className="container" key={index}>
                <div className="card" key={index}>
                  <div className="img">
                    <img src={gambar.previewURL}/>
                  </div>
                  <br />
                  <br />
                  <div className="nama-gambar"><b>{gambar.user}</b></div>
                  <br />
                  <div className="tag">{gambar.tags}</div>
                  {/* <br /> */}
                  <div className="ket">
                    <div className="ket1">Likes : {gambar.likes}</div>
                    <div className="ket2">Views : {gambar.views}</div>  
                  </div>
                  <div className="type">{gambar.type}</div> 
                  <br />
                </div>
              // </div>
            );
          })}
        </>
      );
      }
