import React from "react";
import "./Error.css"; // Place CSS in this file or use CSS-in-JS styles
import {Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className="container">
      <div className="gif">
        <img
          src="https://i.postimg.cc/2yrFyxKv/giphy.gif"
          alt="gif_ing"
        />
      </div>
      <div className="content">
        <h1 className="main-heading">This page is gone.</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="https://www.google.co.in/" target="_blank" rel="noopener noreferrer">
          <Link to='/'><button>
            Back to home <i className="far fa-hand-point-right"></i>
          </button></Link>
        </a>
      </div>
    </div>
  );
};

export default ErrorPage;
