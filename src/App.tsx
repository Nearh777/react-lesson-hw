import './App.css'
import {coursesTitleArray} from "./data/data.ts";
// import {FamilyComponent} from "./components/family-component/FamilyComponent.tsx";



const App = () => {

  return (
    <>
    {/*<FamilyComponent/>*/}
      <ul className='grid grid-flow-col grid-rows-3 gap-4'>
        {
          coursesTitleArray.map((value, index) => <li key = {index} className='text-center text-white  bg-indigo-600 rounded-full ... hover:bg-sky-700 ... w-35 h-15'>{value}</li>)
        }
      </ul>
    </>
  )
}

export default App
