export interface Notification {
    id?: number;
    text: string;
    title: string;
}

export interface NotificationState {
    notifications: Notification[]
}