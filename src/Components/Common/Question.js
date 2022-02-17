import { AmplifySignOut } from '@aws-amplify/ui-react'
import React, { useEffect, useState } from 'react'
import db from '../../cred/firebase'
import { getUserInfo, setUserInfo } from '../../utils/AuthUtils'
import "./Question.css"

const Question = () => {

    const user = getUserInfo()
    const [answer, setAnswer] = useState("")
    const [dbUser, setDBUser] = useState()

    useEffect(async () => {

        const userRef = db.collection("userDetails")
        const userData = await userRef.where('email', '==', user.email).get()
        userData.forEach(doc => {
            setDBUser(doc.data())
        })

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();

        let retrivedUser = {}
        const userRef = db.collection("userDetails")
        const userData = await userRef.where('email', '==', user.email).get()
        userData.forEach(doc => {
            retrivedUser = doc.data()
        })

        console.log("DOC :", retrivedUser)

        // retrivedUser.answer
        if (!retrivedUser.answer) {
            user["answer"] = answer
            delete user.isQuestion
            // Add answer to the store
            db.collection("userDetails").add(user)
                .then(async (docRef) => {
                    user["isQuestion"] = false
                    setUserInfo(user)
                    window.location.reload()
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                });
        } else {
            if (retrivedUser.answer === answer) {
                user["isQuestion"] = false
                user["userRole"] = retrivedUser.userRole
                setUserInfo(user)
                window.location.reload()
            } else {
                alert("Invalid Answer")
            }
        }
    }

    return (
        <div className="content bg-gray-200	p-5">
            <div className="flex justify-between mb-3">
                <div>
                    Hello {user?.username},
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => {
                        localStorage.clear()
                        window.location.reload()
                    }}>
                    Log Out
                </button>
                {/* <div>
                    <button type="button"
                        onClick={() => {
                            localStorage.clear()
                            window.location.reload()
                        }}>
                        Log Out
                    </button>
                </div> */}
            </div>

            {/* <AmplifySignOut /> */}


            <h2 className="font-size-25 heading-title-text-color font-medium tracking-normal mb-0 cursor-pointer py-3">
                {!dbUser?.answer ? "Please Setup" : "Please enter"} Security Question
            </h2>

            <div>
                <div>
                    What was the first Car you bought ?
                </div>

                <div className="py-3">
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={answer}
                        onChange={(e) => {
                            setAnswer(e.target.value)
                        }}
                        placeholder="Enter your Answer"
                    />
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button" onClick={(e) => {
                        handleSubmit(e)
                    }}>
                    Submit
                </button>
            </div>

        </div>
    )
}

export default Question
