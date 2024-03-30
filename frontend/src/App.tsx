import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

const fetchHealth = async () => {
  const response = await axios.get(
    'https://aiso-reminder-server-cloudrun-obcs3lfy6a-uc.a.run.app/',
  );
  return response.data;
};

function App() {
  const [count, setCount] = useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: ['helloWorld'], // 配列
    queryFn: fetchHealth, // データ取得の関数
  });

  // (['repoData'], () =>
  //   axios.get('https://api.github.com/repos/tannerlinsley/react-query'),
  // );

  if (isLoading) {
    return 'loading...';
  }

  if (error) {
    return 'error!';
  }

  console.log(data);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
