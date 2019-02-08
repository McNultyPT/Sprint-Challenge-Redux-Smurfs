import React from 'react';

function Smurf(props) {
    return (
        <div>
            {props.smurfs.map(smurf => {
                return (
                    <div>
                        <p>{smurf.name}</p>
                        <p>{smurf.age}</p>
                        <p>{smurf.height}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default Smurf;