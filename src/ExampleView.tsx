import React, { useState } from 'react';
import {View, Text, TextInput} from 'react-native';

const ExampleView=()=>{
    const [score,setScore] = React.useState<string>('0');
    const [playerName,setPlayerName] = 
    React.useState<undefined|string>(undefined);
    const [showDetails,setDetails] = useState<string>('No Scores yet');

function onChangePlayerName(name:string):void{
    setPlayerName(name)
}
function onChangeScore(nScore:string='0'):void{
    setScore(nScore);
}
function getPlayerScore(scr:string,name:string="Unknown"):void{
    setDetails(`${scr} - ${name}`);
}
    return(
        <View style={{margin:16}}>
            <TextInput
                value={score}
                placeholder={'Game Score'}
                onChangeText={onChangeScore}
                style={{
                    backgroundColor:'#FFFFFF',
                    padding:8,
                    borderWidth:1,
                    borderRadius:4,
                    marginTop:8,
                    fontSize:16
                }}
            />
            <TextInput
                 value = {playerName}
                 placeholder={'Player Name'}
                 onChangeText={onChangePlayerName}
                 style={{
                    backgroundColor:'#FFFFFF',
                    padding:8,
                    borderWidth:1,
                    borderRadius:4,
                    marginTop:8,
                    fontSize:16
                }}
            />
           <Text
                style={{
                    padding:12,
                    backgroundColor:'orange',
                    marginTop:16,
                    borderRadius:4,
                    textAlign:'center',
                    fontSize:16
                }}
                onPress={()=>getPlayerScore(score,playerName)}
            >
             Start Game
           </Text>
            <Text 
                style={{
                    fontSize:16,
                    fontWeight:'bold',
                    marginTop:16
                }}>
                Game Score
            </Text>
            <Text>
                {showDetails}
            </Text>
        </View>
    );
}
export default ExampleView;