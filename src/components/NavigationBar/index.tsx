import React from 'react';

import { StackHeaderProps } from '@react-navigation/stack';

import {
  AppBarContainerView,
  AppBarBackActionView,
  AppBarTitleView,
  AppBarActionView,
} from './styles';

export interface Props {
  props: StackHeaderProps;
}

export default ({ props }: Props) => {
  let isShowBackButton: boolean = !!props.back;

  // @ts-ignore
  if (props.options.isShowBackButton === false) {
    isShowBackButton = false;
  }

  return (
    <AppBarContainerView>
      {isShowBackButton && (
        <AppBarBackActionView
          onPress={props.navigation.goBack}
          testID="appBarActionView:navigationBar:back"
        />
      )}
      <AppBarTitleView title={props.options.title || 'Dashboard'} />

      {/* @ts-ignore */}
      {props.options.actions?.map((action) => {
        return (
          <AppBarActionView
            key={`appBarActionView:navigationBar:${action.iconName}`}
            testID={`appBarActionView:navigationBar:${action.iconName}`}
            icon={action.iconName}
            onPress={action.onPress}
          />
        );
      })}
    </AppBarContainerView>
  );
};
