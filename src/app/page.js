import Banner from "../components/Home/Banner/Banner";
import ProrammingPage from "./programmingDocs/page";
import About from "../components/Home/About/About";
import Chatbot from "../components/Home/ChatBot/Chatbot";
import Framework from "../components/Home/Framework/Framework";
import JoinCommunity from "../components/Home/Banner/JoinComunity/JoinComunity";

const HomePage = () => {
  return (
    <main>
      <Banner></Banner>
      <ProrammingPage />
      <Framework />
      <JoinCommunity />
      <About />
      <Chatbot></Chatbot>
    </main>
  );
};
export default HomePage;
