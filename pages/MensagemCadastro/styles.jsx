import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
    image: {
        width: 90,
        height: 90,
    },
    containerChild: {
        flex: 1,
        padding: '7.5%',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 22,
        fontFamily: 'regular',
        color: '#fff',
        width: '70%',
        textAlign: 'center',
        marginBottom: 15,
        marginTop: 30,
        lineHeight: 33
    },
    subTitle: {
        fontSize: 14,
        fontFamily: 'regular',
        color: '#fff',
        width: '50%',
        textAlign: 'center',
        lineHeight: 20
    },
});

export default styles;
