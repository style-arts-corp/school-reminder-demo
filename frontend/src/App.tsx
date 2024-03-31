import { useState } from 'react';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import muiLogo from './assets/mui.svg';
import reactRouterLogo from './assets/react-router.svg';
import reactHookFormLogo from './assets/react-hook-form.svg';
import './App.css';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const fetchHealth = async () => {
  const apiUrl = import.meta.env.API_URL;
  const response = await axios.get(apiUrl);
  return response.data;
};

function App() {
  const [count, setCount] = useState(0);

  const { isLoading, error, data } = useQuery({
    queryKey: ['helloWorld'], // キャッシュのキー
    queryFn: fetchHealth, // データ取得の関数
  });

  if (isLoading) {
    // NOTE: 本当は return <Loading /> とかにするべきだが，サーバーから取得したデータを表示していることを強調するために何もしないようにしている
    console.log('loading...');
  }

  if (error) {
    return 'error!';
  }

  return (
    <>
      <Box>
        {/* Vite も勉強してほしいが，難しいので一旦スキップ */}
        {/* <Link to="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </Link> */}

        <Link to="https://ja.react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </Link>

        <Link to="https://mui.com/material-ui/" target="_blank">
          <img src={muiLogo} className="logo" alt="Mui logo" />
        </Link>

        <Link to="https://reactrouter.com/en/main" target="_blank">
          <img src={reactRouterLogo} className="logo" alt="React Router logo" />
        </Link>
        <Link to="https://react-hook-form.com/" target="_blank">
          <img
            src={reactHookFormLogo}
            className="logo"
            alt="React Hook Form logo"
          />
        </Link>
      </Box>

      <h1>React + MUI + React Router + React Hook Form</h1>
      <Box className="card">
        <Button
          variant="contained"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </Button>
        <p>
          <code>src/App.tsx</code>{' '}
          からこの文章を見つけて，この文章を編集＆ファイル保存してみてください。
        </p>
      </Box>
      <p className="read-the-docs">
        React logo や MUI logo
        をクリックして公式サイトにアクセスしてみてください。公式ドキュメントで勉強してみましょう！
      </p>

      <p className="read-the-docs">サーバーから取得した文字列は...</p>
      <Typography variant="h1" component="h2">
        {data?.message || 'loading...'}
      </Typography>
    </>
  );
}

export default App;
