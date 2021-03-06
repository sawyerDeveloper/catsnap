import React from 'react'
import {
    Text,
    View,
    Button,
    TouchableOpacity,
    Image
} from 'react-native'
import reactCSS from 'reactcss'
import Images from '../assets/images/images'
import {appPage} from './TopLevelScreenComponent'


class MemeSelector extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    onPress = () => {
        this.props.setAppPage(appPage.SCANNING)
      }

    render() {
        const styles = reactCSS({
            'default': {
                container: {
                  flex: 1,
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignContent: 'center'
                },
                memeTitle: {
                    fontSize: 40,
                    color: 'black'
                },
                tlCat: {
                    width: 480,
                    height: 360
                },
                selectorText: {
                    fontSize: 24,
                    color: '#EE0C97',
                    fontWeight: 'bold',
                    width: 150,
                    height: 30,
                    backgroundColor: 'lightgrey',
                    textAlign: 'center'
                }
            },
    })
        return (
            <View style={styles.container}>
                <Text style={styles.memeTitle}> Select Your Meme </Text>
                <Image style={styles.tlCat} resizeMode="contain" source={Images.TL_CAT} />
                <TouchableOpacity onPress={this.onPress}>
                <Text style={styles.selectorText}>Thug Life</Text>
                </TouchableOpacity>
            </View>
        )
    }
}


export default MemeSelector

