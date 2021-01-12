import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
        <a href="/">Home</a>
        <a href="/userprofile">Profile</a>
        <a href="/">Settings</a>
        <a href="/about">About TopDog</a>
        <a href="/">Contact Us</a>
        <a href="/">Logout</a>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;