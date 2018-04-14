import React from 'react';
import "./DogsPics.css";

const DogsPics = props => (
    <div className="card">
        <div className="img-container">
            <a onClick={() => props.pickDog(props.type)} 
                className={props.curScore === 0 ? "style_prevu_kit style_prevu_kit_ex" : "style_prevu_kit"}
            >
                <img alt={props.type} src={props.pics} />
            </a>
        </div>
    </div>
);

export default DogsPics;
