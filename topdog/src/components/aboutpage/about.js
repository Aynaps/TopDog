import Header from '../header/header';
import './about.css';
import React, { useState , useRef } from 'react';
import { useOnClickOutside } from '../../hooks';
import Burger from '../burger/Burger';
import Menu from '../menu/Menu';

export default function AboutPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <Header/>

    );
}