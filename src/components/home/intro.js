import imgSquare from "../../assets/logo.png";

const Intro = () => {
  return (
    <>
      <h3 className="chapter">I. 프로젝트 소개</h3>
      <div className="chapter-container">
        <div className="imgDiv">
          <img src={imgSquare} alt="team logo" className="imgSquare" />
          <p>뭉1탱(탱)이팀 로고</p>
        </div>
        <p className="text">
          <hr />
          &nbsp;2022년 경북소프트웨어고등학교 1학기 캡스톤 프로젝트로 진행한
          <br />
          <strong style={{ fontSize: "1.42em" }}>의성 홍보 사이트</strong>
          입니다. <br />
          &nbsp;의성에 여러 볼거리와 먹거리 등의 관광거리들이 존재하지만
          <br />
          의성하면 떠오르는 것은 마늘밖에 없다고 하는 친구들이 많았다.
          <br />
          이러한 사실이 안타까워 의성을 알릴 수 있는 사이트를 만들고자 하였다.
          <hr />
        </p>
      </div>
    </>
  );
};

export default Intro;
