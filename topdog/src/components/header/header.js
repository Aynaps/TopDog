import './header.css';
import React, { useState , useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import Burger from '../burger/Burger';
import Menu from '../menu/Menu';

export default function Header() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
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
    );
}