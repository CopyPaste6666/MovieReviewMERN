import  React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsFacebook, BsLinkedin, BsTwitter, BsStackOverflow, BsGoogle, BsGithub, BsYoutube } from "react-icons/bs";
import './style.css';
const  ContactContainer = ()=>{
    const myData = [
        {name:'Facebook', link:'#', text:'Follow to my facebook.'},
        {name:'Linkedin', link:'#', text:'Follow to my linkedin.'},
        {name:'Twitter', link:'#', text:'Follow to my twitter.'},
        {name:'StackOverFlow', link:'#', text:'Check out to my stackoverflow account.'},
        {name:'Blog', link:'#', text:'Follow to my blog.'},
        {name:'GitHub', link:'#', text:'Follow to my github account.'},
        {name:'YouTube', link:'#', text:'Follow to my youtube channel.'},
        {name:'Email', link:'#',  text:'write to me a mail'}
    ]
    return (
        <div className='contactWrap'>
       
        </div>
    )
}

export default ContactContainer;
