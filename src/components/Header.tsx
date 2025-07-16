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
    <header className="fixed inset-x-0 top-0 h-16  bg-[#080E20] z-10">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
        {/* Logo 区 */}
        <div className="text-2xl font-bold tracking-wide">Harris</div>

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
