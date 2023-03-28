const addZeroLeftString = (num: string | number, size: number) => {
  return num.toString().padStart(size, '0');
};

const addZeroLeftMaskCpfCnpj = (cpfCnpj: string | number, type: string) => {
  return type === 'cpf'
    ? addZeroLeftString(cpfCnpj, 11)
    : addZeroLeftString(cpfCnpj, 14);
};

export const formatReplaceDocumentNumber = (
  cpfCnpj: string | number,
  type: 'cpf' | 'cnpj',
) => {
  if (!cpfCnpj) {
    return '';
  }

  const typeCpfCnpj: any = {
    number: parseInt(cpfCnpj.toString().replace(/[^0-9]+/g, ''), 10),
    string: addZeroLeftMaskCpfCnpj(
      cpfCnpj.toString().replace(/[^0-9]+/g, ''),
      type,
    ),
  };

  return typeCpfCnpj[typeof cpfCnpj];
};

export const formatReplacePhone = (phone: string) => {
  if (!phone) {
    return '';
  }

  phone = phone.replace(/[^0-9]+/g, '');
  return phone;
};

export const formatReplaceCep = (cep: string | number) => {
  if (!cep) {
    return '';
  }

  const typeCep: any = {
    number: parseInt(cep.toString().replace(/[^0-9]+/g, ''), 10),
    string: cep.toString().replace(/[^0-9]+/g, ''),
  };

  return typeCep[typeof cep];
};
