import React, { useEffect, useState } from "react";
import { IoMdNotifications } from "react-icons/io";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";

import classes from "./Header.module.scss";
import Notifications from "./Notifications";

const Header = () => {
  const dispatch = useAppDispatch();

  const notifiactions = useAppSelector(state => state.notification.notifications);

  const [openNotifications, setOpenNotifications] = useState<boolean>(false);

  return (
    <div className={classes.container}>
      <button onClick={() => setOpenNotifications(!openNotifications)}>
        <IoMdNotifications color="white" />
        {notifiactions.length !== 0 && (
          <span className={classes.notificationsLength}>{notifiactions.length}</span>
        )}
      </button>
      {
        openNotifications
        &&
        <div className={classes.notifications}>
          <Notifications setOpenNotifications={setOpenNotifications} />
        </div>
      }
    </div>
  );
};

export default Header;
