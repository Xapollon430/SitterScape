const root = {
  login: () => "sa oc",
  createEvent: (args) => {
    console.log(args);
    return "Test";
  },
};

module.exports = root;
