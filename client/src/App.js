import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [datetime, setDatetime] = useState("");
  const [desc, setDesc] = useState("");
  const [transactions, setTransactions] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = process.env.REACT_APP_API_URL + "transaction";
    const response = await axios.post(url, {
      name: name,
      desc: desc,
      datetime: datetime,
      price: price,
    });
    setDatetime("");
    setDesc("");
    setName("");
    getTransactions();
  };

  const getTransactions = async () => {
    try {
      const url = process.env.REACT_APP_API_URL + "transactions";
      const response = await axios.get(url);
      setTransactions(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    getTransactions();
  }, []);

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
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder={"price"}
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
        {transactions.length > 0 &&
          transactions.map((item) => (
            <div className="transaction">
              <div className="left">
                <div className="name">{item.name}</div>
                <div className="description">{item.desc}</div>
              </div>
              <div className="right">
                <div className={"price" + (item.price < 0 ? "red" : "green")}>
                  {item.price}
                </div>
                <div className="datetime">{item.datetime}</div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

export default App;
