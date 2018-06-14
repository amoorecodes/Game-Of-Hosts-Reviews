import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render } from 'enzyme';
import ReviewsApp from './../client/components/ReviewsApp/ReviewsApp.jsx';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewsApp />, div)
});