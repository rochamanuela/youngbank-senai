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
        justifyContent: 'top'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    left: {
        marginLeft: 'auto',
    },
    text: {
        color: '#fff'
    },
    textNameUser: {
        color: '#fff',
        fontFamily: 'regular',
        fontSize: 12,
        marginLeft: 14
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
    },
    icon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#ccc',
        width: 48,
        height: 48,
        borderRadius: 30
    },
    operations: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        marginTop: 30
    },
    operationsChild: {
        width: '48%',
        gap: 10
    },
    textRegular: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'regular'
    },
    textSmall: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'regular',
        marginTop: 20
    },
    textMedium: {
        color: '#fff',
        fontSize: 18,
        fontFamily: 'medium',
        marginTop: 5
    },
    item: {
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#C77DFF',
        backgroundColor: 'rgba(199, 125, 255, 0.20)',
        height: 50,

        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10
    },
    item2: {
        borderRadius: 8,
        borderWidth: 1.5,
        borderColor: '#EEA243',
        backgroundColor: 'rgba(199, 125, 255, 0.20)',
        height: 50,

        paddingLeft: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10
    },
    card: {
        borderRadius: 8,
        backgroundColor: 'rgba(238, 162, 67, 0.30)',
        height: 50,
        marginTop: 30,
        paddingLeft: 16,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        gap: 10
    },
    credit: {
        borderRadius: 8,
        backgroundColor: 'rgba(199, 125, 255, 0.30)',
        height: 115,
        marginTop: 30,
        justifyContent: 'center',
        paddingLeft: 16
    }
});

export default styles;
