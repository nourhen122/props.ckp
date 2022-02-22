import React from 'react'
import PropTypes from "prop-types";

const Data = ({test,children}) => {
const {fullName,bio,profession}=test
    console.log (test);
  return (
    <div   style={{color: 'red', textAlign: 'center'}}  >
       <h1> {fullName  } </h1> 
       <h2> {bio} </h2>
       <h2> {profession} </h2>
       {children}
    </div>
  )
}
Data.defaultProps = {
fullName : 'Nourhen Abdelhak',
bio : 'web developer',
profession : 'student'
}


Data.propTypes = {
    fullName : PropTypes.string  }




export default Data