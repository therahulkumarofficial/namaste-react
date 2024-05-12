const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'am h1 tag"),
    React.createElement("h2", {title: "h2 tag"}, "I'am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'am h1 tag"),
    React.createElement("h2", {title: "h2 tag"}, "I'am h2 tag"),
  ]),
]);
const subroot = ReactDOM.createRoot(document.getElementById("subroot"));
subroot.render(parent);

const heading = React.createElement(
  "h1",
  { id: "heading", title: "Hello" },
  "Hello World by React!"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
