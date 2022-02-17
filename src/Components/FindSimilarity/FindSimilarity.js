import React, { useState } from 'react'
import { getUserInfo } from '../../utils/AuthUtils'

const FindSimilarity = () => {

    const [ingredients, setIngredients] = useState("")
    const user = getUserInfo()
    return (
        <div>

            <div className="container mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                    Find Similarity
                </h1>

                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Enter Item Ingredients
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Item Name"
                            value={ingredients}
                            onChange={(e) => setIngredients(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                        // addItem(false)
                    }}>
                    Find Similarity
                </button>

                <p class="block uppercase tracking-wide text-gray-700 text-xs font-bold my-2" for="grid-first-name">
                    {ingredients}
                </p>

            </div>
        </div>
    )
}

export default FindSimilarity