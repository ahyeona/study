class App extends React.Component {
  render() {
    return (
      <ul>
        <li>list01</li>
      </ul>
    );
  }
}

// 루트 설정
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
