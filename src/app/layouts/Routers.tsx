import DefaultLayout from 'app/layouts/DefaultLayout';
import PrivateRoute from 'app/layouts/PrivateRouter';
import Home from 'app/pages/Home';
import NotFound from 'app/pages/Results/NotFound';
import URL from 'constants/url';
import { lazy, ReactElement, Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'store';

const DEFAULT_LAYOUT = 'default';
const NONE_LAYOUT = 'none';

const Login = lazy(() => import('app/pages/Login/index'));

interface ItemType {
  key: string;
  components: ReactElement;
  layout: string;
  private: boolean;
}

const userItems: ItemType[] = [
  {
    key: URL.Home,
    components: <Home />,
    layout: DEFAULT_LAYOUT,
    private: true,
  },
];

const adminItems: ItemType[] = [
  {
    key: URL.Home,
    components: <Home />,
    layout: DEFAULT_LAYOUT,
    private: true,
  },
];

const sharedItems: ItemType[] = [
  {
    key: URL.Login,
    components: <Login />,
    layout: NONE_LAYOUT,
    private: false,
  },
  {
    key: '/',
    components: <Navigate to={URL.Login} />,
    layout: NONE_LAYOUT,
    private: false,
  },
  {
    key: '*',
    components: <NotFound />,
    layout: NONE_LAYOUT,
    private: false,
  },
];

function getItems(isTargetAdmin: boolean) {
  const items = isTargetAdmin ? adminItems.concat(sharedItems) : userItems.concat(sharedItems);
  return items;
}

export default function Routers() {
  const items = getItems(true);
  return (
    <Routes>
      {items.map((item) => {
        let element = item.components;

        element = <Suspense fallback={null}>{element}</Suspense>;

        if (item.layout === DEFAULT_LAYOUT) {
          element = <DefaultLayout>{element}</DefaultLayout>;
        }

        if (item.private) {
          element = <PrivateRoute>{element}</PrivateRoute>;
        }

        return <Route key={item.key} path={item.key} element={element} />;
      })}
    </Routes>
  );
}
