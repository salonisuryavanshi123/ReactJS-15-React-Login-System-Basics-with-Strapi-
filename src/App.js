//1. Import Area
// import someNamedImport from somelocation/somelibrary
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { routes } from './routes/Route'


//2. Defination Area
// Function Defination Area
export const App =()=> {  //Fat Arrow
    //Every Function return something
  return (
    <BrowserRouter>
        <Routes>
            {/*array.map(function(currentValue, index, arr), thisValue)*/}
            {
                 routes.map((currentValue,index,arr)=>{  //map method should be return something
                    return <Route key={index} path={currentValue.path} element={currentValue.element} />
                })
            } 
        </Routes>   
    </BrowserRouter>
  )
}
