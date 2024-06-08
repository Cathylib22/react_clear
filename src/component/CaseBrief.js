import { useEffect, useState } from "react";

export default function CaseBrief() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getCase() {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  }
  useEffect(function () {
    getCase();
  }, []); // empty dependency array ensures this runs only once on mount

  return (
    <>
      <div className="am-container">
        <h2>Successful Cases</h2>
        <CaseCard />
      </div>
      <div>
        <h4>{advice}</h4>
        <button onClick={getCase}>Get advice</button>
        <Message count={count} />
      </div>
    </>
  );
}

function Message(props) {
  return (
    <p>
      You have read <strong>{props.count}</strong> pieces of advice.
    </p>
  );
}

function CaseCard() {
  return (
    <section
      data-gjs-highlightable="true"
      id="i85dx"
      data-gjs-type="default"
      draggable="true"
      className="flex-sect"
    >
      <div
        data-gjs-highlightable="true"
        id="izxfb"
        data-gjs-type="default"
        draggable="true"
        className="container-width"
      >
        <div
          data-gjs-highlightable="true"
          id="iberq"
          data-gjs-type="default"
          draggable="true"
          className="cards"
        >
          <div
            data-gjs-highlightable="true"
            id="ijigj"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="iavfz"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Bunge S.A. v. Pacific Gulf Shipping (Singapore) PTE Ltd.
            </div>
            <div
              data-gjs-highlightable="true"
              id="ikq9g"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Or.)</strong>
            </div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i00bo"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i1sbo"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Equitz v. Seaco America LLC
            </div>
            <div
              data-gjs-highlightable="true"
              id="imt61"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Cal.)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="iip9s"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="ixw7e"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="ii8vi"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Stoneville USA Inc. v. Compacstone USA Inc.
            </div>
            <div
              data-gjs-highlightable="true"
              id="ia8jr"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Cal.)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="iuzik"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i0l97"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i33tu"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Francke v. Royal Caribbean Cruises Ltd.
            </div>
            <div
              data-gjs-highlightable="true"
              id="i8rpe"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. FL)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="iqilu"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i95lw"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="il9v5"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              TMF Trustee Ltd. v. M/T Megacore Philomena
            </div>
            <div
              data-gjs-highlightable="true"
              id="iygr8"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Cal.)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="i7oyh"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i6e6k"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i4bsy"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              McShane v. NCL (BAHAMAS) Ltd.
            </div>
            <div
              data-gjs-highlightable="true"
              id="irwnj"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. FL)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="i2kfw"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i6e7k"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i7bsy"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Campbell v. Logue, Capt. Marquez
            </div>
            <div
              data-gjs-highlightable="true"
              id="irwj7"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Cal)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="i7kfw"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i6e8k"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i8bsy"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              DHL Express (USA) Inc. v. Aerotradex Inc.
            </div>
            <div
              data-gjs-highlightable="true"
              id="irwn8"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Cal.)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="i8kfw"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i6e9k"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i9bsy"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Krish v. Balasubramaniam
            </div>
            <div
              data-gjs-highlightable="true"
              id="irwnj"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(C.D.)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="i9kfw"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
          <div
            data-gjs-highlightable="true"
            id="i6e10"
            data-gjs-type="default"
            draggable="true"
            className="card-body"
          >
            <div
              data-gjs-highlightable="true"
              id="i10sy"
              data-gjs-type="text"
              draggable="true"
              className="card-title"
            >
              Trans-Tec v. M/V Harmony Container
            </div>
            <div
              data-gjs-highlightable="true"
              id="irwnj"
              data-gjs-type="text"
              draggable="true"
              className="card-sub-title"
            >
              <strong>(D. Cal.)</strong>
            </div>
            <div
              data-gjs-highlightable="true"
              id="i21fw"
              data-gjs-type="text"
              draggable="true"
              className="card-desc"
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
