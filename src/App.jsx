import "./App.css";
import JokesGeneratorImage from "../public/jokeGenrator.png";
import JokesGenerator from "./components/JokesGenrator";

function App() {
  return (
    <>
      <div className="App">
        <div class="flex flex-row gap-3 items-center justify-center">
          <img src={JokesGeneratorImage} alt="quotes genrator app" class="w-14 h-14" />
          <span class="font-SuicideSquad">Jokes Generator</span>
        </div>
        <JokesGenerator />
      </div>
    </>
  );
}

export default App;
