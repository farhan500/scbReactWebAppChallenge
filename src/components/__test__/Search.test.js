import React from 'react';
import ReactDom from 'react-dom';
import Search from '../Search';
import { render,screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';

it("render without crashing",()=>{
    const div=document.createElement("div");
    ReactDom.render(<Search></Search>, div)
});

describe('Search for textbox value', () => {
    test('renders Search component', () => {
      render(<Search />);
   
      screen.debug();
   
      fireEvent.change(screen.getByRole('textbox'), {
        target: { value: 'JavaScript' },
      });
   
      screen.debug();
    });
  });

 