import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // configurações gerais
    container: {
        flex: 1,
        backgroundColor: '#121212',
        flexDirection: 'row'
    },
    containerChild: {
        flex: 1,
        height: '100%',
        backgroundColor: '#121212',
        padding: '7.5%',
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

    // configurações de textos
    textMedium: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'medium',
        marginBottom: 10
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
    textSmall3: {
        color: '#fff',
        fontSize: 11,
        fontFamily: 'regular',
        lineHeight: 18,
    },
    textSmallBold: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'medium',
        marginBottom: 0
    },
    textSmallGray: {
        color: '#B1B1B1',
        fontSize: 12,
        fontFamily: 'regular',
    },
    textSmallPurple: {
        color: '#C77DFF',
        fontSize: 12,
        fontFamily: 'regular',
    },
    textHeader: {
        color: '#fff',
        fontSize: 14,
        fontFamily: 'regular',
    },
    textCamuflado: {
        color: '#121212',
        fontSize: 14,
        fontFamily: 'regular',
    },
    textValue: {
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'medium',
        fontSize: 32,
        marginTop: 25,
        marginBottom: 8
    },

    // configurações específicas de containers de views
    checkBoxContainer: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: '100%',
        marginTop: 10,
        marginBottom: 20
    },
    valorTransferencia: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSaldo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        width: '100%',
        padding: 14,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#232323',
        marginTop: 16
    },
    containerAviso: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        height: 'auto',
        padding: 15,
        marginBottom: 25,
        backgroundColor: 'rgba(238, 162, 67, 0.30)',
        gap: 13
    },
    right: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 15
    },
    row2: {
        flexDirection: 'row',
        gap: 13,
        alignItems: 'center'
    },
    line: {
        borderBottomColor: '#282828',
        borderBottomWidth: 2,
        marginVertical: 25,
    },

    // configurações do modal
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 0,
        backgroundColor: '#232323',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonOpen: {
        backgroundColor: '#F194FF',
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
});

export default styles;