import { useState } from "react"

function SearchBar({handleSubmit}) {
    const [searchTerm, setSearchTerm] = useState('')
    return (
        <form onSubmit={(e) => handleSubmit(e, searchTerm)}>
            <input onChange={(e) => setSearchTerm(e.target.value)} placeholder="Enter band name here" />
            <input type="submit" />
        </form>
    )
}

export default SearchBar

// import {useState} from "react"


// function SearchBar() {
//     const [searchTerm, setSearchTerm] = useState('')

// return(

//   <form>
//     <input placeholder="enter band name here"/>
//     <input type="submit"
//   </form>


// )

// }

// export default SearchBar