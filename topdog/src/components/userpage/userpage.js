import './userpage.css';
import React, { useState , useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import Burger from '../burger/Burger';
import Menu from '../menu/Menu';

export default function UserPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div>
            <header className="userPageHeader">
                <div className="titleContainer">
                    <a href= "/" className="Title">TopDog</a>
                </div>

                <div className="navbar">
                    <img src="dog.png" alt="Doggo"></img>
                        
                    <div className="searchbar-container" ref={node}>
                        <input type="text" placeholder="Search.."></input>
                        <Burger open={open} setOpen={setOpen}/>
                        <Menu open={open} setOpen={setOpen}/>
                    </div>        
                </div>
            </header>
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