import './userpage.css';
import Header from '../header/header';
import React, { useState , useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import firebase from "firebase/app";
import 'firebase/firestore';

// Get all posts from specified user
async function getPostsFromUsers(user) {
    const getAllPosts = await firebase.firestore().collection('/posts').get();

    // list all images from Posts
    const images = [];

    getAllPosts.forEach(element => {
        if (element.data().postedBy === user) {
            console.log(element.data().postedBy);  // user
            var imgID = element.data().imageID;
            console.log(imgID);  // users images 

            images.push(imgID); // all users images
        }
    });
    return images;
    // return getAllPosts.docs.map(doc => doc.data());
}

export default function UserPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));

    getPostsFromUsers('sshama4')
    .then((value) => console.log(value))    
    .catch(e => {
      console.log('ERROR: ' + e.message);
    });

    return (
        <div className="maindiv">
            <Header/>
            <div className="userpage">
                <div className="userpagebody">

                    <div className="userInfo">
                        <img src="stockphoto.jpg" height="150px" width="150px" margin="10px"></img>
                            <p className="name">Name</p>
                            <p className="username">@username</p>
                        <p>bio</p>
                        <p> <b>#num</b> posts  <b>#num</b> followers  <b>#num</b> following</p>
                    </div>

                    <div className="userPosts">
                        <p>stuff</p>
                        <p>more stuff</p>
                        <p>this will fill automatically with the required size it needs</p>
                        <p>im showing it to you this way because we dont have title cards for dog photos yet</p>
                    </div>
                    
                </div>
            </div>           
        </div>
    );
}