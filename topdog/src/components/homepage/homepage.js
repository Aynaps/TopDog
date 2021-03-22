import './homepage.css';
import axios from 'axios';
import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';

function HomePage() {
    //generate homefeed(images) on mount
    
    const [images, addImage] = useState([]);

    useEffect(() => {
        const storageRef = firebase.storage().ref();

        storageRef.listAll().then(bucket => {
            bucket.items.forEach(img => {
                img.getDownloadURL()
                .then(url => {addImage(oldArray => [...oldArray, url])})
                .catch(err => console.log(err));
            })
        });
    }, [])


    console.log(images)
    var title = <h2>HomePage</h2>
    //connect to firebase storage
    //const asdf = GetImagesFromDB();

    //console.log(asdf)

    return (
        //output something from backend here
        <div className="imageContainer">
            {images.map((imgURL) => {return <img src={imgURL}></img> })}
        </div>
        
    );
}

export default HomePage;



