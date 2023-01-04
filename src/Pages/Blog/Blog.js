import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='my-5'>

                    <h1>What is Cors?</h1>
                    <h6>CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.</h6>


                    <h1>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    <h6>Firebase helps you develop high-quality apps, grow your user base, and earn more money. Each feature works independently, and they work even better together.</h6>
                    <h6>
                        Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
                    </h6>


                    <h1>How does the private route work?</h1>
                    <h6>The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</h6>


                    <h1>What is node? How does node js work?</h1>
                    <h6>Node.js is an open source server environment. Node.js is free. Node.js can generate dynamic page content.</h6>
                    <h6>Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</h6>

        </Container>
    );
};

export default Blog;