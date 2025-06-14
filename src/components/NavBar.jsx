import {Link} from "react-router-dom"

function NavBar() {
  return (
    <nav>
      <Link to="/" >Home</Link>
      <Link to="/books" >Shop</Link>
      <Link to="/admin" >Admin Portal</Link>
    </nav>
  )
}

export default NavBar