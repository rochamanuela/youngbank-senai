import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    containerChild: {
        flex: 1,
        padding: '7.5%',
        justifyContent: 'center',
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
        marginTop: 0,
        marginBottom: 40,
        alignSelf: 'center'
    },
    link: {
        color: '#B3B3B3',
        fontFamily: 'regular',
        fontSize: 12,
    },
    linkBold: {
        color: '#fff',
        fontFamily: 'bold',
    },
    row: {
        marginTop: 15,
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

export default styles;
