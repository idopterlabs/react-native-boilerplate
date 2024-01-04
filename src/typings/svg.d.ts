declare module '@assets/svg/*' {
  import React from 'react';

  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
