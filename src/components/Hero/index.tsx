import React from "react";

const Hero: React.FC = () => {
  return (
    <div
      className="bg-cover w-full opacity-75"
      style={{
        height: "100vh",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export default Hero;
