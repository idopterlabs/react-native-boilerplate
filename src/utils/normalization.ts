export const extractPhoneNumber = (value: string): string => {
  if (!value) {
    return '';
  }

  value = value.replace(/[^0-9]+/g, '');
  return value;
};

export const uppercaseFirstLetter = (value: string) => {
  if (typeof value !== 'string' || !value) {
    return '';
  }

  return value[0].toUpperCase() + value.substring(1);
};

export const hiddenCardNumber = (value: string) => {
  let init = value.slice(0, 4);
  let mid = '********';
  let end = value.slice(12, value.length);
  let valueFormatted = init + mid + end;

  return valueFormatted;
};

export const formatId = (value: string) => {
  return value.slice(0, 15);
};

export default {
  extractPhoneNumber,
  uppercaseFirstLetter,
};

export const getTranslationProduct = (type: string) => {
  const productType = type;

  const cases = {
    fuel: 'Abastecimento',
    telemetry: 'Telemetria',
    service: 'Serviços',
    food: 'alimento',
    gas: 'Vale gás',
    retailer: 'Revenda',
    asset: 'Patrimônio',
    transportation: 'Transporte',
    single_product: 'Produto avulso',
    Default: 'Tipo não cadastrado',
  };

  //@ts-ignore
  return cases[productType] || cases.Default;
};

type PossibleBidLabel = {
  [key: string]: string;
};

export const getTranslationBidLabel = (type: string) => {
  const labelType = type;

  const cases: PossibleBidLabel = {
    preventive: 'Preventiva',
    corretive: 'Corretiva',
    maintenance: 'Manutenção',
    tracker_install: 'Instalação do Equipamento de Rastreio',
    tracker_uninstall: 'Desinstalação/Retirada do Equipamento de Rastreio',
    tow: 'Reboque',
    component: 'Peça/Item',
    service: 'Serviço',
    Default: 'Não cadastrado',
  };

  return cases[labelType] || cases.Default;
};
