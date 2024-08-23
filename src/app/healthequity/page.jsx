'use client'
import React, { useEffect } from 'react';

const Page = () => {
  const link = "https://www.svnit.ac.in/";

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("clicked")
      window.location.href = link; // Redirect to the link
    }, 1000);

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  return (
    <div>
      <p>Page content</p>
      <p>Redirecting to <a href={link} target="_blank" rel="noopener noreferrer">clicked</a> every second.</p>
    </div>
  );
};

export default Page;
