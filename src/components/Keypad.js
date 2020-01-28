import React, { Component } from 'react'

export default class Keypad extends Component {
    render() {
        
      let handKeyUp = ()  => console.log("Entering password...")
        return (
            <div>
             <input type="password"  
             onKeyUp={handKeyUp}
             />
            </div>
        )
    }
}
