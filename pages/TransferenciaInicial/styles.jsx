import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121212',
        flexDirection: 'row'
    },
    containerChild: {
        flex: 1,
        height: '94%',
        backgroundColor: '#232323',
        padding: '7.5%',
        paddingTop: '12%',
        alignSelf: 'flex-end',
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,
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
        fontFamily: 'regular'
    },
    textSmall: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'regular',
    },
    textSmall2: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'bold',
    },
    textMedium: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'regular',
        marginTop: 25,
        marginBottom: 10,
    },

    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: '100%',
        marginTop: 10,
        marginBottom: 20
    },
    checkBoxText: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'regular',
        fontWeight: 400
    },

    inputValue: {
        height: 65,
        width: 175,
        borderBottomColor: '#fff',
        borderBottomWidth: 2,
        paddingBottom: 14,
        marginBottom: 12,
        borderRadius: 0,
        fontSize: 30,
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'regular'
    },
    containerSaldo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: '100%',
        padding: 14,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    valorTransferencia: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
