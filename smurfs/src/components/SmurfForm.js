import React from 'react';
import { connect } from 'react-redux';

import { postSmurf } from '../actions';

class SmurfForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            smurf: {
                name: '',
                age: '',
                height: ''
            }
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input 
                        type='text'
                        name='name'
                        placeholder='Name'
                    />
                    <input 
                        type='text'
                        name='age'
                        placeholder='Age'
                    />
                    <input 
                        type='text'
                        name='height'
                        placeholder='Height'
                    />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    postingSmurf: state.postingSmurf
}

export default connect(mapStateToProps, { postSmurf })(SmurfForm);