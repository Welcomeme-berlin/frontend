import { render, screen } from '@testing-library/react';
import SliderComponent from './Slider';

test('on initial render, component should render well', () => {
  render(<SliderComponent />);

  screen.debug();
});
