import React, { useEffect, useState } from 'react';
import {View,Text} from 'react-native';
import axios from 'axios';
import { getResponse } from '../apiUtils/StatusCheck';
import Stories from '../models/Stories';

const TopStories=()=>{
    const [copyrtTag,setCopyrtTag]=useState<string>('');
    useEffect(()=>{
        fetchStories();
    },[]);
    const fetchStories=()=>{
        let url:string ='https://api.nytimes.com/svc/topstories/v2/world.json?api-key=Sf0d4MV57mdff4wYPTx4DvsgiRLlexUi';
        axios.get(url)
        .then((response)=>{
            let resp:Stories = getResponse(response);
            console.log(JSON.stringify(resp.copyright));
            setCopyrtTag(resp.copyright)
          
        })
    }
    return (<View style={{}}>
        <Text>{copyrtTag}</Text>
    </View>);
}
export default TopStories;