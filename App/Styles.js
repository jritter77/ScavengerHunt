import { LinearGradient } from "expo-linear-gradient";
import {StyleSheet} from 'react-native';

const Styles = {
    DrawerHeaderStyle : {
        headerTitleAlign: 'center',
        headerTitle: 'Lookout!',
        headerTintColor: 'white',
        headerTitleStyle: {fontSize: 40, fontWeight: 'bold'},
        headerBackground: 
        () => (<LinearGradient 
              colors={['#53ECFC', '#F283B3']}
              style={{ flex: 1 }}
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
        />)
      },
      StackHeaderStyle : {
        headerStyle: {
          backgroundColor: '#FFFDD1',
        }
      },
      StandardStyles : StyleSheet.create({
        page: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#FFFDD1'
        },
        textInput: {
            width: '70%',
            fontSize: 20,
            padding: '5%',
            borderColor: 'blue',
            borderWidth: 2,
            margin: '5%',
            backgroundColor: 'white'
          }
      })

}

export default Styles;
