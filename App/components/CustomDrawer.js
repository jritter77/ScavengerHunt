import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { getData } from '../Methods';

const CustomDrawer = (props) => {
    const [username, setUsername] = React.useState('');

    React.useState(() => {
        const getUser = async () => {
            const user = await getData('user');
            setUsername(user.username);
        }

        getUser();
    })
  return (
    <DrawerContentScrollView {...props}>
        <DrawerItem 
            label={username}
            style={{borderWidth: 2}}
        />
        <DrawerItemList {...props} />
    </DrawerContentScrollView>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({})