import React from 'react';
import { Routes, Route } from "react-router-dom";
import { LayoutMenu } from './pages/LayoutMenu';
import { Insert } from './pages/Insert';
import { InLine } from './pages/InLine';
import { AddTicket } from './pages/AddTicket';
import { ErrorPage } from './pages/ErrorPage';
import { Desktop } from './pages/Desktop';
import { UiProvider } from './context/UiContext';
import { SocketProvider } from './context/SocketContext';


const TicketApp = () => {
  return (
    <SocketProvider>
      <UiProvider>
      <Routes>
        <Route path="/" element={<LayoutMenu />}>
          <Route index element={<Insert />} />
          <Route path="cola" element={<InLine />} />
          <Route path="crear" element={<AddTicket />} />
          <Route path="escritorio" element={<Desktop />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </UiProvider>
    </SocketProvider>
  )
}

export default TicketApp