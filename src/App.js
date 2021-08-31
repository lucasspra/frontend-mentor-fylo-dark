import Footer from "./components/layout/Footer";
import GlobalStyle from "./components/layout/GlobalStyle";
import Header from "./components/layout/Header";
import Intro from "./components/sections/intro";
import Benefits from "./components/sections/benefits";
import GetStarted from "./components/sections/get-started";
import HowItWorks from "./components/sections/how-it-works";
import Testimonials from "./components/sections/testimonials";

function App() {
  return (
    <div>
      <GlobalStyle />
      <Header />

      <main>
        <Intro />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <GetStarted />
      </main>

      <Footer />
    </div>
  );
}

export default App;
