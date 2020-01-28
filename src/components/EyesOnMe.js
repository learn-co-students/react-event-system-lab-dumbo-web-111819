import React, { Component } from 'react'

export default class EyesOnMe extends Component {
    render() {
       const goodfunc = () => console.log("Good!")
       const hey = () => console.log('Hey! Eyes on me!')
        return (
            <div>
            <button 
            onFocus={goodfunc}
            onBlur={hey}
            />
            </div>
        )
    }
}

