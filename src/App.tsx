import Footer from "./components/Footer";
import Header from "./components/Header";
import { Login } from "./components/Login";
import Main from "./components/Main";

function App() {
  const isLogged = true;

  return (
    <main className="flex min-h-screen flex-col bg-slate-800 text-white">
      <Header />
      {isLogged ? <Main /> : <Login />}
      <Footer />
    </main>
  );
}

export default App;
