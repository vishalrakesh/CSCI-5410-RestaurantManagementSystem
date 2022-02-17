import axios from 'axios'
import React, { useState } from 'react'

const AddItem = () => {

    const [name, setName] = useState("")
    const [price, setPrice] = useState("")
    const [restaurant, setRestaurant] = useState("")

    const addItem = async (flag) => {

        alert("Item Added successfully")
        const res = await axios.post(`https://h7khlrq7i1.execute-api.us-east-1.amazonaws.com/prod/item?name=${name}&price=${price}&restaurants=${restaurant}`)
        // .then(function (response) {
        //     debugger
        // })
        // .catch(function (error) {
        //     console.log(error);
        // });

    }

    return (
        <div className="container mx-auto px-4">
            <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                Add Item
            </h1>

            <form class="w-full max-w-lg">
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Item Name
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Item Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                            Item Price
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="number"
                            placeholder="Item Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                </div>
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="restaurant">
                            Restaurant
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="restaurant"
                            type="text"
                            placeholder="Restaurant Name"
                            value={restaurant}
                            onChange={(e) => setRestaurant(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                        addItem(false)
                    }}>
                    Add item
                </button>

            </form>
        </div>
    )
}

export default AddItem
