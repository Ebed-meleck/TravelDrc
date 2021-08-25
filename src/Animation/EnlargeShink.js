import * as React from 'react';
import {Animated} from 'react-native';

function EnlargeShink (props){

 const viewSize = React.useRef(new Animated.Value(getSize()));

 function getSize (){
   if(props.shouldEnlarge){
     return 80;
   }
   return 40;
 }

 React.useEffect(()=>{
   Animated.spring(viewSize,{
     toValue:getSize(),
     useNativeDriver:false,
   }).start();
 });

 return(
   <Animated.View
    style={{ width:viewSize, height:viewSize}}
    >
      {props.children}
   </Animated.View>
 );

}
export default EnlargeShink;