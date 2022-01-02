import { Link } from "react-router-dom";

const navigation = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

const Navbar = () => {
  return (
    <nav>
      <ul className="flex my-10 sm:my-6">
        {console.log(navigation, "navigation")}
        {navigation.map((item) => {
          return (
            <li key={item.name} className="px-4">
              <Link to={item.href}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
