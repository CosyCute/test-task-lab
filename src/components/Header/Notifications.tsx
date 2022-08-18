import React, { useEffect } from "react";

import { AiOutlineCheck, AiOutlineDelete } from 'react-icons/ai'
import classes from "./Notifications.module.scss";
import { useAppSelector, useAppDispatch } from '../../hooks/redux';
import { Notification } from "../../types/INotification";
import { removeNotification } from '../../store/notificationAction';

const Notifications = ({ setOpenNotifications }: { setOpenNotifications: Function }) => {

    const dispatch = useAppDispatch()

    const notifications = useAppSelector((state) => state.notification.notifications);

    const handleDelete = (id: number | undefined) => {
        if (id) {
            dispatch(removeNotification(id))
        }
    }

    const onClickOutside = (e: any) => {
        let isNotification = false
        e.path.forEach((el: HTMLElement) => {
            if (el.id === 'notifications'){
                isNotification = true
            }
        })
        if (!isNotification) {
            setOpenNotifications(false)
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', onClickOutside)
    }, [])

    useEffect(() => {
        return () => {
            document.removeEventListener('mousedown', onClickOutside)
        }
    }, [])

    return (
        <div id="notifications" style={{ overflowY: notifications.length > 6 ? 'scroll' : 'hidden' }} className={classes.container}>
            {notifications.map((notification: Notification) =>
                <div className={classes.item} key={notification.id}>
                    <div className={classes.content}>
                        <h5>{notification.title}</h5>
                        <span>{notification.text}</span>
                    </div>
                    <div className={classes.buttons}>
                        <button onClick={() => handleDelete(notification.id)}>
                            <AiOutlineCheck />
                        </button>
                        <button onClick={() => handleDelete(notification.id)}>
                            <AiOutlineDelete />
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
};

export default Notifications;
