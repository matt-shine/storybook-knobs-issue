import React from 'react';
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Test from '../test';

export default {
  title: 'Test',
  component: Test,
  decorators: [withKnobs]
};

export const basicWithKnobs = () => {
  const numberGroup = 'numbers';
  const textGroup = 'text';
  const numberProp = number('numberProp', 33, numberGroup);
  const textProp = text('textProp', 'some text', textGroup);

  return <Test numberProp={numberProp} textProp={textProp} />;
}
