import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Product from "./components/Product";
import Feature from "./components/Feature";
import Cover from "./components/Cover";
import Faq from "./components/Faq";
import Comment from "./components/Comment";
import Client from "./components/Client";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Cover />
      <Product />
      <Feature />
      <Faq />
      <Comment />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
