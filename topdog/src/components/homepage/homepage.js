import './homepage.css';
import Header from '../header/header';
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

    return (
        //output something from backend here
        <div className="mainDiv">
            <Header/>
            <div className="imageContainer">
                {images.map((imgURL) => {return <img src={imgURL} height="150" width="150"></img> })}
            </div>
        </div>
        
        
    );
}

export default HomePage;




