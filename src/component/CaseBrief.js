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
  }, []);

  return (
    <section className="bdg-sect" id="ipo08g">
      <div className="am-container" id="i4xku8">
        <div>
          <h1>Successful Cases</h1>
          <CaseCard />
        </div>
        <div>
          <h1>{advice}</h1>
          <button onClick={getCase}>Get advice</button>
          <Message count={count} />
        </div>
      </div>
    </section>
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
    <div
      data-gjs-highlightable="true"
      id="iberq"
      data-gjs-type="default"
      draggable="true"
      className="cards"
    >
      <div
        data-gjs-highlightable="true"
        id="i6knw"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="i00lg"
          data-gjs-type="default"
          draggable="true"
          className="card-header"
        />
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
            Bunge S.A. v. Pacific Gulf Shipping (Singapore) PTE LTD et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="ikq9g"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. Or.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i3ov5"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="if0ne"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="i8kfj"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch2"
        />
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
            Equitz et al. v. Seaco America, LLC et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="imt61"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. Cal.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="iip9s"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="iqvjz"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="igfpt"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch3"
        />
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
            Stoneville USA, Inc. v. Compacstone USA, Inc.
          </div>
          <div
            data-gjs-highlightable="true"
            id="ia8jr"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. Cal.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="iuzik"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="inbex"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="ie57p"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch4"
        />
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
            Francke v. Royal Caribbean Cruises, Ltd. et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="i8rpe"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. FL)
          </div>
          <div
            data-gjs-highlightable="true"
            id="iqilu"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="idmmc"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="iqakd"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch5"
        />
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
            TMF Trustee Limited v. M/T Megacore Philomena et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="iygr8"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. Cal.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i7oyh"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="ixnt6"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="iq39l"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch6"
        />
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
            McShane v. NCL (BAHAMAS), LTD. et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="irwnj"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. FL)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i2kfw"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="ixnt7"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="iq40l"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch7"
        />
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
            Campbell v. Logue, Capt. Marquez et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="irwj7"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. Cal)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i7kfw"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="ixnt8"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="iq41l"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch8"
        />
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
            DHL Express (USA), Inc., et al. vs. Aerotradex, Inc., et al.
          </div>
          <div
            data-gjs-highlightable="true"
            id="irwn8"
            data-gjs-type="text"
            draggable="true"
            className="card-sub-title"
          >
            (D. Cal.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i8kfw"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="ixnt9"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="iq42l"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch9"
        />
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
            (C.D.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i9kfw"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
      <div
        data-gjs-highlightable="true"
        id="ixn10"
        data-gjs-type="default"
        draggable="true"
        className="card"
      >
        <div
          data-gjs-highlightable="true"
          id="iq43l"
          data-gjs-type="default"
          draggable="true"
          className="card-header ch10"
        />
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
            (D. Cal.)
          </div>
          <div
            data-gjs-highlightable="true"
            id="i21fw"
            data-gjs-type="text"
            draggable="true"
            className="card-desc"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore
          </div>
        </div>
      </div>
    </div>
  );
}
