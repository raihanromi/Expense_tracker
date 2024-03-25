import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
            placeholder={"new tv"}
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
