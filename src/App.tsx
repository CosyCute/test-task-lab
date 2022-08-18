import React, { useEffect, useState } from "react";

import Header from "./components/Header/Header";
import Table from "./components/Table/Table";
import { notificationToAdd } from "./config/notifications";
import { useAppDispatch, useAppSelector } from './hooks/redux';
import { getNotifications, addNotification, addTable } from './store/notificationAction';
import { getTable } from './store/tableAction';

function App() {
  const dispatch = useAppDispatch();

  const notifications = useAppSelector(state => state.notification.notifications)

  const [isFirstLoad, setIsFirstLoad] = useState<boolean>(false)

  useEffect(() => {
    dispatch(getNotifications())
    dispatch(getTable())
  }, []);

  useEffect(() => {
    if (notifications.length === 2)
      setIsFirstLoad(true)
  }, [notifications])

  useEffect(() => {
    if (isFirstLoad)
      (async () => {
        for (let i = 0; i < 8; i++) {
          const notification: any = {
            text: "Тело уведомления",
            title: "Заголовок уведомления"
          }
          await new Promise(resolve => setTimeout(resolve, 1250))
          dispatch(addNotification(notification))
        }
      })()
  }, [isFirstLoad])

  return (
    <div className="App">
      <Header />
      <Table />
    </div>
  );
}

export default App;
