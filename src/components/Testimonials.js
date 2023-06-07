import React from 'react';
import '../styles/testimonials.css';

function Testimonials (props) { 
  return (
        <div className='testimonials-container'>
            <img 
            className='image-testimonial'
            src={require(`../images/image-${props.image}.png`)}
            alt= {props.alt} /> 
            <div className='text-container'>
                <p className='name-testimonial' > 
                <strong> {props.name}</strong> in {props.country}</p>
                <p className='company-testimonial' > 
                {props.position} at <strong> {props.company} </strong></p>
                <p className='text-testimonial' > "{props.testimonial}"</p>
            </div>
        </div>
    );
};
export default Testimonials;


/* textos en negrita 
  guardar valores de los props en archivos separados , poder recopilar los datos en un solo objeto de js en un objeto deparado y luego importarlo para generar cada testimonio. actualizar el objeto 

  */