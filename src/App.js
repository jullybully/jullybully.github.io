import React from 'react';
import './App.css';
import Card from './components/Card';
import first1 from './first.jpg';
import second from './second.jpg';
import third from './3.jpg';
import last from './last.jpg';

const App = () => {
  return (
    <div className="app">
      <h1>Hey there!</h1>
      <p>Gvidas Pocius (<small>2023</small>)</p>
      <p className="app__content app ">
        I understand that as a hiring manager, you have a lot of candidates to choose from. But I believe that what sets me apart from others is my passion for learning and my ability to quickly acquire new skills. What I bring to the table is not just my existing knowledge and skills, but also my eagerness to learn and grow. I would be honored to have the opportunity to meet with you and discuss how I can bring value to your team.
      </p>
      <Card
        imageSrc={first1} 
        projectDescription="I chose to work on this project because I noticed that the beatosvirtuves.lt website lacked a good enough responsive design when viewed on a computer browser. HTML5/CSS3/JS"
        buttonLink="https://beatos-lt.vercel.app/"
      />
      <Card
        imageSrc={second}
        projectDescription="The Product Catalog Website is a responsive web application built using React. It utilizes React Router DOM for navigation and fetches product data from a JSON file. The project emphasizes a custom design without relying on any CSS libraries, showcasing your ability to create a visually appealing and fully functional website using pure React and custom styling."
        buttonLink="https://e-commerce-b4nzlr7gi-jullybully.vercel.app/"
      />
      <Card
        imageSrc={third}
        projectDescription="The Fastest Delivery Calculator is a React-based web application that leverages the Router DOM v6 and utilizes APIs to calculate the estimated delivery time between restaurant locations and the user's location. The application focuses on providing users with the fastest delivery options based on their location and restaurant types."
        buttonLink="https://01-virid.vercel.app/"
      />
      <Card
        imageSrc={last}
        projectDescription="The Feature Showcase Website is a React-based web application developed using a mobile-first workflow, implementing semantic HTML5 markup, Flexbox, and CSS Grid for responsive layouts. It utilizes the Tailwind CSS framework for streamlined styling and incorporates dynamically sized accordion items to present information in an organized manner."
        buttonLink="https://vercel.com/jullybully/02#"
      />
    </div>
  );
};

export default App;