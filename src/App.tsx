import React from 'react';
import { useAsync } from 'react-use';
import { UserRepos } from './components/Projects/githubUtil';
import ApplicationRouter from './ApplicationRouter';
import Spinner from './components/Spinner';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { css } from 'emotion';

const appStyle = css({
  position: 'relative',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  overflow: 'hidden',
});

function App() {
  const repoData = useAsync(async () => {
    const [repoData] = await Promise.all([UserRepos()]);
    return repoData;
  }, []);

  return (
    <div className={appStyle}>
      {repoData.loading ? (
        <Spinner />
      ) : (
        <ApplicationRouter repos={repoData.value} />
      )}
      <ToastContainer />
    </div>
  );
}

export default App;
