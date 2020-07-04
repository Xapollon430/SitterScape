export const renderHTML = (markup) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    
        <link
          href="https://fonts.googleapis.com/css?family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css"
        />
      <link rel="stylesheet" href="./static/stylesheets/index.css">
        </style>
        <title>Sit</title>
      </head>
      <body>
        <div id="modal-hook"></div>
        <div id="backdrop-hook"></div>
        <div id="root">${markup}</div>
        <script src="./dist/bundle.js"></script>
      </body>
    </html>
    `;
};
