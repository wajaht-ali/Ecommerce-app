/* eslint-disable no-unused-vars */
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Link, useNavigate } from 'react-router-dom'
import { MdKeyboardArrowDown } from "react-icons/md";
import { useAuth } from '../context/Auth';
import toast from 'react-hot-toast';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
    const [auth, setAuth] = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        setAuth({
            ...auth,
            user: null,
            token: "",
        });
        localStorage.removeItem('auth');
        navigate('/');
        toast.success("Logout Sucessfully!");
    }
    return (
        <Menu as="div" className="relative inline-block text-left">
            <div>
                <Menu.Button className="inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                    {auth?.user?.name}
                    <MdKeyboardArrowDown />
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                        <Menu.Item>
                            {({ active }) => (
                                <Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'}`} className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )}>
                                    Dashboard
                                </Link>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <Link className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                )} onClick={handleLogout}>
                                    Logout
                                </Link>
                            )}
                        </Menu.Item>
                    </div>
                </Menu.Items>
            </Transition>
        </Menu>
    )
}
