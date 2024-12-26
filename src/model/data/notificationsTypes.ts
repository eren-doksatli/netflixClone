interface Notification {
  title: string;
  time: string;
  path: string;
}

interface NotificationsTypes {
  notifications: Notification[];
  pending: boolean;
  notificationCount: number;
}

export type {Notification, NotificationsTypes};
