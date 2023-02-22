import './style.css'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
        <div className='logo'>AllTechno</div>
        <div>
            <ul className='list'>
                <li>
                    <NavLink 
                    className={(estatus) => 
                        estatus.isActive ? 'active' : 'inactive'
                    }
                    to="/"
                    >
                        Todos los productos
                    </NavLink>
                </li>
                <li>
                    <NavLink
                    className={(estatus) => 
                        estatus.isActive ? 'active' : 'inactive'
                    }
                    to="/category/monitores">
                        Monitores
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={(estatus) => 
                        estatus.isActive ? 'active' : 'inactive'
                    }
                    to="/category/teclados">
                        Teclados
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={(estatus) => 
                        estatus.isActive ? 'active' : 'inactive'
                    }
                    to="/category/mouse">
                        Mouse
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                    className={(estatus) => 
                        estatus.isActive ? 'active' : 'inactive'
                    }
                    to="/category/headset">
                        Headset
                    </NavLink>
                </li>
            </ul>
        </div>
        <div>
            <CartWidget/>
        </div>
    </div>
  );
};

export default NavBar