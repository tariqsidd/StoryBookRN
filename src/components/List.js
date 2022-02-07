import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Fonts from '../config/Fonts';

const List = ({
                  data=[
                      {name:'Tariq', description:'Senior Software Eng'},
                      {name:'Osama', description:'Software Eng'},
                      {name:'Hammad', description:'Software Eng'},
                      {name:'Amin', description:'Software Eng'},
                  ],
                  title='Please Enter Title',
                  listItemBgColor='#fff',
                  fontColor='#000',
                  fontFamily=Fonts.monospace,
                  onPress
}) =>{
    const renderItem = ({item, index}) => {
        return(
            <TouchableOpacity
                onPress={onPress}
                style={style.container}>
                <Text style={style.title}>{item.name}</Text>
                <Text style={style.dec}>{item.description}</Text>
            </TouchableOpacity>
        )
    };
    return(
        <View style={{flex:1}}>
            <Text style={{fontSize:40, textAlign:'center', color:'#000', marginVertical: 20}}>{title}</Text>
            <FlatList
                data={data}
                extraData={data}
                keyExtractor={(item) => item.id }
                renderItem={(item) => renderItem(item)}
                style={style.list}
            />
        </View>
    )

};

const style = StyleSheet.create({
   container: {
       flex:1,
       paddingVertical:15,
       marginHorizontal:10,
       marginTop:10,
       paddingHorizontal:10,
       justifyContent:'space-between',
       borderRadius: 12,
       borderWidth:2
   },
    title:{
        fontFamily:'BioSans-Bold',
        fontSize:18,
        color: '#000'
    },
    dec:{
        fontFamily:'BioSans-Light',
        fontSize:14,
        color: '#000'
    },
    list:{
       flex:1,
        backgroundColor:'#fff'
   }
});

export default List
