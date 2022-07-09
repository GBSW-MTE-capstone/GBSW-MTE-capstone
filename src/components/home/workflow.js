import React from "react";
import { Ifram } from "./ifram";
import db from "../../assets/db.png";
export const Workflow = () => {
  return (
    <div>
      <h3 className="chapter">VI. Workflow</h3>
      <Ifram />
      <h3 className="chapter">VII. DB</h3>
      <img
        src={db}
        alt="db"
        style={{ display: "block", margin: "15px auto" }}
      />
    </div>
  );
};
