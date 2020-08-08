import React from 'react'


const AcordionElement = ({title,children})=>(
    <li>
        <a className="uk-accordion-title" href="#">{title}</a>
        <div className="uk-accordion-content">
            {children}
        </div>
    </li>
)

export default AcordionElement;