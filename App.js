import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './src/components/Main'


let App = ()=>{

    return (
        <div className=''>
         <Main/>
        </div>
    )
}

let root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(<App/>)

