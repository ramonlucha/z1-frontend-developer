import { render, screen } from '@testing-library/react';
import MainCard from './MainCard';

test('All items appears on the screen', () => {
  render(<MainCard />);
  const buttonTakePicture = screen.getByText(/TAKE PICTURE/i);
  expect(buttonTakePicture).toBeInTheDocument();
});

test('the function executes when button is clicked', () => {
    let check = false;
 const validateExecute = ()=>check=true;
  render(<MainCard clickHandler={()=>validateExecute()}></MainCard>);
  const buttonTakePicture = screen.getByText(/TAKE PICTURE/i);
  buttonTakePicture.click();
  expect(check).toBeTruthy();
});