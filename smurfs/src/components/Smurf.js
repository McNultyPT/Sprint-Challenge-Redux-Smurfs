import React from 'react';
import { connect } from 'react-redux';

import { deleteSmurf } from '../actions';
import './App.css';

class Smurf extends React.Component {
    deleteSmurf = (e, id) => {
        e.preventDefault();
        this.props.deleteSmurf(id);
    }

    render() {
        return (
            <div className='smurfCont'>
                {this.props.smurfs.map(smurf => {
                    return (
                        <div className='smurfCard'>
                            <h3>Smurf</h3>
                            <li>Name: {smurf.name}</li>
                            <li>Age: {smurf.age}</li>
                            <li>Height: {smurf.height}</li>
                            <i onClick={(e) => this.deleteSmurf(e, smurf.id)} class="fas fa-skull-crossbones fa-lg"></i>
                        </div>
                    );
                })}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    smurfs: state.smurfs,
    deletingSmurf: state.deletingSmurf
})

export default connect(mapStateToProps, { deleteSmurf })(Smurf);