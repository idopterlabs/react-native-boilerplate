import React from 'react';
import { cleanup, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import theme from '@styles/theme';

import Input from './index';

jest.useFakeTimers();

describe('Input component', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should render Input component correctly', () => {
    render(<Input name={'input-test'} />);
  });

  it('should render Input component with icon', () => {
    const { getByA11yRole } = render(
      <Input placeholder="Test placeholder" name={'input-test'} icon="home" />,
    );

    const IconComponent = getByA11yRole('button');

    expect(IconComponent).not.toBeUndefined();
  });

  it('should render Input component with icon and errorMessage and attention color', () => {
    const { getByA11yRole, getByText } = render(
      <Input
        placeholder="Test placeholder"
        name={'input-test'}
        icon="home"
        errorMessage="Test error"
        hasError={true}
      />,
    );

    const IconComponent = getByA11yRole('button').parent as any;
    const IconComponentColor =
      IconComponent!.children[0].props.children[0].props.children.props.color;

    getByText('Test error');
    expect(IconComponentColor).toEqual(theme.colors.attention);
  });

  it('should render Input component with disabled icon and with gray color', () => {
    const { getByA11yRole } = render(
      <Input
        placeholder="Test placeholder"
        name={'input-test'}
        icon="home"
        disabled={true}
      />,
    );

    const IconComponent = getByA11yRole('button') as any;

    const IconComponentColor =
      IconComponent.parent.children[0].props.children[0].props.children.props
        .color;

    expect(IconComponent).toBeDisabled();
    expect(IconComponent).not.toBeUndefined();
    expect(IconComponentColor).toEqual('gray');
  });

  it('should render Input component with enabled icon', () => {
    const { getByA11yRole } = render(
      <Input
        placeholder="Test placeholder"
        name={'input-test'}
        icon="home"
        disabled={false}
      />,
    );

    const IconComponent = getByA11yRole('button') as any;

    const IconComponentColor =
      IconComponent.parent.children[0].props.children[0].props.children.props
        .color;

    expect(IconComponent).not.toBeDisabled();
    expect(IconComponent).not.toBeUndefined();
    expect(IconComponentColor).toEqual('#1F4977');
  });
});
