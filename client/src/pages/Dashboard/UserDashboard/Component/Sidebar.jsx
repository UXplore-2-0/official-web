import React from 'react'
import Chart_fill from '../Component/Assets/Chart_fill.png'

import control from '../Component/Assets/control.png'
import logo from '../Component/Assets/logo.png'
import Setting from '../Component/Assets/Setting.png'
import User from '../Component/Assets/User.png'


function Sidebar() {
    const [open, setOpen] = React.useState(true);
    const Menus = [
        { title: "Dashboard", src: Chart_fill },


        { title: "AddMember", src: User },

        { title: "Setting", src: Setting },
    ];
    return (
        <div className="flex ml-1 rounded">
            <div
                className={` ${open ? "w-72" : "w-20 "
                    } bg-[#081A51] h-screen p-5 pt-8 relative duration-300 mt-3 mb-3 rounded-lg`}
            >
                <img
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
                    onClick={() => setOpen(!open)}
                />





                <div className="flex gap-x-4 items-center">
                    <img
                        src={logo}
                        className={`cursor-pointer duration-500  ${open && "rotate-[360deg]"
                            }`}
                    />
                    {/* <h1
                        className={`text-white origin-left font-medium text-xl duration-200 ${!open && "scale-0"
                            }`}
                    >
                       
                    </h1> */}
                </div>





                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
                  ${Menu.gap ? "mt-9" : "mt-2"} ${index === 0 && "bg-light-white"
                                } `}
                        >
                            <img src={Menu.src} />
                            <span className={`${!open && "hidden"} origin-left duration-200`}>
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>





            </div>

        </div>
    )

}

export default Sidebar