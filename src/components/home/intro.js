import imgSquare from "../../assets/logo.png";

const Intro = () => {
  return (
    <>
      <h3 className="chapter">I. 프로젝트 소개</h3>
      <div className="chapter-container">
        <div className="imgDiv">
          <img src={imgSquare} alt="메타버스 광장" className="imgSquare" />
          <p>메타버스의 중앙 광장 모습</p>
        </div>
        <p className="text">
          <hr />
          &nbsp;2022년 경북소프트웨어고등학교 1학기 캡스톤 프로젝트로 진행한
          <br />
          <strong style={{ fontSize: "1.12em" }}>
            의성청년 뉴스 & 게시판과 메타버스
          </strong>
          입니다. <br />
          &nbsp;의성에 거주하는 또는 의성에 거주를 하고싶어하는 청년들에게
          <br />
          의성의 여러 청년정책과 관련소식을 알려드리기 위해 제작하였습니다.
          <hr />
        </p>
      </div>
    </>
  );
};

export default Intro;
