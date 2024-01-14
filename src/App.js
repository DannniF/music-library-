import { Fragment, useEffect, useState } from 'react'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar'
import AlbumView from './components/AlbumView'
import ArtistView from './components/ArtistView'

function App(){
    const [search, setSearch] = useState('')
    const [message, setMessage] = useState('Search for Music!')
    const [data, setData] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const url = `https://itunes.apple.com/search?term=${search}`
        const response = await fetch(url)
        const data = await response.json()
        console.log(data)

        if (data.results.length) {
          setData(data.results)
        } else {
          setMessage('No results found')
        }
      }

      if (search) fetchData()
    }, [search])

    const handleSubmit = async(e, term) => {
      e.preventDefault()
      setSearch(term)
    }
    return (
        <div>
          {message}
          <Router>
              <Routes>
                 <Route path= '/' element ={
                   <Fragment>
                    <SearchBar handleSubmit = {handleSubmit} />
                    <Gallery data={data} />
                  </Fragment>
                 } />
                  <Route path="/album/:id" element={<AlbumView />} />
                  <Route path="/artist/:id" element={<ArtistView />} />
              </Routes>
          </Router>
        </div>
    )
}

export default App