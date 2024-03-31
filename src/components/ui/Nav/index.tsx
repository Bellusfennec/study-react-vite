import { Link, NavLink } from "react-router-dom";
import "./style.css";
import { useAuth } from "../../../contexts/AuthProvider";
import LinkButton from "../../common/buttons/LinkButton";

export const Nav = () => {
  const auth = useAuth();
  const menu = [
    { id: 1, name: "Хуки", link: "/hook" },
    { id: 2, name: "Герои", link: "/hero" },
    { id: 3, name: "Эпизоды", link: "/episode" },
    { id: 4, name: "Локации", link: "/location" }
  ];

  return (
    <nav className="nav__container">
      <Link to="/" className="nav__logo">
        Главная
      </Link>
      <div className="nav__menu">
        {menu.map((item) => (
          <NavLink key={item.id} to={item.link} className="nav__menu-link">
            {item.name}
          </NavLink>
        ))}
      </div>
      {auth.user === null ? (
        <Link to="/auth">Войти</Link>
      ) : (
        <LinkButton onClick={() => auth?.signOut?.()}>Выйти</LinkButton>
      )}
    </nav>
  );
};
