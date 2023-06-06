import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
    <React.StrictMode>
        <div className="app-wrapper container-fluid">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <App/>
                    </div>
                </div>
            </div>
        </div>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
