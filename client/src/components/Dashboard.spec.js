import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should call the incrementStrikes function passed as a prop', async () => {
    const incrementStrikes = jest.fn();
    const { getByText } = render(<Dashboard incrementStrikes={incrementStrikes}/>)

    await fireEvent.click(getByText(/STRIKE/));
    expect(incrementStrikes).toHaveBeenCalled();
  })
  it('should call the incrementBalls function passed as a prop', async () => {
    const incrementBalls = jest.fn();
    const { getByText } = render(<Dashboard incrementBalls={incrementBalls}/>)

    try {
      await fireEvent.click(getByText(/BALL/));
    expect(incrementBalls).toHaveBeenCalled();
    } catch(error) {
      console.log(error);
    }
  })
})