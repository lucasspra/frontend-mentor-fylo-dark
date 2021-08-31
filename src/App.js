import Footer from "./components/layout/Footer";
import GlobalStyle from "./components/layout/GlobalStyle";
import Header from "./components/layout/Header";
import GetStarted from "./components/sections/get-started";
import HowItWorks from "./components/sections/how-it-works";
import MainContent from "./components/sections/main/index";
import Testimonials from "./components/sections/testimonials";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <MainContent />
      <HowItWorks />
      <Testimonials />
      <GetStarted />

      <Footer />
    </div>
  );
}

export default App;
