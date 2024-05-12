/**
 *
 *
 *
 *
 *
 * <div class="parent">
 *    <div class="child">
 *    <h1>I'am h1 tag</h1>
 *    <h2>I'am h2 tag</h2>
 *    </div>
 *    <div class="child2">
 *    <h1>I'am h1 tag</h1>
 *    <h2>I'am h2 tag</h2>
 *    </div>
 * </div>
 *
 *  ReactElement(object)  ⟹  HTML (Browser Understands)
 *
 *
 *
 *
 *
 */

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
console.log(parent);
const subroot = ReactDOM.createRoot(document.getElementById("subroot"));
subroot.render(parent);

//JSX

// The code you provided is a valid way to create a React component and render it to the DOM
const heading = React.createElement(
  "h1",
  { id: "heading", title: "Hello" },
  "Hello World by React!"
);
console.log(heading); //object
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // converting object to h1 tag
//everything inside root is replace by root.render(heading)
