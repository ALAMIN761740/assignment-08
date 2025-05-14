import React from 'react';

const blogs = [
  {
    question: "What is useState and how does it work in React?",
    answer: `useState is a React hook that allows functional components to have local state. 
It returns a state variable and a function to update it. 
When the state changes, React re-renders the component to reflect the new state.`,
  },
  {
    question: "What is the purpose of useEffect in React?",
    answer: `useEffect is a hook used to handle side effects such as data fetching, subscriptions, or manually updating the DOM. 
It runs after the component renders and can optionally clean up when the component unmounts or when dependencies change.`,
  },
  {
    question: "What is a custom hook in React and when should you use one?",
    answer: `A custom hook is a reusable function that starts with 'use' and can use other hooks inside it. 
Use it to extract and reuse logic between components, making your code cleaner and easier to manage.`,
  },
  {
    question: "Difference between controlled and uncontrolled components. Which one is better?",
    answer: `Controlled components are managed by React state, while uncontrolled components use the DOM directly (via refs). 
Controlled components are generally better for form handling as they allow React to control the data flow.`,
  },
  {
    question: "Tell us something about useFormStatus() in React.",
    answer: `useFormStatus is a React hook that gives you access to the status of a form submission in React (especially useful in server components in Next.js). 
It helps in showing UI feedback like loading spinners or disabling buttons during submission.`,
  }
];

const Blogs = () => {
  return (
    <div className="p-10 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center">Developer Blog Articles</h2>
      {blogs.map((blog, index) => (
        <div key={index} className="mb-6 p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold mb-2 text-blue-600">{blog.question}</h3>
          <p className="text-gray-700 leading-relaxed">{blog.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
