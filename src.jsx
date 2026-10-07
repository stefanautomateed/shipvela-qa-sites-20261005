import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
function App() {
 const [count, setCount] = useState(0);
 return <main style={{fontFamily:'system-ui',padding:'8vw',maxWidth:720}}>
  <h1>Shipvela React QA</h1>
  <p>New build verified: react-qa-20261007</p>
  <p>SPA route: {location.pathname}</p>
  <a href='/deep/route'>Open deep route</a>
  <p>Public environment: {import.meta.env.VITE_QA_LABEL || 'not set'}</p>
  <button onClick={() => setCount(count + 1)}>Count: {count}</button>
 </main>;
}
createRoot(document.getElementById('root')).render(<App />);
