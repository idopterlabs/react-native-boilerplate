import { cleanup } from '@testing-library/react-native';

import { formatReplaceDocumentNumber, formatReplacePhone } from './masks';

describe('Masks Utils', () => {
  beforeEach(cleanup);
  afterEach(cleanup);

  it('should return a string cpf without cpf props', () => {
    const cpfFake = '05895878242';
    const cpfFakeResult = formatReplaceDocumentNumber(cpfFake, 'cpf');

    expect(cpfFakeResult).toBe('05895878242');
  });

  it('should return a string cpf with cpf props', () => {
    const cpfFake = '05895878242';
    const cpfFakeResult = formatReplaceDocumentNumber(cpfFake, 'cpf');

    expect(cpfFakeResult).toBe('05895878242');
  });

  it('should return a string cpf without zero and with cpf props', () => {
    const cpfFake = '5895878242';
    const cpfFakeResult = formatReplaceDocumentNumber(cpfFake, 'cpf');

    expect(cpfFakeResult).toBe('05895878242');
  });

  it('should return a number cpf with cpf props', () => {
    const cpfFake = 5895878242;
    const cpfFakeResult = formatReplaceDocumentNumber(cpfFake, 'cpf');

    expect(cpfFakeResult).toBe(5895878242);
  });

  it('should return a string cpf with cpf formatted and cpf props', () => {
    const cpfFake = '058-958-782-42';
    const cpfFakeResult = formatReplaceDocumentNumber(cpfFake, 'cpf');

    expect(cpfFakeResult).toBe('05895878242');
  });

  it('should return a empty string with a empty cpf props', () => {
    const cpfFake = '';
    const cpfFakeResult = formatReplaceDocumentNumber(cpfFake, 'cpf');

    expect(cpfFakeResult).toBe('');
  });

  it('should return a string cnpj with cnpj props', () => {
    const cnpjFake = '41361365000129';
    const cnpjFakeResult = formatReplaceDocumentNumber(cnpjFake, 'cnpj');

    expect(cnpjFakeResult).toBe('41361365000129');
  });

  it('should return a string cnpj without zero and with cnpj props', () => {
    const cnpjFake = '1361365000129';
    const cnpjFakeResult = formatReplaceDocumentNumber(cnpjFake, 'cnpj');

    expect(cnpjFakeResult).toBe('01361365000129');
  });

  it('should return a number cnpj with cnpj props', () => {
    const cnpjFake = 41361365000129;
    const cnpjFakeResult = formatReplaceDocumentNumber(cnpjFake, 'cnpj');

    expect(cnpjFakeResult).toBe(41361365000129);
  });

  it('should return a string cnpj with cnpj formatted and cnpj props', () => {
    const cnpjFake = '41.361.365.0001-29';
    const cnpjFakeResult = formatReplaceDocumentNumber(cnpjFake, 'cnpj');

    expect(cnpjFakeResult).toBe('41361365000129');
  });

  it('should return a empty string with a empty cnpj props', () => {
    const cnpjFake = '';
    const cnpjFakeResult = formatReplaceDocumentNumber(cnpjFake, 'cnpj');

    expect(cnpjFakeResult).toBe('');
  });

  it('should return a string phone with a formatted phone props', () => {
    const phoneNumberFake = '(91) 99999-4325';
    const phoneNumberFakeResult = formatReplacePhone(phoneNumberFake);

    expect(phoneNumberFakeResult).toBe('91999994325');
  });

  it('should return a empty string with a empty phone props', () => {
    const phoneNumberFake = '';
    const phoneNumberFakeResult = formatReplacePhone(phoneNumberFake);

    expect(phoneNumberFakeResult).toBe('');
  });
});
