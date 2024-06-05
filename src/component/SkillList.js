import React, { useState } from "react";

export default function SkillList() {
  return (
    <section>
      <h2>Practice Areas</h2>
      <div className="profile-summary">
        <Skill skill="Maritime & Transportation" emoji="😃" color="#7fa3dc" />
        <Skill
          skill="International Transactions & Litigation"
          emoji="💪"
          color="#7fa3dc"
        />
        <Skill
          skill="Intellectual Property & Trademarks"
          emoji="🦾"
          color="#7fa3dc"
        />
        <Skill skill="Employment & Labor Law" emoji="👍" color="#7fa3dc" />
      </div>
    </section>
  );
}

function Skill(props) {
  return (
    <div className="skill-list" style={{ color: "whitesmoke" }}>
      <span>{props.skill}</span>
    </div>
  );
}
