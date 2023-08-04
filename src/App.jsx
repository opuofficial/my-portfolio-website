import "./App.css";

import CustomCursor from "./components/CustomCursor";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <section>
      <CustomCursor />
      <div className="container">
        <Header />
        <Main />
      </div>
    </section>
  );
}

export default App;
