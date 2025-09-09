interface NotificationPayload {
  title: string | null;
  description: string | null;
  sender: string | null;
  senderImg: string | null;
  riciver: string | null;
  contentImg: string | null;
  type: string | null;
}

const notificationPayload = (
  data: NotificationPayload,
): NotificationPayload => {
  return {
    title: data.title ?? null,
    description: data.description ?? null,
    sender: data.sender ?? null,
    senderImg: data.senderImg ?? null,
    riciver: data.riciver ?? null,
    contentImg: data.contentImg ?? null,
    type: data.type ?? null,
  };
};

export default notificationPayload;
