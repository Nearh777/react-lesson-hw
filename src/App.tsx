import './App.css'
// import {CoursesComponent} from "./components/courses-component/CoursesComponent.tsx";

import {CoursesArrayComponent} from "./components/courses-array-component/CoursesArrayComponent.tsx";
import { coursesArray } from './data/data.ts';
// import {coursesTitleArray} from "./data/data.ts";
// import {FamilyComponent} from "./components/family-component/FamilyComponent.tsx";



const App = () => {

  return (
    <>
    {/*<FamilyComponent/>*/}
    {/*  <ul className='grid grid-flow-col grid-rows-3 gap-4'>*/}
    {/*    {*/}
    {/*      coursesTitleArray.map((value, index) => <li key = {index} className='text-center text-white  bg-indigo-600 rounded-full ... hover:bg-sky-700 ... w-35 h-15'>{value}</li>)*/}
    {/*    }*/}
    {/*  </ul>*/}
    {/*    <CoursesComponent/>*/}
        <CoursesArrayComponent courses={coursesArray}/>

        </>
  )
}

export default App
