import notifee from '@notifee/react-native';

const onScreenNotiFyFunc = async (remoteMessage: any) => {
  const {title, body} = remoteMessage.notification;
  const channelId = await notifee.createChannel({
    id: 'default',
    name: 'Default Channel',
  });

  await notifee.displayNotification({
    title: title,
    body: body,
    android: {
      channelId,
      smallIcon: 'ic_launcher', // make sure it's added in your native config
      pressAction: {
        id: 'default',
      },
    },
  });
};
export default onScreenNotiFyFunc;
