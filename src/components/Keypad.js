// Code Keypad Component Here
import React, { Component } from 'react'

export class Keypad extends Component {

    handleInputPassword = () => {
        console.log('entering password')
    }

    render() {
        return (
            <div>
                <input type = "password"
                onKeyUp={this.handleInputPassword}
                />
            </div>
        )
    }
}

export default Keypad
