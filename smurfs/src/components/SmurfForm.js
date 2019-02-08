import React from 'react';
import { connect } from 'react-redux';

import Smurf from './Smurf';
import { postSmurf } from '../actions';
import './App.css';

class SmurfForm extends React.Component {
    state = {
        smurf: {
            name: '',
            age: '',
            height: ''
        }
    };

    handleChanges = e => {
        this.setState({
            smurf: {
                ...this.state.smurf,
                [e.target.name]: e.target.value
            }
        });
    };

    postSmurf = e => {
        e.preventDefault();
        this.props.postSmurf(this.state.smurf);
        this.setState({
            smurf: {
                name: '',
                age: '',
                height: '',
                id: ''
            }
        });
    }

    render() {
        return (
            <div className='smurfFormCont'>
                <form onSubmit={this.postSmurf}>
                    <h2>🍄 Add a Smurf 🍄</h2>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                        onChange={this.handleChanges}
                        value={this.state.smurf.name}
                    />
                    <input 
                        type='text'
                        name='age'
                        placeholder='Age'
                        onChange={this.handleChanges}
                        value={this.state.smurf.age}
                    />
                    <input 
                        type='text'
                        name='height'
                        placeholder='Height'
                        onChange={this.handleChanges}
                        value={this.state.smurf.height}
                    />
                    <button>Add Smurf</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    postingSmurf: state.postingSmurf
})

export default connect(mapStateToProps, { postSmurf })(SmurfForm);