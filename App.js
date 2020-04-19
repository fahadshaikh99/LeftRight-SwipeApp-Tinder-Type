import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button, Header } from 'react-native-elements';
import Deck from './src/Deck';


const DATA = [
  { id: 1, text: 'John King', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 2, text: 'Mark', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 3, text: 'Ani', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 4, text: 'Kishore', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
  { id: 5, text: 'Hammad', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-04.jpg' },
  { id: 6, text: 'Shami', uri: 'http://www.fluxdigital.co/wp-content/uploads/2015/04/Unsplash.jpg' },
  { id: 7, text: 'Gamer Boy', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-09.jpg' },
  { id: 8, text: 'Richard', uri: 'http://imgs.abduzeedo.com/files/paul0v2/unsplash/unsplash-01.jpg' },
];


export default class App extends Component {
 
  renderNoMoreCards() {
    return(
      <Card title="All Done!">
        <Text style={{ marginBottom: 10}}>
          There are no more cards
          </Text>
        <Button
        backgroundColor="red"
        title="Get more"
        />
        </Card>
    );
  }

  renderCard(item) {
    return (

      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri }}>

        <Text style={{ marginBottom: 10 }}>
          The idea with React Native Elements is more about component structure than actual design.
        </Text>
        <Button
          
          buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor: 'red' }}
          title='View Profile'
        >
        </Button>
      </Card>
    );
  }

  render() {

    console.disableYellowBox = true
    return (

      <View style={styles.container}>
        <View style={{ marginTop: 20, alignItems: 'center'}}>
            <Text style={{ fontSize: 30}}>
                Swipe left to say no, swipe right to say yes
            </Text>
        </View>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,


  },
}
);
