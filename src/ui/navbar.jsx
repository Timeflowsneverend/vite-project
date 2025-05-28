import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
    fontWeight: isActive ? 'bold' : 'normal',
    color: isActive ? 'black' : 'white',
    textDecoration: 'none',
    margin: '0 5px',
    padding: '5px 10px',
    borderRadius: '5px',
    backgroundColor: isActive ? 'white' : 'black',
})

const Navbar = () => (
    <nav>
        <NavLink to="/" style={linkStyle}>Home</NavLink> |{' '}
        <NavLink to="/products" style={linkStyle}>Products</NavLink> |{' '}
        <NavLink to="/cart" style={linkStyle}>Cart</NavLink>
    </nav>
)

export default Navbar