import { NavLink } from "react-router-dom";
import { actionTypes } from "../../../redux/reducer";
import { useStateValue } from "../../../redux/StateProvider";
export default function Navbar() {
  const items = ["home", "Trofeos", "perfil", "posiciones","login"];
  const [{ openNav }, dispatch] = useStateValue();

  const toggleMenu = () => {
    dispatch({
      type: actionTypes.TOGGLE_MENU,
      openNav: !openNav,
    });
  };

  return (
    <header className="menu">
      <div className="menu-icon">
        <div onClick={toggleMenu} className="toggle-menu">
          <div className={`${openNav ? "show" : ""} first-bar`}></div>
          <div className={`${openNav ? "show" : ""} second-bar`}></div>
          <div className={`${openNav ? "show" : ""} third-bar`}></div>
        </div>
      </div>
      <nav className={openNav ? "menu-nav menu-nav--active" : "menu-nav"}>
        <ul className="menu-content">
          {items.map((item) => (
            <li key={item} className="menu-item">
              <NavLink
                style={({ isActive }) => {
                  return {
                    color: isActive ? "orange" : "",
                  };
                }}
                className="menu-item__link"
                to={item === "home" ? "/" : `/${item}`}
                key={item}
              >
                {item.toUpperCase()}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
