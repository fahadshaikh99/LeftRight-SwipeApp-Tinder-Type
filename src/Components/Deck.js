import React, { Component } from 'react';
import { Animated, PanResponder, Dimensions } from 'react-native';
import { View, Text } from 'react-native';
import LottieView from 'lottie-react-native';


const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {

    static defaultProps = {
        onSwipeRight: () => {},
        onSiwpeLeft: () => {}
    }

    constructor(props) {
        super(props);
        this.state = {
            myKey: '',
            progress: new Animated.Value(0),
          };
        const position = new Animated.ValueXY();
        const panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gesture) => {

                position.setValue({ x: gesture.dx, y: gesture.dy });


            },
            onPanResponderRelease: (event, gesture) => {

                if ( gesture.dx > SWIPE_THRESHOLD ) {
                    this.forceSwipe('right');
                    this.LikeFunc('right');
                    console.log('Right');
                }
                else if (gesture.dx < -SWIPE_THRESHOLD ) {
                    this.forceSwipe('left');
                    this.LikeFunc('left');
                    console.log('Left');
                }
                else {

                this.resetPosition();
                }
            }
        });
        this.state = { panResponder, position, index: 0 };
    }


    getCardStyle() {
        const { position } = this.state
        const rotate = position.x.interpolate({
            inputRange: [-SCREEN_WIDTH * 1.5 , 0 , SCREEN_WIDTH * 1.5 ],
            outputRange: ['-120deg', '0deg', '120deg']
        });
        return {
            ...this.state.position.getLayout(),
            transform: [{ rotate }]
        };
    }

    LikeFunc(direction) {
        const move = direction === 'right' ? 'love' : 'notlove';
        console.log(move)
        this.setState({myKey: move});
    }

    forceSwipe(direction) {

        const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;

        Animated.timing(this.state.position, {

            toValue: { x , y: 0},
            duration: SWIPE_OUT_DURATION
            
        }).start(() => this.onSwipeComplete(direction));
    }

    onSwipeComplete(direction) {
        const { onSiwpeLeft, onSwipeRight, data } = this.props;
        const item = data[this.props.index]
        this.state.position.setValue({ x: 0, y: 0});
        this.setState({ index: this.state.index + 1 });
        direction === 'right' ? onSwipeRight(item) : onSiwpeLeft(item);
    }



    resetPosition() {
        Animated.spring(this.state.position, {
            toValue: { x: 0, y: 0 }

        }).start();

    }

    renderCard() {
        if( this.state.index >= this.props.data.length) {
            return this.props.renderNoMoreCards();
        }
        return this.props.data.map((item, i) => {
            if (i < this.state.index) { return null; }
            if (i === this.state.index) {
                return (
                    <Animated.View
                        key={item.id}
                        style={[this.getCardStyle(), styles.cardStyles ]}
                        {...this.state.panResponder.panHandlers}>
                        {this.props.renderCard(item)}
                    </Animated.View>

                );

            }

            return (
                <Animated.View key={item.id} style={styles.cardStyle}>
                {this.props.renderCard(item)}
                </Animated.View>
        );
        }).reverse();
    }

    
 

    render() {

        return (
            <View style={{ flex: 1}}>
                <View>
                {this.renderCard()}
                </View>

                
                {this.state.myKey ==  'love' ? (
                <View style={{ flex: 1}}>
                    <LottieView
                        style={{ marginTop: 20}}
                        source={require('../../assets/LottieHeart.json')}
                        colorFilters={[{
                        keypath: "button",
                        color: "#F00000"
                        },{
                        keypath: "Sending Loader",
                        color: "#F00000"
                        }]}
                        loop
                        autoPlay
                    />
                </View>

                 ) : ( 
                    <View>
                    </View>
                // <View style={{ flex: 1}}>
                //     <LottieView
                //         style={{ marginTop: 20}}
                //         source={require('../assets/notHeart.json')}
                //         colorFilters={[{
                //         keypath: "button",
                //         color: "#F00000"
                //         },{
                //         keypath: "Sending Loader",
                //         color: "#F00000"
                //         }]}
                //         loop
                //         autoPlay
                        
                        
                //     />
                // </View>

                 )}

                {this.state.myKey ==  'notlove' ? (
                 <View style={{ flex: 1}}>
                    <LottieView
                        style={{ marginTop: 20}}
                        source={require('../../assets/notHeart.json')}
                        colorFilters={[{
                        keypath: "button",
                        color: "#F00000"
                        },{
                        keypath: "Sending Loader",
                        color: "#F00000"
                        }]}
                        loop
                        autoPlay
                        
                        
                    />
                </View>

                 ) : ( 
                    <View></View>
                 )}
                
            </View>

        );
    }
}

const styles = {
    cardStyle: {
        position: 'absolute',
        width: SCREEN_WIDTH,
        zIndex: 1
    },
        animationContainer: {
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
        },
        buttonContainer: {
          paddingTop: 20,
        },
      
};


export default Deck;
