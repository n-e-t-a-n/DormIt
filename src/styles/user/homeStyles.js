import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    list:{
        padding:10,
        marginTop:10,
        marginBottom:10,
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        paddingHorizontal: 40,
    },
    input: {
        height: 50,
        width: '100%',
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
    },
    logoutButton : {
        marginTop: 3,
        backgroundColor: '#000000',
        marginBottom: 3,
    },
    email: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    cardView:{
        borderTopRightRadius:5,
        borderTopLeftRadius:5,
        borderWidth:1,
        borderColor: 'gray',
        borderBottomLeftRadius:5,
        borderBottomRightRadius:5,
        marginBottom:10,
    },
    cardDetails:{
        flex:1,
        flexDirection:"row",
    },
    image:{
        borderTopLeftRadius:5,
        borderTopRightRadius:5,
        height:200,
    },
    dormName:{
        fontSize:17,
        fontWeight:'bold',
        color: 'gray',
        marginTop:5,
        paddingHorizontal:10
    },
    location:{
        flex:4,flexDirection:'row',
        borderRightColor:'gray',
        paddingHorizontal:10,
        paddingBottom:10
    },
    locationText:{
        fontSize:12,
        fontWeight:'bold',
        paddingTop:5,
        color:'gray'
    },
});
  