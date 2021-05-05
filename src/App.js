import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="box">
        <label for="email">Email</label>
        <input
          className="g-input"
          type="text"
          id="email"
          placeholder="enter email"
        />

        <label for="password">Password</label>
        <input
          className="g-input"
          type="password"
          id="password"
          placeholder="enter password"
        />

        <div className="btn">
          <button>sign in</button>
        </div>
      </div>
    </div>
  );
}
