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
        justifyContent: 'end',
        marginBottom: 30
    },
    containerRow: {
        display: 'flex',
        flexDirection: 'row-reverse',
        alignItems: 'center'
    },
    title: {
        fontSize: 25,
        fontFamily: 'regular',
        color: '#fff',
        width: 215,
        textAlign: 'right',
        alignSelf: 'flex-end',
        marginBottom: 15,
        lineHeight: 35
    },
    link: {
        color: '#B3B3B3',
        fontFamily: 'regular',
        fontSize: 12,
        marginTop: 15,
        alignSelf: 'flex-end'
    },
    linkBold: {
        color: '#fff',
        fontFamily: 'bold',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 49,
        height: 49,
        borderRadius: 7,
        borderColor: '#fff',
        borderWidth: 1,
        marginRight: 10
    }
});

export default styles;
