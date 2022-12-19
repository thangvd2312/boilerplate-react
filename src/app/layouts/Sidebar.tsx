import { Layout, Menu, MenuProps } from 'antd';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

const { Sider } = Layout;

function getItem(label: React.ReactNode, key: React.Key, children?: MenuItem[], type?: 'group'): MenuItem {
  return {
    key,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [];

function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  function handleSelectItem(data: { key: string }) {
    navigate(data.key);
  }

  return (
    <Sider theme="dark" breakpoint="lg" collapsedWidth="0" className="text-white">
      <Menu
        defaultSelectedKeys={[pathname]}
        defaultOpenKeys={['notes', 'master']}
        mode="inline"
        theme="dark"
        items={items}
        onSelect={handleSelectItem}
      />
    </Sider>
  );
}

export default Sidebar;
