import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/profile', label: 'Profile' },
  { path: '/experience', label: 'Experience' },
  { path: '/projects', label: 'Projects' },
  { path: '/tech', label: 'Technical Docs' },
  { path: '/docs', label: 'Other Docs' },
  { path: '/guestbook', label: 'Guestbook' },
];

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-[10vh] bg-[#080E20] text-custom-gray">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo 区 */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Harris Logo"
            className="h-20"
          />
        </div>
        {/* 导航区 */}
        <nav className="flex gap-6 text-sm">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `relative transition duration-150 ${isActive ? 'text-brand-accent' : 'hover:text-brand-accent'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
