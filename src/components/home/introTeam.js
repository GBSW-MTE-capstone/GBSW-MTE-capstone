import chcImg from "../../assets/member-photo/chc.jpg";
import pmjImg from "../../assets/member-photo/pmj.jpg";
import ldjImg from "../../assets/member-photo/ldj.jpg";
const IntroTeam = () => {
  return (
    <div>
      <h3 className="chapter">IV. 팀소개</h3>
      <div className="member-list">
        <div>
          <p>최홍찬 - 팀장</p>
          <img src={chcImg} alt="사진" />
          <p>프론트엔드</p>
        </div>
        <div>
          <p>김창환 - 팀원</p>
          <img
            src="https://cdn.discordapp.com/attachments/810494124184698904/979223788149436517/20211015_112806.jpg"
            alt="사진"
          />
          <p>메타버스 구현</p>
        </div>
        <div>
          <p>박민준 - 팀원</p>
          <img src={pmjImg} alt="사진" />
          <p>메타버스 구현</p>
        </div>
        <div>
          <p>임동주 - 팀원</p>
          <img src={ldjImg} alt="사진" />
          <p>프론트엔드</p>
        </div>
        <div>
          <p>임태현 - 팀원</p>
          <img
            src="https://cdn.discordapp.com/avatars/403025222921486338/97f1184291c5bb771de0af10e2a19e4a.webp?size=128"
            alt="사진"
          />
          <p>백엔드, DB</p>
        </div>
      </div>
    </div>
  );
};

export default IntroTeam;
