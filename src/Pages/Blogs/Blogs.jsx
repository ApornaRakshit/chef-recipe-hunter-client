import React from 'react';

const Blogs = () => {
    return (
        <div className='m-5 text-center'>
            <h4> Differences between uncontrolled and controlled components</h4>
            <p>Controlled component Does not maintain its internal state and better control over the form elements and data. where uncontrolled component maintains its internal state and Limited control over the form elements and data.</p><br />
            <h4>How to validate React props using PropTypes?</h4>
            <p>We can use React props, short for properties, to send data from one component to another. If a component receives the wrong type of props, it can cause bugs and unexpected errors in your app.</p>
             <h4>Difference between nodejs and express js</h4><br />
             <p>ExpressJS is a web application framework for NodeJS. That’s what mainly makes the difference between Express JS and Node JS. The former provides various features that make web application development fast and easy, which otherwise takes more time using only the latter. It provides a robust set of features for web and mobile applications.</p><br /><p>NodeJS is open-source, cross-platform JavaScript code that runs on servers. It uses an asynchronous event-driven model and is designed to build scalable network applications. It’s built on Google Chrome’s V8 engine, which makes it fast and efficient to develop apps.</p>
            <h4>What is a custom hook, and why will you create a custom hook?</h4>
            <p>Custom React JS hooks can help developers save time, are reliable, reusable, and make the code clean. Creating custom React JS hooks is relatively easy, and can search for many open sources where can get some custom hooks from the library already created by developers.<br />
            If have one or multiple React hooks that will be used at multiple locations in a code, should use custom React JS hooks. This helps in making the code more readable and make the code clean.</p>
        </div>
    );
};

export default Blogs;