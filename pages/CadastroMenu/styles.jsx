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
        width: '100%',
        justifyContent: 'space-between'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: 0
    },
    textRegular: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'regular',
    },
    textSmall: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'regular',
        marginTop: 20
    },
    textMedium: {
        color: '#fff',
        fontSize: 16,
        fontFamily: 'medium',
    },
    containerOp: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
        backgroundColor: 'rgba(199, 125, 255, 0.30)',
        marginBottom: 10,
        marginTop: 30,
        height: 70,
        borderRadius: 8,
        borderColor: 'rgb(199, 125, 255)',
        borderWidth: 1.5,

        paddingLeft: 20
    },
    containerOp2: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        
        backgroundColor: 'rgba(238, 162, 67, 0.30)',
        marginBottom: 10,
        height: 70,
        borderRadius: 8,
        borderColor: 'rgb(238, 162, 67)',
        borderWidth: 1.5,

        paddingLeft: 20
    },
    center: {
        flex: 0.9,
        justifyContent: 'center'
    }
});

export default styles;
