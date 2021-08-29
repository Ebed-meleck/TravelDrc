import * as React from 'react';
import {Animated} from 'react-native';

class EnlargeShink extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      viewSize :  new Animated.Value(this.getSize())
    };
  }

 //const viewSize = React.useRef(new Animated.Value(getSize()));

  getSize (){
   if(props.shouldEnlarge){
     return 80;
   }
   return 40;
 }

 componentDidUpdate(){
   Animated.spring(this.state.viewSize,{
     toValue:this.getSize(),
     useNativeDriver:false,
   }).start();
 }
  render(){ 

  
 return(
   <Animated.View
    style={{ width:this.state.viewSize, height:this.state.viewSize}}
    >
      {this.props.children}
   </Animated.View>
 );
  }
}
export default EnlargeShink;