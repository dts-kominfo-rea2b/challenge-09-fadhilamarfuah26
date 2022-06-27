// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (props) => {
    const {name, phone, email} = props.data;
    return (
        <div className='contact-card'>
            <div className='detail-contact'>
                <h3>{name} </h3>
                <p> {phone} </p>
                <p> {email} </p>
            </div>
        </div>
    )
}

export default Contact;