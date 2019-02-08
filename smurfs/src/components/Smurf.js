import React from 'react';

import './App.css';

function Smurf(props) {
    return (
        <div className='smurfCont'>
            {props.smurfs.map(smurf => {
                return (
                    <div className='smurfCard'>
                        <h3>Smurf</h3>
                        <li>Name: {smurf.name}</li>
                        <li>Age: {smurf.age}</li>
                        <li>Height: {smurf.height}</li>
                        <i class="fas fa-skull-crossbones fa-lg"></i>
                    </div>
                );
            })}
        </div>
    );
}

export default Smurf;