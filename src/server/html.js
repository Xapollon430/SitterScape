import React from "react";
import  ReactDOMServer from "react-dom/server";


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
      <div id="root">${ReactDOMServer.renderToString(<X />)}</div>
      <script src="/static/react-bundle.js"></script>

    </body>
  </html>
  `;
};

export default ServerSideMarkup;
