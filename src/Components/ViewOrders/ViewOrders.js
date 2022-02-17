import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { getUserInfo } from '../../utils/AuthUtils'

const ViewOrders = () => {

    const [orders, setOrders] = useState([])
    const user = getUserInfo()

    useEffect(() => {

        axios.get(`https://h7khlrq7i1.execute-api.us-east-1.amazonaws.com/prod/orders?customer=${user?.username}`)
            .then(function (response) {
                setOrders(response.data.orders.filter(obj => obj.customer === user.username))
            })
            .catch(function (error) {
                console.log(error);
            })
    }, [])

    return (
        <div className="container mx-auto px-4">
            {console.log("orders :", orders)}
            <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                Orders
            </h1>

            <table class="rounded-t-lg m-5 w-5/6 mx-auto bg-gray-200 text-gray-800">
                <tr class="text-left border-b-2 border-gray-300">
                    <th class="px-4 py-3">Order ID</th>
                    <th class="px-4 py-3">Item</th>
                    <th class="px-4 py-3">Restaurant</th>
                    <th class="px-4 py-3">Order Price</th>
                </tr>

                {orders?.map((order) => {
                    return (
                        <tr class="bg-gray-100 border-b border-gray-200">
                            <td class="px-4 py-3">{order.orderId}</td>
                            <td class="px-4 py-3">{order.item}</td>
                            <td class="px-4 py-3">{order.restaurant}</td>
                            <td class="px-4 py-3">{order.itemPrice}</td>
                        </tr>
                    )
                })}

            </table>

        </div>

    )
}

export default ViewOrders
