

const Blog = () => {
    return (
        <div className="space-y-5 mb-40">
            <h1 className="text-3xl">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
            <ul>
                <li>An access token and a refresh token are used to confirm the identity of a user when they use a web application. An access token is like a password that lets the user do things on the website for a short time, while a refresh token is used to get a new access token once the old one has expired. Its important to keep both tokens safe, and they should be stored on the users computer in a secure way, like in a cookie or local storage. HTTPS should always be used to make sure no one can spy on the tokens while they are being used.</li>
            </ul>
            <h1 className="text-3xl">Compare SQL and NoSQL databases?</h1>
            <ul><li>
                SQL and NoSQL are different types of databases used in computer applications. SQL stores data in tables with a fixed structure, while NoSQL can store data in various ways like documents, key-value pairs etc. SQL is better for applications that need complex data relationships and consistent processing of transactions. NoSQL is better for applications that need to scale up easily and handle changing data structures.
            </li></ul>
            <h1 className="text-3xl">What is express js? What is Nest JS </h1>
            <ul><li>
                Express.js is a popular web framework for Node.js that simplifies the process of creating web applications and APIs. It provides a simple, minimalistic interface for handling HTTP requests and responses, as well as middleware for common tasks such as logging, authentication, and error handling. Express.js allows developers to easily create scalable, high-performance web applications using JavaScript.

                Nest.js is a newer web framework for Node.js that is built on top of Express.js. It provides a modular architecture, dependency injection, and other features commonly found in server-side frameworks such as Angular. Nest.js also supports TypeScript out of the box, which enables developers to write more structured, maintainable code using interfaces and strong typing.

                In essence, both Express.js and Nest.js are web frameworks for building server-side applications in JavaScript/TypeScript with Node.js. However, Nest.js provides some additional features and tools that make it easier to build large-scale, enterprise-level applications while maintaining code quality and scalability.
            </li></ul>
            <h1 className="text-3xl">What is MongoDB aggregate and how does it work?</h1>
            <ul><li>
                MongoDB`s aggregate is a tool used to find and return computed data results based on input parameters. It works by taking multiple stages where each stage represents a specific operation or transformation to be applied to the input data set, like filtering, grouping, sorting, and calculating sums or averages of values. These operations are applied in a sequence to manipulate data and transform it in different ways. Aggregate provides a flexible way to perform complex data analysis and transformations on MongoDB collections.
            </li></ul>
        </div>
    );
};

export default Blog;