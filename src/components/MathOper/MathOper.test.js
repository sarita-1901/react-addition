import MathOper from './MathOper';
import {render, fireEvent, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event';

it("should render the form",() => { 
  //Arrange
  render(<MathOper/>);
  
  //Act
  const form = screen.getByTitle("form");
  
  //Assert
  expect(form).toBeInTheDocument();

}
  )
/*
  it("error field is required should appear when operand is left blank", () => { 
    //Arrange
    render(<MathOper/>);
    
    const firstOperand = screen.getByTitle("operand1");
    userEvent.type(firstOperand,"");
    const lastOperand = screen.getByTitle("operand2");
   // userEvent.type(lastOperand,"")
    const button = screen.getByTitle("submitbutton")
   //firevent.click(button);
 userEvent.click(button);
 const errorMessage =  screen.getByTitle("requirederror");
 expect(errorMessage).toBeInTheDocument();
 
    })

   it("output should correctly appear",() => { 
      //Arrange
      render(<MathOper/>);
      
      const firstOperand = screen.getByTitle("operand1");
      userEvent.type(firstOperand,"1.0");
      const lastOperand = screen.getByTitle("operand2");
      userEvent.type(lastOperand,"2.0")
      const button = screen.getByTitle("submitbutton")
    userEvent.click(button);
   
   const errorMessage = screen.getByTitle("output");
   expect(errorMessage).toBeInTheDocument();
   
      })
  */