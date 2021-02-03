import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginHorizontal: 30,
        marginTop: 50,
    },
    headerStyle: {
        color: '#555555',
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    contentStyle: {
        borderWidth: 2,
        marginTop: 15,
        marginBottom: 5,
        padding: 20,
        borderTopColor: 'gray',
        borderBottomColor: 'gray',
        borderRightColor: 'gray',
        borderLeftColor: 'gray',
    },
    descriptionStyle: {
        fontSize: 16,
        paddingVertical: 5,
        color: '#7F7F7F',
    },
    rowStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    checkBoxStyle: {
        flex: 1,
        paddingTop: 10,
    },

    //常見問題style STRAT

    listStyle: {
        fontSize: 16,
        color: '#7F7F7F',
    },
    //一列兩項style START
    leftListStyle: {
        width: '20%',
        alignSelf: 'center',
    },
    rightListStyle: {
        width: '80%',
        alignSelf: 'center',
    },
    //一列兩項style END
    dayStyle: {
        color: '#555555',
        marginBottom: 20,
        fontWeight: '100',
        fontSize: 20,
        alignSelf: 'center',
    },
    //一列三項style START
    firstListStyle: {
        width: '20%',
        alignSelf: 'center',
    },
    secondListStyle: {
        width: '35%',
        alignSelf: 'center',
    },
    thirdListStyle: {
        width: '35%',
        alignSelf: 'center',
    },
    //一列三項style END

    //常見問題style END
});
