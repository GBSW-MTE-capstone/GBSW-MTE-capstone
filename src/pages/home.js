import Footer from "../components/footer";
import Header from "../components/header";
import Intro from "../components/home/intro";
import IntroTeam from "../components/home/introTeam";
import MainFunc from "../components/home/mainFunc";
import Platform from "../components/home/platform";

const Home = () => {
  return (
    <div className="container">
      <Header />
      <h2 style={{ margin: 5 }}>
        깃허브 페이지 주소 :{" "}
        <a
          rel="noreferrer"
          href="https://github.com/GBSW-MTE-capstone"
          target={"_blank"}
        >
          https://github.com/GBSW-MTE-capstone
        </a>
      </h2>
      <div className="contents">
        <Intro />
        <MainFunc />
        <Platform />
        <IntroTeam />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
