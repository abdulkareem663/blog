import { useState } from 'react'
import useFetch from './hooks/useFetch'
import Navbar from './components/Navbar'

function App() {
  let {loading, data, error} = useFetch('http://localhost:1337/api/categories')
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error!</p>

  return (
    <>
    <Navbar/>
      {data.data.map(arti => {
        return <h1>{arti}</h1>
      })}
    </>
  )
}

export default App
