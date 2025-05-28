import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => (
  <nav className=" bg-gray-400 w-300">
    <ul className="flex justify-around items-center p-4">
      {['home', 'products', 'cart'].map((d) => (
        <NavLink key={d} to={`/${d === 'home' ? 'home' : d.toLowerCase()}`}
          className="hover:text-red-600 px-2 py-1 rounded transition-colors"
          style={({ isActive }) => isActive ? {backgroundColor: 'yellow', color: 'pink' } : {}}>
          {d.charAt(0).toUpperCase() + d.slice(1)}
        </NavLink>
      ))}
    </ul>
  </nav>
)

export default Navbar