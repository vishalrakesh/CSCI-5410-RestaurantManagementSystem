import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import LexChat from "react-lex";
import { getUserInfo } from '../../utils/AuthUtils';
// const AWS = require('aws-sdk');

const Help = () => {

    // const SESConfig = {
    //     accessKeyId: "ASIATTT6YKKF5BL2XNFU",
    //     accessSecretKey: "1Kj3qKqVYLJYTiScyPQc00lDUmzkBFbV+8kpR+Xb",
    //     region: "us-east-1"
    // }
    // AWS.config.update(SESConfig);
    const [text, setText] = useState(null)
    const [receivedtext, setReceivedText] = useState([])
    const [receivedtextRestaurant, setReceivedTextRestaurant] = useState([])
    const user = getUserInfo()

    useEffect(() => {

        const interval = setInterval(() => {
            receiveMessage()
        }, 1000);
        return () => clearInterval(interval)

    }, [])

    const receiveMessage = async () => {
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));
        const { data } = await axios.post('https://live-chat-xo7rlc2vga-ue.a.run.app/receive', {
            subscriptionId: user.userRole === "restaurant" ? "live-chat-sub" : "user-chat"
            // subscriptionId: "user-chat"
        })
        if (data.message) {
            const msg = JSON.parse(data.message);
            if (msg.userId !== userInfo.username) {
                setReceivedText((oldMsg) => [...oldMsg, msg.text]);
            }
        }
    }

    const sendText = async (item, flag) => {
        if (text === null || text === "") {
            return
        }
        const userInfo = JSON.parse(localStorage.getItem("userinfo"));

        const { data } = await axios.post('https://live-chat-xo7rlc2vga-ue.a.run.app/send', {
            "message": { userId: userInfo.username, text },
            "topic": "live-chat"
        })
        setReceivedText((oldText) => [...oldText, text]);
    }



    return (
        <div>
            {console.log("received", receivedtext)}

            <div className="container mx-auto px-4">
                <h1 class="text-3xl md:text-4xl font-medium mb-4 text-indigo-400">
                    Chat with us
                </h1>

                {/* <form class="w-full max-w-lg"> */}
                <div class="flex flex-wrap -mx-3 mb-6">
                    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Input text
                        </label>
                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="grid-first-name"
                            type="text"
                            placeholder="Enter text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        />
                    </div>
                </div>

                <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    type="button"
                    onClick={() => {
                        sendText()
                    }}>
                    Send
                </button>

                <Row>
                    <Col md={3}>
                        <label class="mt-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Message sent :
                        </label>
                    </Col>
                    <Col md={9}>
                        <label class="mt-4 block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                            Message received :
                        </label>
                    </Col>
                </Row>
                <Row>
                    {receivedtext?.map((t, index) => {
                        return (
                            // <p class={`block ${index % 2 === 0 && "ml-5"} tracking-wide text-gray-700 text-xs font-bold mb-2`} for="grid-first-name">
                            // </p>
                            <>
                                {index % 2 !== 0
                                    ?
                                    <>
                                        <Col md={3}>
                                            {user.userRole === "restaurant" && t}
                                        </Col>
                                        <Col md={9}>
                                            {user.userRole === "user" && t}
                                        </Col>
                                    </>
                                    :
                                    <>
                                        <Col md={3}>
                                            {user.userRole === "user" && t}
                                        </Col>
                                        <Col md={9}>
                                            {user.userRole === "restaurant" && t}
                                        </Col>
                                    </>
                                }
                            </>
                        )
                    })}
                </Row>

                {/* </form> */}
            </div>

            {/* <LexChat
                botName="foodTracking"
                IdentityPoolId="us-east-1:5bc03a82-7d05-43b3-89f1-558ec02cb4bd"
                placeholder="Placeholder text"
                style={{ position: 'absolute' }}
                backgroundColor="#FFFFFF"
                height="430px"
                region="us-east-1"
                headerText="Chat with our awesome bot"
            /> */}
            <LexChat
                botName="track-order-chatbot"
                IdentityPoolId="us-east-1:5bc03a82-7d05-43b3-89f1-558ec02cb4bd"
                placeholder="Placeholder text"
                style={{ position: 'absolute' }}
                backgroundColor="#FFFFFF"
                height="430px"
                region="us-east-1"
                headerText="Chat with us!"
            />
        </div>
    )
}

export default Help
