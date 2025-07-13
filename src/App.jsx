import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Landing from "./Components/Landing";
import Expertise from "./Components/Expertise";
import Technologies from "./Components/TechStack";
import Projects from "./Components/Projects";
import EducAndExpi from "./Components/EducAndExpi";
import Contacts from "./Components/Contacts";

function App() {
 
  return(
    <>   
      <Header /> 
          <Landing />
          <Expertise />
          <Technologies />
          <Projects></Projects>
          <EducAndExpi />
          <Contacts />
      <Footer /> 
    </>
  
  );
}

export default App
