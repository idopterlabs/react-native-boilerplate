import styled from 'styled-components/native';

interface TextProps {
  isSelect: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  font-size: 16px;
  color: ${({ isSelect, theme }) =>
    isSelect ? theme.colors.disabledText : theme.colors.backgroundLight};
`;
