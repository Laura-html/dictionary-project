import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="app-logo img-fluid" alt="logo" />
        </header>

        <main>
          <Dictionary />
        </main>

        <footer className="app-footer">
          {" "}
          Created by Laura, open-sourced on{" "}
          <a href="https://github.com/Laura-html/dictionary-project">
            Github
          </a>{" "}
          and hosted on{" "}
          <a href="https://dictionary-app-3.netlify.app/"> Netlify</a>.{" "}
        </footer>
      </div>
    </div>
  );
}
