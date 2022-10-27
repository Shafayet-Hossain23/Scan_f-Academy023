import React from 'react';

const Blog = () => {
    return (
        <div className='mx-2' style={{ textAlign: 'justify' }}>
            <div>
                <h5 className='text-warning'>what is `cors`?</h5>
                <p>The word CORS stands for “Cross-Origin Resource Sharing”. Cross-Origin Resource Sharing is an HTTP-header based mechanism implemented by the browser which allows a server or an API(Application Programming Interface) to indicate any origins (different in terms of protocol, hostname, or port) other than its origin from which the unknown origin gets permission to access and load resources. The cors package available in the npm registry is used to tackle CORS errors in a Node.js application.</p>
            </div>
            <div>
                <h5 className='text-warning'>Why are you using `firebase`? What other options do you have to implement authentication?
                </h5>
                <p>Firebase is Google’s Backend-as-a-Service (BAAS) solution for mobile app development. Originally, it was developed and launched in 2011 by Firebase Inc. and was later acquired by Google in 2014. Initially it started off as a realtime database and now offers developers and marketers a comprehensive selection of tools and products that not only help develop advanced applications, but also market them. The Firebase platform allows for easy integration with IOS, Android, Web, and Unity products.

                    <p className='pt-3'>Top five benefits of using Firebase by Google:</p>
                    <ul>
                        <li>Google Analytics For Firebase</li>
                        <li>Realtime Database & Firestore</li>
                        <li>Authentication</li>
                        <li>Crashlytics</li>
                        <li>Free Use of Dynamic Links</li>
                    </ul>

                    <p>Alternatives of Firebase: </p>
                    <ul>
                        <li>Auth0</li>
                        <li>passport</li>
                        <li>keycloak</li>
                        <li>MongoDB</li>
                        <li>Okta</li>
                    </ul>
                </p>
            </div>
            <div>
                <h5 className='text-warning'>How does the private route work?</h5>
                <p>React Router is one of the most important components of React ecosystem. In this tutorial, we will learn how to build different types of routes including private, public, and restricted routes.PrivateRoute component is the blueprint for all private routes in the application. If the user is logged in, go on and display the component in question; otherwise, redirect the user to sign-in page.</p>
            </div>
            <div>
                <h5 className='text-warning'>What is Node? How does Node work?</h5>
                <p>
                    Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive. <br />
                    <br />
                    Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                </p>
            </div>
        </div>
    );
};

export default Blog;