import React from 'react';
import ReactDom from 'react-dom';
import ScrollList from '../ScrollList';
import { render,cleanup} from '@testing-library/react';

it("render without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<ScrollList></ScrollList>, div)
})

