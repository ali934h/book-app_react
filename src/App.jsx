// App.jsx
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListBooks from "./components/ListBooks";
function App() {
  return (
    <div className=" bg-th1 py-4 min-h-screen flex justify-center items-stretch font-BricolageGrotesque text-th4">
      <div className="container flex flex-col">
        <Header />
        <ListBooks />
        <Footer />
      </div>
    </div>
  );
}

export default App;
