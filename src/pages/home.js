import imgSquare from "../assets/metaverse/square2.png";
import Header from "../components/header";

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
        <h3 className="chapter">I. 프로젝트 소개</h3>
        <div className="chapter-container">
          <div className="imgDiv">
            <img src={imgSquare} alt="메타버스 광장" className="imgSquare" />
            <p>메타버스의 중앙 광장 모습</p>
          </div>
          <p className="text">
            &nbsp;2022년 경북소프트웨어고등학교 1학기 캡스톤 프로젝트로 진행한
            <br />
            <strong style={{ fontSize: "18px" }}>
              의성청년 뉴스 & 게시판과 메타버스
            </strong>
            입니다. <br />
            &nbsp;의성에 거주하는 또는 의성에 거주를 하고싶어하는 청년들을
            위하여
            <br />
            의성의 여러 청년정책과 소식을 알려드리기 위해
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
