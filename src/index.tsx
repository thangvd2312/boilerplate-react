import ReactDOM from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from 'store';
import { PersistGate } from 'redux-persist/integration/react';
import Routers from 'app/layouts/Routers';
import { ConfigProvider, notification, Result } from 'antd';
import koKR from 'antd/lib/locale/ko_KR';
import React from 'react';
import 'styles/index.less';
import ErrorBoundary from 'antd/lib/alert/ErrorBoundary';

notification.config({ placement: 'top', maxCount: 1 });

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const isProduction = process.env.NODE_ENV === 'production';

root.render(
  <React.StrictMode>
    <ErrorBoundary
      message={isProduction ? '' : undefined}
      description={<Result status="500" title="500" subTitle="Sorry, something went wrong." />}
    >
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <ConfigProvider locale={koKR} form={{ colon: false }} autoInsertSpaceInButton={false}>
              <Routers />
            </ConfigProvider>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);

reportWebVitals();
