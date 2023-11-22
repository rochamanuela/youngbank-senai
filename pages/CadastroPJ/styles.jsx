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
        fontFamily: 'regular'
    },
    textSmall: {
        color: '#fff',
        fontSize: 12,
        fontFamily: 'regular',
        marginTop: 20
    },
    textMedium: {
        color: '#EEA243',
        fontSize: 16,
        fontFamily: 'medium',
        marginTop: 30,
        marginBottom: 15,
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
});

export default styles;
