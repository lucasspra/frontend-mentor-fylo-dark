import GlobalStyle from "./components/layout/GlobalStyle";
import Header from "./components/layout/Header";
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
    </div>
  );
}

export default App;
