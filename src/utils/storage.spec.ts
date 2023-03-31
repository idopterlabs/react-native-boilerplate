import { cleanup } from '@testing-library/react-native';

import Storage from './storage';

interface DataMock {
  name: string;
  age: number;
  isFather: boolean;
  isAdmin: boolean;
}

describe('Storage Utils', () => {
  beforeEach(async () => {
    Storage.clearAll();
    jest.clearAllMocks();
    cleanup();
  });

  afterEach(cleanup);

  const dataMock: DataMock = {
    name: 'Tiago',
    age: 24,
    isFather: false,
    isAdmin: true,
  };

  it('should save string and restore value', async () => {
    expect(Storage.getString('name')).resolves.toBeNull();
    await Storage.setString('name', dataMock.name);
    expect(Storage.getString('name')).resolves.toBe(dataMock.name);
    await Storage.clear('name');
    expect(Storage.getString('name')).resolves.toBeNull();
  });

  it('should save number and restore value', async () => {
    expect(Storage.getNumber('age')).resolves.toBeNull();
    await Storage.setNumber('age', dataMock.age);
    expect(Storage.getNumber('age')).resolves.toBe(dataMock.age);
    await Storage.clear('age');
    expect(Storage.getNumber('age')).resolves.toBeNull();
  });

  it('should boolean object and restore value', async () => {
    expect(Storage.getBoolean('isFather')).resolves.toBeNull();
    expect(Storage.getBoolean('isAdmin')).resolves.toBeNull();

    await Storage.setBoolean('isFather', dataMock.isFather);
    await Storage.setBoolean('isAdmin', dataMock.isAdmin);

    expect(Storage.getBoolean('isFather')).resolves.toBeFalsy();
    expect(Storage.getBoolean('isAdmin')).resolves.toBeTruthy();

    await Storage.clear('isFather');
    await Storage.clear('isAdmin');

    expect(Storage.getBoolean('isFather')).resolves.toBeNull();
    expect(Storage.getBoolean('isAdmin')).resolves.toBeNull();
  });

  it('should object number and restore value', async () => {
    expect(Storage.getObject<DataMock>('data')).resolves.toBeNull();
    await Storage.setObject<DataMock>('data', dataMock);
    expect(Storage.getObject<DataMock>('data')).resolves.toBe(dataMock);
    await Storage.clear('data');
    expect(Storage.getObject<DataMock>('data')).resolves.toBeNull();
  });
});
