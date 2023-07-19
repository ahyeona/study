class App extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, "list01"));
  }
}

// 루트 설정
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render( /*#__PURE__*/React.createElement(App, null));
