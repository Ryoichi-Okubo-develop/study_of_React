import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import Hello from './components/Hello';
// import Name from './components/Name';
// import Message from './components/Message';
// import Parent from './components/ContainerSample';
import Page from './components/ContextSample';
import Counter from './components/UseStateSample';
import Counter2 from './components/UseReducerSample';
import reportWebVitals from './reportWebVitals';
// import { Parent } from './components/UseCallbackSample';
import { UseMemoSample } from './components/UseMemoSample';
import { Clock } from './components/Clock';
import { ParentContext } from './components/UseContextSample';
import { ImageUploader } from './components/UseRefSample';
import { Parent } from './components/UseImperativeHandleSample';
import { Input } from './components/useDebugValueSample';
// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     {/* <App /> */}
//   </React.StrictMode>
// );

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Page />
      {/* <Counter initialValue={0} />
      <Counter2 initialValue={0} /> */}
      <UseMemoSample></UseMemoSample>
      <Clock></Clock>
      <ParentContext></ParentContext>
      <ImageUploader></ImageUploader>
      <Parent></Parent>
      <Input></Input>
    </React.StrictMode>
  );
}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
