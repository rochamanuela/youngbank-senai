import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
    },
    containerChild: {
        flex: 1,
        backgroundColor: '#121212',
        padding: '7.5%',
        justifyContent: 'center'
    },
    image: {
        width: '120%',
        height: 300,
        top: 0,
        zIndex: 1,
        marginLeft: -25,
        marginTop: -18,
        backgroundColor: '#121212'
    },
    imageLogo: {
        width: 125,
        height: 55,
        top: -200,
        zIndex: 1,
        margin: 'auto',
        marginBottom: -160,
        marginTop: 0,
    },
    link: {
       color: '#B3B3B3',
       fontFamily: 'regular',
       fontSize: 14,
       margin: 'auto',
       marginTop: 15
    },
    linkBold: {
        color: '#fff',
       fontFamily: 'bold',
    }
});

export default styles;
