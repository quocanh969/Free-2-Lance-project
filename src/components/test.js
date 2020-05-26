import React, { Component } from 'react';
import {S_Tag_Autocomplete} from '../ultis/SHelper/S_Help_Input';

export default class test extends Component {
    render() {
        let data = [
            {
                id: 1,
                tag: 'America',
            },
            {
                id: 2,
                tag: 'Brazil',
            },
            {
                id: 3,
                tag: 'Cameroon',
            },
            {
                id: 4,
                tag: 'Denmark',
            },
        ]
        return (
            <div className='m-5'>
                <S_Tag_Autocomplete id='tag' suggestions={data}></S_Tag_Autocomplete>
            </div>
        )
    }
}
