import PropTypes from 'prop-types'
import { FaBeer } from 'react-icons/fa';

const Navber = () => {

const routes =[{id:1,path:"/home",name:"Home"},
    {id:2,path:"/about",name:"About"},
    {id:3,path:"/services",name:"Services"},
    {id:4,path:"/blog",name:"Blog"},
    {id:5,path:"/contact",name:"Contact"}
];



    return (
        <nav>
            <ul className="menu menu-horizontal px-1">
  {routes.map(route => (
    <li key={route.id}><a href={route.path}>{route.name}</a></li>
  ))}
</ul>

          <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>  
        </nav>
    );
};
Navber.PropTypes={
    route:PropTypes.object
}

export default Navber;