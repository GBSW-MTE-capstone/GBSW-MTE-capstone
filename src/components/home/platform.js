import { SiMariadb } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa";
const Platform = () => {
  return (
    <>
      <div style={{ display: "inline-block", width: "33%" }}>
        <h3 className="chapter">III. 사용기술</h3>
        <ul className="stack">
          <li>
            <span>
              <FaReact />
            </span>
            react
          </li>
          <li>
            <span>
              <FaNodeJs />
            </span>
            express
          </li>
          <li>
            <span>
              <SiMariadb />
            </span>
            mariaDB
          </li>
        </ul>
      </div>
      <div style={{ display: "inline-block", width: "33%" }}>
        <h3 className="chapter">IV. 플랫폼</h3>
        <ul>
          <li>WEB</li>
        </ul>
      </div>
    </>
  );
};

export default Platform;
