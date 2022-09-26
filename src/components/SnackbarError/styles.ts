import styled from 'styled-components/native';

import { second } from '@utils/units';

import { Snackbar as SnackbarComponent } from 'react-native-paper';

export interface Props {
  currentPosition: 'top' | 'bottom';
}

export const Snackbar = styled(SnackbarComponent).attrs((props: Props) => ({
  duration: 3 * second,
  wrapperStyle: props.currentPosition === 'top' ? { top: 0 } : { bottom: 0 },
}))<Props>``;
