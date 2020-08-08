import React from 'react'


const MiniCard = ({img,text})=>(
    <div class="uk-width-1-5@m">
        <div class="paw-post">
            <figure class="paw-image">
            <img src={img}/>
            </figure>
            {text && <span class="paw-overlay">
            <p>
            <span class="paw-commentary">{text}</span>
            </p>
            </span>}
        </div>
    </div>
)

export default MiniCard;