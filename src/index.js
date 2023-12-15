import React from 'react';
import ReactDOM from 'react-dom/client';
import MyNavbar from './components/navbar';
import MyBody from './components/body';
import MyFooter from './components/footer';
// import reportWebVitals from './reportWebVitals';

const MyMain = () =>{
  const myStyle = {fontSize:'26px', fontFamily: 'Verdana', backgroundColor: 'hsla(177, 96%, 34%, 0.63)'};
  return(
    <div style={myStyle}>
      <MyNavbar/>
      <MyBody/>
      <MyFooter/>
    </div>
  );
};

// ReactDOM.render(<MyMain/>, document.getElementById('root'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MyMain/>
  </React.StrictMode>
);

