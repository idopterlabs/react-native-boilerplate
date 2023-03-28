import styled from 'styled-components/native';

import { LoadingIndicator as LoadingIndicatorComponent } from '@theme/common';

export const LoadingIndicator = styled(LoadingIndicatorComponent)`
  margin-top: ${(props) => props.theme.dimensions.marginTopElementsForm}px;
`;
