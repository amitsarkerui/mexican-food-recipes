import React from "react";
import Pdf from "react-to-pdf";
const ref = React.createRef();
const Blog = () => {
  return (
    <div className="my-24">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-3">Latest Blog</h1>
        <Pdf targetRef={ref} filename="blog.pdf">
          {({ toPdf }) => (
            <button onClick={toPdf} className="btn mb-14">
              Generate Pdf
            </button>
          )}
        </Pdf>
      </div>
      <div ref={ref}>
        <div className="container mx-auto px-4 grid gap-7 grid-cols-1 md:grid-cols-2">
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">
              Differences between uncontrolled and controlled components
            </h1>
            <p className="text-gray-600 text-lg">
              Uncontrolled components and controlled components are two
              approaches for managing form inputs in React. Uncontrolled
              components allow form inputs to manage their own state internally
              using the DOM, making them simpler to implement but providing less
              control and validation. On the other hand, controlled components
              enable the component to control and track the state of form
              inputs, offering more flexibility for validation, dynamic
              behavior, and data manipulation. Controlled components require
              more code but provide greater control over form input interactions
              and data handling. The choice between the two depends on the
              specific needs of the form and the desired level of control and
              validation.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">
              How to validate React props using PropTypes
            </h1>
            <p className="text-gray-600 text-lg">
              To validate React props using PropTypes, you can use the PropTypes
              library. First, import PropTypes from the 'prop-types' package.
              Then, define the expected prop types for a component by setting
              them as static properties on the component using the 'propTypes'
              object. You can specify the data type and whether the prop is
              required. When the component receives props, PropTypes will
              automatically check if they match the specified types and display
              warnings if there are any mismatches. This helps ensure that the
              correct props are passed to the component, making your code more
              reliable and easier to debug.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">
              Difference between nodejs and express js
            </h1>
            <p className="text-gray-600 text-lg">
              Node.js is a runtime environment that enables server-side
              execution of JavaScript. In contrast, Express.js is a framework
              that utilizes Node.js to provide developers with tools and
              features for building web applications and APIs. Node.js acts as
              the foundation, while Express.js builds upon it, simplifying the
              development process by offering a range of functionality, such as
              routing, request handling, and middleware management. Together,
              they enable efficient server-side JavaScript development and
              empower developers to create robust web applications and APIs.
            </p>
          </div>
          <div className="border border-gray-200 p-6 rounded-md">
            <h1 className="text-2xl font-bold mb-4">
              What is a custom hook, and why will you create a custom hook?
            </h1>
            <p className="text-gray-600 text-lg">
              A custom hook is a reusable function in React that allows you to
              share and reuse logic across different components. You create a
              custom hook when you have common code that needs to be used by
              multiple components. It helps to keep your code organized, reduces
              duplication, and promotes reusability. Custom hooks are useful for
              handling complex logic, managing state, fetching data, or
              performing side effects. By creating a custom hook, you can
              simplify your components and make your code more modular and
              easier to maintain.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
