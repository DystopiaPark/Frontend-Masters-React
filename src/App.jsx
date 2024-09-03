// import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import SearchParams from "./SearchParams";
import Details from "./Details";
// import Pet from "./Pet";

const App = () => {
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h1", {}, "Adopt Me!"),
  //   React.createElement(Pet, {
  //     animal: "Dog",
  //     name: "Luna",
  //     breed: "Havanese",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Bird",
  //     name: "Pepper",
  //     breed: "Cockatiel",
  //   }),
  //   React.createElement(Pet, {
  //     animal: "Cat",
  //     name: "Doink",
  //     breed: "Mixed",
  //   })
  // );
  return (
    <BrowserRouter>
      <h1>Adopt Me!</h1>
      <Routes>
        <Route path="/details/:id" element={<Details />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
