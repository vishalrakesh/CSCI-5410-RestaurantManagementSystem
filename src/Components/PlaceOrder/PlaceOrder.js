import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import { getUserInfo } from '../../utils/AuthUtils';

const PlaceOrder = () => {

    const [items, setItems] = useState([])
    const user = getUserInfo()

    useEffect(() => {

        axios.get('https://h7khlrq7i1.execute-api.us-east-1.amazonaws.com/prod/items')
            .then(function (response) {
                // handle success
                setItems(response.data.items)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });

    }, [])

    const placeOrder = async (item, flag) => {
        await axios.post(`https://h7khlrq7i1.execute-api.us-east-1.amazonaws.com/prod/order?item=${item.name}&itemPrice=${item.price}&restaurant=${item.restaurants}&customer=${user.username}`)
        alert("Order placed successfully")

    }

    return (
        <div className="container mx-auto px-4">
            {console.log("items :", items)}
            <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                Items
            </h1>

            <Row>

                {items?.map((item) => {
                    return (
                        <Col md={4}>
                            <div class="p-10">
                                <div class="w-96 m-2 h-96 rounded shadow-2xl justify-around bg-yellow-400 flex flex-col border-box p-4">
                                    <p class="text-yellow-800 uppercase text-sm">{item.restaurants}</p>
                                    <p class="text-2xl font-bold uppercase my-4">{item.name}</p>
                                    <p class="text-sm uppercase text-gray-900">Price : {item.price}</p>

                                    <div class="flex flex-row">
                                        <button class="bg-yellow-700 px-4 py-2 rounded uppercase font-bold text-sm text-white"
                                            onClick={() => {
                                                placeOrder(item, false)
                                            }}
                                        >
                                            Order Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    )
                })}

            </Row>

        </div>

    )
}

export default PlaceOrder
