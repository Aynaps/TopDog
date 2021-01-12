import Header from '../header/header';
import Footer from '../footer/footer';
import './about.css';
import React, { useState , useRef } from 'react';
import { useOnClickOutside } from '../../hooks';

export default function AboutPage() {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnClickOutside(node, () => setOpen(false));
    return (
        <div className="AboutPage">
            <Header/>
            <Footer/>
        </div>
    );
}