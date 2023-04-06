import React, { PureComponent } from 'react'
import { useNavigate } from 'react-router-dom'

function About(){
    const navigate=useNavigate();
    const handleClick = () => {
        navigate('/');
}
    return (
      <div><h1>This is About page.</h1>
      <button onClick={handleClick} >
      Redirect
      </button>
    </div>
    )
}

export default About