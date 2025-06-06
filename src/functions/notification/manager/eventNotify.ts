import notifee, {AndroidStyle} from '@notifee/react-native';

const eventNotify = async (remoteMessage: any) => {
  const {title, body, image} = remoteMessage.notification;
  const data = remoteMessage.data;

  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: title || '',
    body: body || '',
    android: {
      channelId,
      smallIcon: 'ic_launcher',
      style: {
        type: AndroidStyle.BIGPICTURE,
        picture: image || data.image,
      },
      pressAction: {
        id: 'default',
      },
    },
  });
};

export default eventNotify;
