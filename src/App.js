import "./App.css";
import Header from "./Header";
import Banner from "./Banner";
import Category from "./Category";
import Interview from "./Interview";
import Footer from "./Footer";
import ContentBoxList from "./ContentBoxList";
import Community from "./Community";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Category />
      <ContentBoxList />
      <Interview />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
