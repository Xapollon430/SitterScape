# SitterScape

of SitterScape.com -- https://sitterscape.com/

SitterScape.com is an innovative platform to connect pet sitters and owners.

Trello Board https://trello.com/b/Rdw3a3M6/sitterscape

Icons from https://icons8.com/icons

---

# How To Run

To deploy this application the following steps in the order must be taken:

1- Build the server side application by "npm run server:build". This will create a production folder with the node files transpiled through babel.

2- Build the client side application with "npm run client:build". This will use webpack and babel to produce one output javascript file that will be put into the production folder created by the first step.

---

# Tools used

 AWS S3            To store user profile images
 AWS Lambda        To host the express server
 AWS API Gateway   Server API Routing
 PositionStack     Geocoding API
 MongoDB Atlas     NOSQL Cloud Database 
 Netlify           To host the client application
 Namecheap         DNS Domain provider

---

# Notes - Credits

React state update batching example.
https://codesandbox.io/s/402pn5l989?file=/src/index.js:327-340

React useState callback for fresh state.
https://codesandbox.io/s/hopeful-banzai-kcou6?file=/src/App.js:245-506

React useState under the hood.
https://www.netlify.com/blog/2019/03/11/deep-dive-how-do-react-hooks-really-work/

JS Memory Pointer
https://gist.github.com/siwalikm/dbf0e71f6e7e3406369b2cff1a6eb416

React Router Render vs Component
https://stackoverflow.com/questions/48150567/ react-router-difference-between-component-and-render

Interview Question
https://stackoverflow.com/questions/56026987/array-being-pushed-into-another-array-isnt-displaying

React version 17 no need for React being in scope, also synthetic event removed.
https://medium.com/better-programming/whats-new-in-react-v17-68b7e15576e1

How styled components work
https://medium.com/styled-components/how-styled-components-works-618a69970421

Styled Components Best Practices
https://www.reddit.com/r/reactjs/comments/jp5lbe/best_practices_for_styled_components/

JWT Implementing
https://medium.com/@weinberger.ariel/json-web-token-jwt-the-only-explanation-youll-ever-need-cf53f0822f50
https://www.reddit.com/r/reactjs/comments/jjkddv/how_to_store_jwt_in_the_client_side/
https://stackoverflow.com/questions/27301557/if-you-can-decode-jwt-how-are-they-secure

Articles on various topics of CS
https://stackoverflow.com/questions/13163081/how-does-an-assembler-work-how-is-it-written
https://www.quora.com/How-does-a-CPU-understand-assembly-language-How-is-it-made-to-understand-what-its-supposed-to-do
https://softwareengineering.stackexchange.com/questions/227983/how-do-we-go-from-assembly-to-machine-codecode-generation

Javascript questions
https://github.com/lydiahallie/javascript-questions

Most important article ever
https://medium.com/better-programming/the-best-engineering-advice-i-ever-got-i-dont-really-care-just-make-it-work-2e238f0cf908
