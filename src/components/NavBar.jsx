import { useState } from 'react'    
import { Link, useNavigate } from 'react-router-dom'
import { BiSearchAlt2 } from 'react-icons/bi'
import Logo  from '../img/film-reel.png'

import './NavBar.css'

const NavBar = () => {
    const [search, setSearch] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(!search) return 
        navigate(`/search?q=${search}`)
        setSearch('');
    };

  return (
    <div id='navbar'>
        <h2>
      <Link to="/"><img className='logo' src={Logo}/>Movies</Link>
        </h2>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='Search a movie' 
            onChange={(e)=> setSearch(e.target.value)}
            value={search} />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
    </div>
  )
}

export default NavBar