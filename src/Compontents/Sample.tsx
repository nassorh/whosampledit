import './Sample.css'
import { useState } from 'react';
import List from './List';

interface SampleProps {
    musicId: number;
}

export default function Sample(props: SampleProps){
    return(
        <div>
            <List 
                data = {[1,2,3,4,5,6]}
            />
        </div>
    )
}