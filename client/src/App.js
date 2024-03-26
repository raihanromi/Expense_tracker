import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const price = name.split(" ")[0];
    const url = process.env.REACT_APP_API_URL + "transaction";
    fetch(url, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        name: name.substring(price.length + 1),
        datetime,
        desc,
        price,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setDatetime("");
        setDesc("");
        setName("");
      });
  };

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={"product"}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            placeholder={"description"}
          />
        </div>
        <button type="submit">Add new transaction</button>
      </form>
      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="name">New Samsung TV</div>
            <div className="description">it was time for new tv</div>
          </div>
          <div className="right">
            <div className="price"> $500</div>
            <div className="datetime">2022-12-18</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">website</div>
            <div className="description">it was time for new website</div>
          </div>
          <div className="right">
            <div className="price"> $500</div>
            <div className="datetime">2022-12-18</div>
          </div>
        </div>
        <div className="transaction">
          <div className="left">
            <div className="name">Iphone </div>
            <div className="description">it was time for new iphone</div>
          </div>
          <div className="right">
            <div className="price"> -$900</div>
            <div className="datetime">2022-12-18</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
