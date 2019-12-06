import React from 'react'

function About() {
    return (
        // ghost element that wont show up in the DOM
        // <React.Fragment></React.Fragment>
        
        <div style={titleStyle}>
            <br />
            <h1>About Project</h1>
            <p>This is a TodoList app v1.0.0. <br/>
                It is part of a React crash course</p>
        </div>
    )
}

const titleStyle = {
    textAlign: 'center'

}

export default About;