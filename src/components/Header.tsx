import { NavLink } from 'react-router-dom';

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
    <header>
      <div>
        {/* Logo */}
        <div className="bg-[#88a1ea]">Harris</div>

        {/* 导航 */}
        <nav>
          {navItems.map(item => (
            <NavLink key={item.path} to={item.path}>
              {item.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
