import Container from '@/components/container/Container';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import logo from '@/assets/blog-logo.png';
import { ModeToggle } from '@/components/mode-toggle';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Write', path: '' },
  { name: 'About', path: '' },
];

const Header: React.FC = () => {
  return (
    <header className="border-b border-solid border-b-[#e5e7eb]">
      <Container>
        <div className="flex items-center justify-between p-4">
          <Link to={'/'}>
            <img src={logo} alt="blog logo" className="w-10" />
          </Link>
          <nav>
            <ul className="flex gap-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex gap-3">
            <Button asChild className="bg-[#3d61ff] hover:bg-[#3d61ffe5]">
              <Link to={'/login'}>Sign in</Link>
            </Button>
            <button>
              <ModeToggle />
            </button>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
