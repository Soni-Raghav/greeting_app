import "./App.css";
const date = new Date();
const hh = date.getHours();
// const mm=date.getMinutes();
// const ss=date.getSeconds();
// const time = date.toLocaleTimeString();//
let message = "";
const cssStyle={};


  if (hh >= 0 && hh <= 12) {
    message = "Good Morning!..";
    cssStyle.color="green"
  } else if (hh > 12 && hh <= 16) {
    message = "Good Afternoon!..";
    cssStyle.color="Red"
    
  } else if (hh > 16 && hh <= 19) {
    message = "Good Evening!..";
    cssStyle.color="blue"
    
  } else if (hh > 19 && hh <= 23) {
    message = "Good Night!..";
    cssStyle.color="white"
   
  }
  

// if
function App() {
  return (
    <>
      <div className="container">
        <div className="greetingBox">
          <h1>Hello Sir, <span style={cssStyle}>{message}</span></h1>
        </div>
      </div>
    </>
  );
}

export default App;
