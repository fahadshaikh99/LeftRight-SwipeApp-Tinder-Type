import React from 'react';
import { View, Text, Image} from 'react-native';
import MainScreen from './MainScreen';



const ProfileScreen = () => {
    return(
        <View style={{ flex: 1}}>
            <View style={{ backgroundColor: '#f5594e'}}>
                <View style={{ justifyContent: "center", alignItems: 'center', marginVertical: '4%'}}>
                <Text style={{ fontSize: 30, color: 'white'}}>Profile</Text>
                </View>
            </View>
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Image
                style={{ height: 150, width: 150, borderRadius: 75, marginTop: '10%'}}
                source={{uri: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/02/18/12/mark-zuckerberg-.jpg'}}
                />
                <View style={{ marginTop: '7%'}}>
                    <Text style={{ fontSize: 35}}>
                        FAHAD SHAIKH
                    </Text>
                </View>
            </View>
            
            <View style={{ marginTop: '10%', marginHorizontal: '5%'}}>
                <Text style={{ fontSize: 18}}>
                Hi, I hope you found some interest 
                in my profile, basically I am a 
                programmer by Profession.
                </Text>
            <View style={{ justifyContent: 'center', alignItems:'center', marginTop: '5%'}}>
                <View style={{ marginTop: '6%'}}>
                    <Text style={{ fontSize: 20}}>
                        Age: 21
                    </Text>                
                </View>
                <View style={{ marginTop: '6%'}}>
                    <Text style={{ fontSize: 20}}>
                        Hobbies: Table Tennis
                    </Text>                
                </View>
            </View>
            </View>
        </View>
    );
}

export default ProfileScreen;