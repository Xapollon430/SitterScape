let React = require("react");

const App = () => React.createElement("div", null, `Hello vehbi`);

counter = 0;
const x = () => {
  if ((counter = 100)) {
    return;
  }
  console.log(counter);
  counter++;
  x();
};

x();

module.exports = App;
