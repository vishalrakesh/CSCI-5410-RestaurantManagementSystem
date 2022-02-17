import React from 'react'
import { getUserInfo } from '../../utils/AuthUtils'

const Header = () => {
    const user = getUserInfo()

    return (
        <div>
            <nav className="bg-white py-2 md:py-4">
                <div className="container px-4 mx-auto md:flex md:items-center">

                    <div className="flex justify-between items-center">
                        <a className="font-bold text-xl text-indigo-600">HalifaxFoodie</a>
                        <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>

                    <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
                        <a href="/" className={window.location.pathname === "/" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>Home</a>


                        {user?.userRole === "restaurant" ?
                            <>
                                <a href="/findSimilarity" className={window.location.pathname === "/findSimilarity" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                                    Find Similarity
                                </a>
                                <a href="/addItem" className={window.location.pathname === "/addItem" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                                    Add Item
                                </a>
                                <a href="/visualization" className={window.location.pathname === "/visualization" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                                    Visualization
                                </a>
                            </>
                            :
                            <>
                                <a href="/myOrders" className={window.location.pathname === "/myOrders" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                                    My Orders
                                </a>
                                <a href="/placeOrder" className={window.location.pathname === "/placeOrder" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                                    Place Order
                                </a>
                                <a href="/customerFeedback" className={window.location.pathname === "/customerFeedback" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                                    Food Reviews
                                </a>
                            </>
                        }

                        <a href="/help" className={window.location.pathname === "/help" ? `p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600` : "p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"}>
                            Help
                        </a>


                        <button className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                            onClick={() => {
                                localStorage.clear()
                                window.location.reload()
                            }}>
                            Logout
                        </button>
                    </div>
                </div>
            </nav>
        </div >
    )
}

export default Header
