import React from 'react'


const Course = ({ course: { name, id,title,image } }) => {
  return (
    <div className='course'>
      <div className="course-info">
         <h2>{name}</h2>
         <div className="c-tbns">
            <button>{title}</button>
            <button>Video Tutorial</button>
            <button>Excercises</button>
         </div>
        
      </div>
      <div className="course-demo">
         <img src={image} alt={title} /> 
         <button className="start">Start now</button>
      </div>
    </div>
  )

}



export default Course
