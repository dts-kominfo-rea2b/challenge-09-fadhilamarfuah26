// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({kontak}) => {
    return (
        <div>
         <ul>
            {kontak.map((item)=>{
            return <li key={item.name}>
                {`${item.name} : ${item.phone}`}</li>
            })};
        </ul>
        </div>
    )
}

export default Contact;