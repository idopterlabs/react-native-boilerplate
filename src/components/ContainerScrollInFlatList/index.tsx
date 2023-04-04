import React from 'react';

import { FlatList, FlatListProps } from 'react-native';

interface Props
  extends Omit<FlatListProps<null | undefined>, 'data' | 'renderItem'> {
  isLoading?: boolean;
  children?: React.ReactNode;
}

const ContainerScrollInFlatList = ({
  children,
  isLoading,
  ...props
}: Props) => {
  return (
    <FlatList
      data={[]}
      keyExtractor={/* istanbul ignore next */ () => 'flatList:view'}
      renderItem={null}
      refreshing={isLoading}
      ListHeaderComponent={<>{children}</>}
      {...props}
    />
  );
};

export default ContainerScrollInFlatList;
