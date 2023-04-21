import React from 'react'
import { FaSearch } from 'react-icons/fa'
import '../Styles/Home.css';
import Course from '../Components/Course';
import Others from '../Components/Others';
import { courses ,others} from '../Components/Courses';


const Home = () => {
  return (
    <>
    <div className='header'>
      <h1>Welcome to skills source</h1>
      <div className="search">
        <input type="text" className="search-tab" />
        <button className='srch-btn'><FaSearch/></button>
      </div>

      <h1 className="explore">Explore now</h1>
     
    </div>
     <div className="courses">
      {courses.map(course=>{
        return <Course course={course} />
      })}
   </div>
   <button id="more">More courses</button>
   <div className="others">
     {others.map(other=>{
      return <Others  other={other}/>
     })}
   </div>
   </>
  )
}

export default Home
