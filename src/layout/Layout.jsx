import { NavLink } from "react-router-dom";
import {
  Home,
  CalendarDays,
  Dumbbell,
} from "lucide-react";

import "./Layout.css";

import Header from "../components/Header/Header.jsx";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: Home,
  },
  {
    label: "Calendar",
    path: "/calendar",
    icon: CalendarDays,
  },
  {
    label: "Routines",
    path: "/routines",
    icon: Dumbbell,
  },
];

export default function Layout({ children }) {
  return (
    <div className="layout">

      <header className="layout-header">
        <Header />
      </header>

      <main className="layout-main">
        {children}
      </main>

      <footer className="layout-footer">
        <nav className="layout-nav">
          {navItems.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `layout-nav-item ${isActive ? "active" : ""}`
                }
              >
                <Icon className="layout-nav-icon" />

                <span className="layout-nav-label">
                  {item.label}
                </span>
              </NavLink>
            );
          })}
        </nav>
      </footer>

    </div>
  );
}