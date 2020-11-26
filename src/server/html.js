import ReactDOMServer from "react-dom/server";
import React from "react";

const X = () => <button>HUZEYFE</button>;

const ServerSideMarkup = () => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="initial-scale=1,width=device-width" />
  
      <link
        rel="stylesheet"
        href="/static/stylesheets/index.css"
      />
  
      <title>SitterScape</title>
    </head>
    <body>
      <div id="modal-hook"></div>
      <div id="backdrop-hook"></div>
      <div id="root"><h1>123</h1></div>
    </body>
    <script src="/static/react-bundle.js"></script>
  </html>
  
    `;
};

export default ServerSideMarkup;
