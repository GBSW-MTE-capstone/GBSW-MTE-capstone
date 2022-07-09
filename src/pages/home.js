import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/home/intro";
import IntroTeam from "../components/home/introTeam";
import MainFunc from "../components/home/mainFunc";
import Platform from "../components/home/platform";
import { Workflow } from "../components/home/workflow";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <h2 style={{ margin: 5 }}>
        깃허브 레포지토리 주소 :{" "}
        <a
          rel="noreferrer"
          href="https://github.com/GBSW-MTE-capstone"
          target={"_blank"}
        >
          https://github.com/GBSW-MTE-capstone
        </a>
      </h2>
      <h2 style={{ margin: 5 }}>
        프로젝트 결과물 주소 :{" "}
        <a
          rel="noreferrer"
          href="https://capstion-uisong-into.netlify.app/"
          target={"_blank"}
        >
          https://capstion-uisong-into.netlify.app/
        </a>
      </h2>
      <div className="contents">
        <Intro />
        <MainFunc />
        <Platform />
        <IntroTeam />
        <Workflow />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
