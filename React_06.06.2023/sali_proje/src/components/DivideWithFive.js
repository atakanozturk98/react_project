import React, { Component } from 'react'
import { divideWitfFive } from '../redux/actions/counterAction'
import {Button } from "reactstrap";
import {connect} from "react-redux";
import { bindActionCreators } from 'redux';

class DivideWitfFive extends Component {



    render() {
        return (
        <div>
            <input
            type="number"
            id="number"
            onChange={(e) =>
                this.props.dispatch(
                    divideWitfFive(Number(document.getElementById('number').value))
                )
            }
            />
            <Button
            color="success"
            onClick={(e) =>
                this.props.dispatch(
                    divideWitfFive(Number(document.getElementById('number').value))
                )
            }
            >
            Auto Divide
            </Button>
        </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return { actions: bindActionCreators(divideWitfFive, dispatch)}
}



export default connect(mapDispatchToProps)(DivideWitfFive);
