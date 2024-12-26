import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {notificationItemProps} from '../../model/ui/notificationItemProps';
import Colors from '../../theme';

const NotificationItem: React.FC<notificationItemProps> = ({item}) => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30, color: Colors.White}}>{item.title}</Text>
    </SafeAreaView>
  );
};

export default NotificationItem;
