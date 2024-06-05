import React, { useState } from "react";

function isValidHttpUrl(string) {
  let url;
  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }
  return url.protocol === "http:" || url.protocol === "https:";
}

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "40px" }}>{count}</span>
      <button className="btn btn-large" onClick={() => setCount((c) => c + 1)}>
        +1
      </button>
    </div>
  );
}

export default function BusinessCard() {
  const [link, setLink] = useState("");

  async function getLink() {
    // Fetch advice from API
    const res = await fetch("https://wwww.fackbook.com");
    const data = await res.json();
    setLink(data.slip.advice);
  }

  return (
    <section className="bdg-sect" id="ipo08g">
      <div className="container-width" id="i4xku8">
        <h1 className="bdg-title">McKasson & Klein LLP</h1>
        <h4>
          "A boutique law firm established in 1998 located in Irvine, CA, near
          the ports of Long Beach and Los Angeles"
        </h4>
        <div className="badges" id="ike41j">
          <div className="badge" id="iiofth">
            <div className="badge-header" id="i7keu4"></div>
            <img src="team1.jpg" className="badge-avatar" alt="" />
            <div className="badge-body">
              <div className="badge-name">Neil Klein</div>
              <div className="badge-role">PARTNER</div>
              <div className="badge-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore ipsum dolor sit
              </div>
            </div>
            <div className="badge-foot">
              <span className="badge-link">f</span>
              <span className="badge-link">t</span>
              <span className="badge-link">ln</span>
            </div>
          </div>
          <div className="badge" id="i9nqw2">
            <div className="badge-header" id="iaifnm"></div>
            <img src="team2.jpg" className="badge-avatar" alt="" />
            <div className="badge-body">
              <div className="badge-name">Jim Smith</div>
              <div className="badge-role">Software Engineer</div>
              <div className="badge-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore ipsum dolor sit
              </div>
            </div>
            <div className="badge-foot">
              <span className="badge-link" type="button" onClick={getLink}>
                I
              </span>
              <span className="badge-link">X</span>
              <span className="badge-link">ln</span>
            </div>
          </div>
          <div className="badge">
            <div className="badge-header"></div>
            <img src="team3.jpg" className="badge-avatar" alt="" />
            <div className="badge-body">
              <div className="badge-name">Jessica White</div>
              <div className="badge-role">Web Designer</div>
              <div className="badge-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore ipsum dolor sit
              </div>
            </div>
            <div className="badge-foot">
              <span className="badge-link">f</span>
              <span className="badge-link">t</span>
              <span className="badge-link">ln</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
