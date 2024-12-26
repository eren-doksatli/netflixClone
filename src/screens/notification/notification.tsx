import React from 'react';
import {FlatList, Text, View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import NotificationItem from '../../components/notifications/notificationItem';

const Notification: React.FC = () => {
  const {notifications} = useSelector(state => state.notifications);

  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={notifications}
        renderItem={({item}) => <NotificationItem item={item} />}
      />
    </View>
  );
};

export default Notification;
