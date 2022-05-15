
import React, { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { Tab } from '@mui/material';

import { RouterTabs, useRouterTab, useLayoutTitle } from '../components';

import Sensor from './Sensor';

const Dashboard: FC = () => {
  useLayoutTitle("Dashboard");
  const { routerTab } = useRouterTab();

  return (
    <>
      <RouterTabs value={routerTab}>
        <Tab value="sensor" label="Sensor" />
        <Tab value="sensorsettings" label="Settings" />
      </RouterTabs>
      <Routes>
        <Route path="sensor" element={<Sensor />} />
        <Route path="sensorsettings" element={<Sensor />} />
        <Route path="/*" element={<Navigate replace to="sensor" />} />
      </Routes>
    </>
  );
};

export default Dashboard;
