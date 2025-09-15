import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children, menu = 'dash' }) {
    const user = usePage().props.auth.user;
    const [showSidebar, setShowSidebar] = useState(false);
    const isActive = route().current('dashboard');
    const isOn = route().current('hotels.index');
    const [open, setOPen] = useState(false);

    return (
        <div className="flex min-h-screen bg-gray-100 w-full overflow-x-hidden">

            {/* Bouton sidebar (mobile) */}
            <button
                className="lg:hidden fixed sm:top-4 top-[17px] left-4 z-30 p-2 rounded-md"
                onClick={() => setShowSidebar(!showSidebar)}
            >

                {showSidebar ? (
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-200 relative right-[8px] "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>

                ) : (

                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                )}

            </button>

            {/* Sidebar */}
            <aside
                className={`w-64 bg-cover h-screen border-r fixed top-0 left-0 z-20 caret-transparent transform transition-transform duration-300
                ${showSidebar ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
                style={{ backgroundImage: "url('/redp.jpg')" }}
            >
                <div className="p-4 flex-col items-center space-y-8">
                    <div className="flex flex-row items-center gap-2 sm:gap-4 md:gap-4 sm:ml-0 md:ml-0 ml-12 mt-1 sm:mt-0 md:mt-0 relative sm:top-[0px] top-[50px] sm:right-[0px] right-[48px]">
                        <img className="w-6 h-6 sm:w-8 sm:h-8" src="/logo.png" alt="" />
                        <h1 className="text-xl sm:text-2xl text-gray-200 font-extrabold caret-transparent">RED PRODUCT</h1>
                    </div>
                    <h1 className="text-gray-200 text-sm sm:text-base font-normal mt-6 sm:mt-8 position relative sm:top-[0px] top-[40px] ">Principal</h1>
                </div>

                <nav className="flex-1 space-y-2 flex flex-col relative sm:top-[0px] top-[40px] ">
                    <Link href={route('dashboard')} className={`flex flex-row items-center p-4 py-2 w-full gap-6 ${isActive ? 'bg-gray-100' : ''}`}>
                        <img className="w-5 h-5" src={isActive ? "/dash2.png" : "/dash0.png"} alt="dash" />
                        <NavLink href={route('dashboard')} active={route().current('dashboard')}>
                            Dashboard
                        </NavLink>
                    </Link>

                    <Link href={route('hotels.index')} className={`flex flex-row items-center p-4 py-2 w-full gap-6 ${isOn ? 'bg-gray-100' : ''}`}>
                        <img className="w-5 h-5" src={isOn ? "/list2.png" : "/list0.png"} alt="dash" />
                        <NavLink href={route('hotels.index')} active={route().current('hotels.index')}>
                            Liste des hotels
                        </NavLink>
                    </Link>

                    <hr className="relative top-[530px] sm:top-[230px]" />
                    <div className="flex flex-row items-center gap-6 relative top-[532px] sm:top-[232px]">
                        <img className="w-[50px] h-[50px] ml-5" src="/avatar.png" alt="avatar" />
                        <div className="flex flex-col gap-1">
                            <span className="text-gray-200 text-base font-normal">{user.name}</span>
                            <div className="flex flex-row items-center gap-2">
                                <span className="block w-[10px] h-[10px] bg-[#00FF92] rounded-[13.33px]"></span>
                                <span className="text-sm text-gray-500">en ligne</span>
                            </div>
                        </div>
                    </div>
                </nav>
            </aside>

            {/* Section principale */}
            <div className="flex-1 sm:ml-60 ">

                {menu === 'dash' && (
                    <>
                        <nav
                            className="bg-white px-4 sm:border-b sm:h-16  flex items-center justify-between fixed sm:top-0 left-0 sm:left-64 right-0 z-10 sm:shadow-sm shadow-xs">
                            <div>
                                <h1 className="text-base sm:text-2xl ml-10 sm:ml-0.5 font-semibold caret-transparent relative sm:top-0 top-[-22px] ">Dashboard</h1>
                            </div>
                            <div
                                className="flex flex-row items-center justify-center sm:gap-4 space-x-[-100px] sm:space-x-[0px] sm:mr-0">
                                <div
                                    className="flex items-center bg-white rounded-full border border-gray-400 w-[370px] h-[30px] sm:w-[279.96px] sm:h-[33.99px] sm:mt-0 mt-20 relative right-[215px] sm:right-0 sm:top-0 top-[-15px]">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400 ml-5 sm:ml-5 caret-transparent"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <circle
                                            cx="11"
                                            cy="11"
                                            r="6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <line
                                            x1="15.5"
                                            y1="15.5"
                                            x2="20"
                                            y2="20"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <input
                                        type="text"
                                        placeholder="Recherche"
                                        className="sm:w-[179.96px] sm:h-[13.99px] w-[100px] h-[15px] bg-white focus:bg-gray-white outline-none placeholder-gray-400 sm:placeholder-lg placeholder-sm font-normal border-0 focus:ring-white sm:text-base text-sm"

                                    />
                                </div>

                                {/* bagde notifs + 3 */}
                                <div className="caret-transparent relative right-[215px] sm:right-0 sm:top-0 top-[-22px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sm:h-6 sm:w-6 w-4 h-4 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V11a6 6 0 00-5-5.91V4a1 1 0 10-2 0v1.09A6 6 0 006 11v5l-2 2v1h16v-1l-2-2z"
                                        />
                                    </svg>
                                    <div
                                        className="absolute top-[-6px] right-0 sm:left-6 left-4 block sm:w-[17.84px] sm:h-[18.17px] w-[13px] h-[14px] bg-[#FCC100] rounded-[4.27px] ring-2 ring-white flex flex-col items-center">
                                        <span className="text-white text-xs sm:text-sm">3</span>
                                    </div>
                                </div>

                                {/* imgage + badge en ligne */}
                                <div className=" caret-transparent relative right-[110px] sm:right-0 sm:top-0 top-[-22px] ">
                                    <img className="sm:w-[42.66px] sm:h-[42.66px] w-[30px] h-[30px] ml-5" src="/avatar.png" alt="avatar" />
                                    <span
                                        className="absolute sm:top-[26px] top-[20px] right-0 block sm:w-[13.33px] sm:h-[13.33px] w-[8px] h-[8px] bg-[#00FF92] rounded-[13.33px] sm:ring-1 ring-2 ring-white flex flex-col items-center">
                                    </span>
                                </div>

                                {/* badge de logout */}
                                <NavLink method="post" href={route('logout')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="sm:w-6 sm:h-6 w-4 h-4 text-black relative sm:top-0 top-[-22px]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
                                        />
                                    </svg>

                                </NavLink>


                            </div>
                        </nav>


                    </>
                )}

                {menu === 'hotels' && (
                    <>

                        <nav
                            className="bg-white px-4 sm:border-b sm:h-16  flex items-center justify-between fixed sm:top-0 left-0 sm:left-64 right-0 z-10 sm:shadow-sm shadow-xs">
                            <div>
                                <h1 className="text-base sm:text-2xl ml-10 sm:ml-0.5 font-semibold caret-transparent relative sm:top-0 top-[-22px] ">Liste des hôtels </h1>
                            </div>
                            <div
                                className="flex flex-row items-center justify-center sm:gap-4 space-x-[-100px] sm:space-x-[0px] sm:mr-0">
                                <div
                                    className="flex items-center bg-white rounded-full border border-gray-400 w-[370px] h-[30px] sm:w-[279.96px] sm:h-[33.99px] sm:mt-0 mt-20 relative right-[215px] sm:right-0 sm:top-0 top-[-15px]">

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4 sm:h-6 sm:w-6 text-gray-400 ml-5 sm:ml-5 caret-transparent"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <circle
                                            cx="11"
                                            cy="11"
                                            r="6"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <line
                                            x1="15.5"
                                            y1="15.5"
                                            x2="20"
                                            y2="20"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>

                                    <input
                                        type="text"
                                        placeholder="Recherche"
                                        className="sm:w-[179.96px] sm:h-[13.99px] w-[100px] h-[15px] bg-white focus:bg-gray-white outline-none placeholder-gray-400 sm:placeholder-lg placeholder-sm font-normal border-0 focus:ring-white sm:text-base text-sm"

                                    />
                                </div>

                                {/* bagde notifs + 3 */}
                                <div className="caret-transparent relative right-[215px] sm:right-0 sm:top-0 top-[-22px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="sm:h-6 sm:w-6 w-4 h-4 text-black"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M12 22c1.1 0 2-.9 2-2H10c0 1.1.9 2 2 2zm6-6V11a6 6 0 00-5-5.91V4a1 1 0 10-2 0v1.09A6 6 0 006 11v5l-2 2v1h16v-1l-2-2z"
                                        />
                                    </svg>
                                    <div
                                        className="absolute top-[-6px] right-0 sm:left-6 left-4 block sm:w-[17.84px] sm:h-[18.17px] w-[13px] h-[14px] bg-[#FCC100] rounded-[4.27px] ring-2 ring-white flex flex-col items-center">
                                        <span className="text-white text-xs sm:text-sm">3</span>
                                    </div>
                                </div>

                                {/* imgage + badge en ligne */}
                                <div className=" caret-transparent relative right-[110px] sm:right-0 sm:top-0 top-[-22px] ">
                                    <img className="sm:w-[42.66px] sm:h-[42.66px] w-[30px] h-[30px] ml-5" src="/avatar.png" alt="avatar" />
                                    <span
                                        className="absolute sm:top-[26px] top-[20px] right-0 block sm:w-[13.33px] sm:h-[13.33px] w-[8px] h-[8px] bg-[#00FF92] rounded-[13.33px] sm:ring-4 ring-2 ring-white flex flex-col items-center">
                                    </span>
                                </div>

                                {/* badge de logout */}
                                <NavLink method="post" href={route('logout')}>
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        className="sm:w-6 sm:h-6 w-4 h-4 text-black relative sm:top-0 top-[-22px]"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9"
                                        />
                                    </svg>

                                </NavLink>


                            </div>
                        </nav>


                    </>
                )}


                {/* Contenu principal */}
                <main className="flex-1 w-full bg-gray-100">
                    {header && <header className="mb-4 text-lg font-thin text-black">{header}</header>}
                    {children}
                </main>

            </div>
        </div>
    );
}
