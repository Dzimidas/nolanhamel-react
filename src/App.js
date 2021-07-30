import Top from "./components/Top.js";
import Hello from "./components/Hello.js";
import About from "./components/About.js";
import Team from "./components/Team.js";
import Copyright from "./components/Copyright.js";

function App() {
  return (
    <div>
      <main>
        <Top />
        <Hello />
        <section className="bg-blue-300 pt-10">
          <h2 className="text-center text-2xl font-bold">About</h2>
            <About/>
        </section>
        <Team />
      </main>
      <Copyright />
    </div>
  );
}

export default App;
