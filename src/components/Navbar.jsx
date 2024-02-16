/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Fragment, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { NavLink } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="container mx-auto my-8 px-6 sm:px-0 2xl:max-w-7xl">
      <div className="flex justify-between items-center">
        <span className="bg-blueSapphire text-white px-4 py-2 border rounded-md uppercase cursor-pointer">
          <NavLink to="/">it garden</NavLink>
        </span>
        <ul className="hidden md:flex items-center space-x-10">
          <li className="tracking-widest capitalize text-blueSapphire">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-4 border-b-darkSalmon'
                  : 'hover:border-b-4 hover:border-b-darkSalmon'
              }
            >
              home
            </NavLink>
          </li>
          <li className="tracking-widest capitalize text-blueSapphire">
            <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="tracking-widest capitalize text-blueSapphire">
                features
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg focus:outline-none">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="/features/1"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-blueSapphire',
                            'block px-4 py-2 tracking-widest capitalize'
                          )}
                        >
                          RGB
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="/features/2"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-blueSapphire',
                            'block px-4 py-2 tracking-widest capitalize'
                          )}
                        >
                          RTX
                        </NavLink>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <NavLink
                          to="/features/3"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-blueSapphire',
                            'block px-4 py-2 tracking-widest capitalize'
                          )}
                        >
                          Liquid Cooler
                        </NavLink>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </li>
          <li className="tracking-widest capitalize text-blueSapphire">
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-4 border-b-darkSalmon'
                  : 'hover:border-b-4 hover:border-b-darkSalmon'
              }
            >
              Sign Up
            </NavLink>
          </li>
          <li className="tracking-widest capitalize text-blueSapphire">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? 'border-b-4 border-b-darkSalmon'
                  : 'hover:border-b-4 hover:border-b-darkSalmon'
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Humberger Button */}
        <button
          type="button"
          id="menu-btn"
          className={`block md:hidden focus:outline-none hamburger ${
            menuOpen ? 'open' : ''
          }`}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="hamburger-top" />
          <span className="hamburger-middle" />
          <span className="hamburger-bottom" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`flex-col w-full p-8 space-y-4 text-lg capitalize ${
          menuOpen ? 'flex' : 'hidden'
        }`}
      >
        <li
          className="tracking-widest capitalize text-blueSapphire"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <NavLink to="/">home</NavLink>
        </li>
        <li className="tracking-widest capitalize text-blueSapphire">
          <Menu as="div" className="text-left">
            <Menu.Button className="tracking-widest capitalize text-blueSapphire">
              features
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="block origin-top-right mt-2 border-l-2 border-blueSapphire focus:outline-none">
                <div className="py-1">
                  <Menu.Item onClick={() => setMenuOpen((open) => !open)}>
                    {({ active }) => (
                      <NavLink
                        to="/features/1"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-blueSapphire',
                          'block px-4 py-2 tracking-widest capitalize'
                        )}
                      >
                        RGB
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item onClick={() => setMenuOpen((open) => !open)}>
                    {({ active }) => (
                      <NavLink
                        to="/features/2"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-blueSapphire',
                          'block px-4 py-2 tracking-widest capitalize'
                        )}
                      >
                        RTX
                      </NavLink>
                    )}
                  </Menu.Item>
                  <Menu.Item onClick={() => setMenuOpen((open) => !open)}>
                    {({ active }) => (
                      <NavLink
                        to="/features/3"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-blueSapphire',
                          'block px-4 py-2 tracking-widest capitalize'
                        )}
                      >
                        Liquid Cooler
                      </NavLink>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </li>
        <li
          className="tracking-widest capitalize text-blueSapphire"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li
          className="tracking-widest capitalize text-blueSapphire"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
