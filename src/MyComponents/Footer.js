import React from 'react';

export default function Footer() {
  const footerStyle = {
    position: "relative",        // stays at bottom of content
    width: "100%",
    marginTop: "50px",           // space from the last todo
    backgroundColor: "#343a40",  // Bootstrap dark shade
    color: "white",
    textAlign: "center",
    padding: "10px 0",
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; TodosList.com</p>
    </footer>
  );
}
