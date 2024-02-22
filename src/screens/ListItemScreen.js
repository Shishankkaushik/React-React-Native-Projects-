import React,{useEffect,useState} from 'react';
import { View, Text, FlatList, StyleSheet, Linking, Platform } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';



const ListItemScreen = () => {
const [items,setItems] = useState([])

    // const myitems = [
    //     {
    //         name: "iphone",
    //         year: "2013",
    //         phone: "12345678",
    //         image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //         desc: "I am selling this iphone"
    //     },
    //     {
    //         name: "camera",
    //         year: "2014",
    //         phone: "1234538",
    //         image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXBob25lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    //         desc: "I am selling this iphone"
    //     },
    // ]

    const getDetails = async ()=>{
        const querySnap = await firestore().collection('ads').get()
        const result =  querySnap.docs.map(docSnap=>docSnap.data())
        console.log(result)
        setItems(result)
      }
      const openDial = (phone)=>{
          if(Platform.OS ==='android'){
            Linking.openURL(`tel:${phone}`)
          }else{
            Linking.openURL(`telprompt:${phone}`)
          }
      }
      useEffect(()=>{
        getDetails()
        return ()=>{
          console.log("cleanup")
        }
      },[])

    const renderItem = (item) => {
        return (
            <Card style={styles.card}>
                <Card.Title title={item.name} />
                <Card.Content>
                    <Paragraph>{item.desc}</Paragraph>
                    <Paragraph>{item.year}</Paragraph>
                </Card.Content>
                <Card.Cover source={{ uri: item.image }} />
                <Card.Actions>
                    <Button>{item.price}</Button>
                    <Button onPress={()=>openDial()}>Call seller</Button>
                </Card.Actions>
            </Card>
        )
    }
    return (
        <View>
            <FlatList
                data={items}
                keyExtractor={(item) => item.phone}
                renderItem={({ item }) => renderItem(item)}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
       margin:10,
       elevation:2, 
    }
});


export default ListItemScreen;
