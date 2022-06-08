# Idopterlabs React Native Template

| | | |
| - | - | - |
![image](https://user-images.githubusercontent.com/5731176/172487765-efc86b04-5244-438d-b441-94bf5d544399.png) | ![image](https://user-images.githubusercontent.com/5731176/172487825-4ac12b38-511c-45d7-b4c4-967620b2ea3e.png) | ![image](https://user-images.githubusercontent.com/5731176/172487790-709491b1-9361-4e96-98be-edb9d3cf86f7.png) |

- 🚀 Typescript
- 🚀 Testes
- 🚀 Controle de rotas
- 🚀 Suporte a temas (light/dark)
- 🚀 Design consolidado
- 🚀 Splashscreen
- 🚀 Serviços para HTTP Request e tratamento de erros
- 🚀 Monitoramento de bugs via AppCenter

## Sobre

Este template possuir uma base sólida para desenvolvimento de aplicativos mobile usando React Native. São fornecidos estrutura de pastas organizadas, dependências comuns usadas, controle de rotas de navegação, configuração de testes usando Jest e utilitários.

## Inicializando um projeto

### Pré-requisitos
- NVM
- Yarn
- Cocoapods
- JDK 11
- Xcode
- Android SDKs (Recomendado instalar via Android Studio)

### Usando o Template

Há duas maneiras de usar esse template.

1. Clonando o repositório e usando a [react-native-rename](https://github.com/junedomingo/react-native-rename) ferramenta  para troca o nome do app conforme o projeto que será desenvolvido.
2. Inicializar um novo projeto react native pela ferramenta  [oficial](https://reactnative.dev/docs/environment-setup#creating-a-new-application) e copiar os demais arquivos desse repositório, excerto o  `package.json`, `app.json`, `android/` e `ios/`, e por final copiar as dependências que não estão inclusas no projeto oficial. Lembrando que algumas delas são necessárias aplicar configurações especias nas pastas designado de cada sistema operacional (`android/` e `ios/`):

- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons#installation)
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash#setup-1)
- [react-native-screens](https://github.com/software-mansion/react-native-screens#installation)

## Configurações

### Variável de Ambiente

As variáveis de ambiente devem ser colocadas no arquivo `.env`, um exemplo de como definir as variáveis usadas está localizado em [`.env.example`](./.env.example), lembrando de que sempre que criar uma nova variável no projeto definir ela no .env.example também, para que outros membros possam ter conhecimento dela. Algumas regras para nomenclatura de variável:
- Devem começar com "RN"
- Usar estilo de nome de variável [snake case](https://en.wikipedia.org/wiki/Snake_case)
- Usar somente letras maiúsculas e sem acentuação

Exemplos:
- `RN_MINHA_VARIAVEL`
- `RN_USER_ID`
- `RN_PASS`

Por padrão todo projeto tem três variáveis:

- `RN_BASE_URL`: Informar a URL base referente a URL de um serviço web que em algum momento o cliente pode ser redirecionado de dentro do app
- `RN_BASE_URL_API`: Informar a URL base referente ao consumo de uma web API dedicado ao app
- `RN_ENV`: O ambiente que está sendo usado, como, por exemplo: `development`, `test`, `staging`, `production`

### Splashscreen

Para criar uma splashscreen você deve usar o [generate-bootsplash](https://github.com/zoontek/react-native-bootsplash#assets-generation), informado o caminho para a logo da splashscreen e a cor de fundo, exemplo: 

```sh
yarn react-native generate-bootsplash src/assets/images/logoSplashScreen.png --background-color=ffffff --logo-width=100 --assets-path=src/assets --flavor=main
```

Uma segunda tela de abertura pode ser configurada em [`src/screens/SplashScreen`](./src/screens/SplashScreen/) (Recomendado deixar como Splashscreen nativo, para não ter efeito de "piscada de tela" entre as transições), essa não está limitada a apenas utilização de uma imagem, elementos como barra de carregamento podem ser adicionando. Essa tela é carregada após o SplashScreen nativo do sistema operacional (Android/iOS), essa tela em questão deve ser usado para esperar o carregamento ou verificação de dados do app, tal como se o usuário está autenticado.

Para mais informações de padrões da SplashScreen veja em [Android Guide - Splash screens](https://developer.android.com/guide/topics/ui/splash-screen#splash_screen_dimensions).

### App Center

Usamos o AppCenter para gerar build e monitorar crash, devido isso você deverá fornecer o "APP SECRET" do projeto registrado no AppCenter em `appcenter-config.json`.

## Folha de Estilo

O template é projetado para utiliza [Styled Component](https://styled-components.com/) e [React Native Paper](https://callstack.github.io/react-native-paper/), a customização do app é feito através de configurações de estilo localizado em [`src/theme`](./src/theme/).

A principal dele é as cores ([`src/theme/colors.ts`](./src/theme/colors.ts)), nele está contido as cores a serem consumido no app, usado o [sistema de cores do Material Design](https://material.io/design/color/the-color-system.html#color-theme-creation), devido isso é possível inclusive usar a ferramenta  de customização de tema do Material Design: [https://material.io/resources/color/](material.io/resources/color/). Caso o App tenha uma variente de modo escuro, suas cores podem ser definido em [`src/theme/colors.dark.ts`](./src/theme/colors.dark.ts).


## Estrutura do Projeto

</br>📦`(root template)`
</br> ┣ 📂`.vscode` **(Configurações e extensões para o VSCode)**
</br> ┣ 📂`android` **(Configurações e código nativo referente ao Android)**
</br> ┣ 📂`ios` **(Configurações e código nativo referente ao iOS)**
</br> ┣ 📂`patches` **(Correções e melhoria dos pacotes usados no projeto)**
</br> ┣ 📂`src` **(Pastar principal do projeto)**
</br> ┃ ┣ 📂`assets` **(Arquivos estáticos)**
</br> ┃ ┃ ┣ 📂`fonts` **(Fontes)**
</br> ┃ ┃ ┣ 📂`images` **(Imagens .png, .jpg, etc)**
</br> ┃ ┃ ┗ 📂`svg` **(SVGs .svg)**
</br> ┃ ┣ 📂`components` **(Componentes usado no app)**
</br> ┃ ┃ ┣ 📂`[Nome do componente]`
</br> ┃ ┃ ┃ ┣ 📜`index.tsx` **(Implementação do componente)**
</br> ┃ ┃ ┃ ┣ 📜`index.spec.tsx` **(Teste do componente)**
</br> ┃ ┃ ┃ ┗ 📜`styles.ts` **(Folha de estilo do componente)**
</br> ┃ ┣ 📂`contexts` **(Contexto)**
</br> ┃ ┃ ┣ 📜`AllProviders.tsx` **(Importação de todos os Contextos usado no app)**
</br> ┃ ┃ ┣ 📜`[Nome do Contexto]Context.spec.tsx` **(Implementação de controle de um contexto)**
</br> ┃ ┃ ┗ 📜`[Nome do Contexto]Context.tsx` **(Testes de um contexto)**
</br> ┃ ┣ 📂`routes` **(Gerenciamento de rotas)**
</br> ┃ ┃ ┣ 📜`AppNavigator.tsx` **(Gerenciamento principal de rotas do app - usúario autendicado)**
</br> ┃ ┃ ┣ 📜`AuthNavigator.tsx` **(Gerenciamento de rotas de um usúario não autendicado)**
</br> ┃ ┃ ┗ 📜`MockedNavigator.tsx` **(Gerenciamento de rotas para testes)**
</br> ┃ ┣ 📂`screens` **(Telas usado no App)**
</br> ┃ ┃ ┣ 📂`App` **(Telas principal do app - usúario autendicado)**
</br> ┃ ┃ ┃ ┗ 📂`[Nome da Tela]`
</br> ┃ ┃ ┃ ┃ ┣ 📜`index.tsx` **(Implementação da da tela)**
</br> ┃ ┃ ┃ ┃ ┣ 📜`index.spec.tsx` **(Teste da tela)**
</br> ┃ ┃ ┃ ┃ ┗ 📜`styles.ts` **(Folha de estilo da tela)**
</br> ┃ ┃ ┣ 📂`Auth` **(Telas para o usúario não autendicado)**
</br> ┃ ┃ ┃ ┗ 📂 `[Nome da Tela]`
</br> ┃ ┃ ┗ 📂`SplashScreen` **(Tela de carregamento do app)**
</br> ┃ ┣ 📂`services` **(Serviços a serem consumido pelo app)**
</br> ┃ ┃ ┣ 📜`api.ts` **(Implementação dos métods da Web API)**
</br> ┃ ┃ ┣ 📜`[Nome do Serviço].ts` **(Implementação de um novo serviço)**
</br> ┃ ┃ ┗ 📜`[Nome do Serviço].spec.tsx` **(Realização do teste de um serviço)**
</br> ┃ ┣ 📂`tests` **(Utilitários para teste)**
</br> ┃ ┃ ┣ 📂`actions` **(Ações commum realizadas em testes)**
</br> ┃ ┃ ┣ 📂`mocks` **(Mocks para teste)**
</br> ┃ ┃ ┃ ┣ 📜`[Nome grupo de Mocks].ts` **(Implementação de mocks)**
</br> ┃ ┃ ┃ ┣ 📜`global.ts` **(Importação de todos os mocks usado globalmente)**
</br> ┃ ┃ ┗ 📂`responses` **(Mocks de request do Axios)**
</br> ┃ ┃ ┃ ┗ 📜`[Nome do método para request na API].ts` **(Implementação do mock)**
</br> ┃ ┣ 📂`theme` **(Implementação de estilo do app)**
</br> ┃ ┃ ┣ 📜`colors.dark.ts` **(Cores do app no modo dark)**
</br> ┃ ┃ ┣ 📜`colors.ts` **(Cores do app)**
</br> ┃ ┃ ┣ 📜`common.ts` **(Folha de estilo commun detro do app)**
</br> ┃ ┃ ┣ 📜`dimensions.ts` **(Dimensões commun dentro do app)** 
</br> ┃ ┃ ┗ 📜`index.ts` **(Importação de todo o tema)**
</br> ┃ ┣ 📂`typings` **(Somente implementação de tipagem para o Typescript)**
</br> ┃ ┣ 📂`utils` 
</br> ┃ ┃ ┣ 📜`[Nome do Utilitário].ts` **(Importação do utilitário)**
</br> ┃ ┃ ┗ 📜`[Nome do Utilitário].spec.tsx` **(Teste do utilitário)**
</br> ┃ ┗ 📜`App.tsx`
</br> ┣ 📜`.editorconfig` **(Configurações de editor de código)**
</br> ┣ 📜`.env.example` **(Exemplo de configurações de variável de ambiente)**
</br> ┣ 📜`.env.test` **(Configurações de variável de ambiente para teste)**
</br> ┣ 📜`.env` **(Configurações de variável de ambiente para o app)**
</br> ┣ 📜`.eslintrc.js`**(Configurações do ESlint)**
</br> ┣ 📜`.gitignore`
</br> ┣ 📜`.nvmrc` **(Configurações da versão do Node)**
</br> ┣ 📜`.prettierrc.js`
</br> ┣ 📜`.ruby-version` **(Configurações da versão do Roby)**
</br> ┣ 📜`.watchmanconfig`
</br> ┣ 📜`app.json`
</br> ┣ 📜`appcenter-config.json`
</br> ┣ 📜`appcenter-post-clone.sh`
</br> ┣ 📜`appcenter-pre-build.sh`
</br> ┣ 📜`babel.config.js` **(Configurações do babel)**
</br> ┣ 📜`Gemfile`
</br> ┣ 📜`index.js`
</br> ┣ 📜`jest.config.js` **(Configurações do Jest para testes)**
</br> ┣ 📜`jestSetupFile.js`
</br> ┣ 📜`metro.config.js`
</br> ┣ 📜`package.json` **(Configurações em geral do pacote)**
</br> ┣ 📜`react-native.config.js`
</br> ┣ 📜`tsconfig.json` **(Configurações do Typescript)**
</br> ┗ 📜`yarn.lock`

## Padrões de Estilo

O projeto usa [ESlint](https://eslint.org/), [Prettier](https://prettier.io/) e [EditorConfig](https://editorconfig.org/), para controlar padrões de estilo. Abaixo estão algumas regras que ainda não podem ser aplicadas via uma dessas ferramentas.

- Separar importação por contexto, sendo as primeiras importações do react e react native, depois do node module, e em seguida por grupo de pastar e por último importações com caminho relativo.

❌ Não fazer

```ts
import { alertSpy } from '@tests/actions/alertSpy';
import React from 'react';
import { mockedNavigate } from '@tests/mocks/rnNavigation';
import Home from './index';
import MockedNavigator from '@routes/MockedNavigator';
import { act, cleanup, render } from '@testing-library/react-native';
```

✅ Fazer isso

```ts
import React from 'react';

import { act, cleanup, render } from '@testing-library/react-native';

import { alertSpy } from '@tests/actions/alertSpy';
import { mockedNavigate } from '@tests/mocks/rnNavigation';

import MockedNavigator from '@routes/MockedNavigator';

import Home from './index';
```

- Usar [CamelCase](https://en.wikipedia.org/wiki/Camel_case) em nomenclatura de variável. Permitido fuga do padrão quando trata de uma variável dentro de um corpo de um HTTP response/request.

❌ Não fazer

```ts
const firt_Name: string = 'João';
const LAST_NAME: string = 'Paulo';
```

✅ Fazer isso

```ts
const firtName: string = 'João';
const lastName: string = 'Paulo';
```

- Informar o tipo no `useState`.

❌ Não fazer

```ts
const [isFocus, setIsFocus] = useState(false);
const [currentValue, setNewValue] = useState('');
```

✅ Fazer isso

```ts
const [isFocus, setIsFocus] = useState<boolean>(false);
const [currentValue, setNewValue] = useState<string>('');
```

## Testes

Para testes unitários está sendo utilizado biblioteca [Jest](https://jestjs.io/docs/getting-started) e para escrever os testes é necessário criar arquivos `.spec.ts`/ `.spec.tsx` dentro do mesmo diretório em que se encontra o fragmento de código.

### HTTP Request
Há alguns utilitários para facilitar a criação de testes, o primeiro deles é criar uma copiar mockado dos retornos da API localizado em [`src/tests/responses/`](./src/tests/responses/), veja o exemplo de como criar um espelho de um request em [`src/tests/responses/exampleMethodName.ts`](./src/tests/responses/exampleMethodName.ts).

### Alert
Caso tenha um teste que envolva alerta, há um utilitário em [`src/tests/actions/alertSpy.ts`](./src/tests/actions/alertSpy.ts), como ele você pode selecionar um botão em específico pelo nome:

```ts
import { alertSpy, onAlertActions } from '@tests/actions/alertSpy';

// ... //

const { pressAlertButton } = onAlertActions();

describe('Home Screen', () => {
  afterEach(() => {
    cleanup();
    alertSpy.mockClear();
  });

  // ... //

  it('should ...', async () => {
    // ... //

    await act(async () => {
      await waitFor(() => alertSpy);

      expect(alertSpy).toHaveBeenCalledTimes(1);
      expect(alertSpy).toHaveBeenLastCalledWith(
        'Falha!',
        'Não foi possível obter dados',
        expect.anything(),
        expect.anything(),
      );

      await pressAlertButton('Confirmar');
    });

    // ... //
  });
});
```

### Render
Para carregamento correto dos render deve estar atento que ao realizar os testes de tela, deve ser usado o `MockedNavigator`: 

```ts
import MockedNavigator from '@routes/MockedNavigator';

import NameScreen from './index';

// ... //

describe('Name Screen', () => {
  // ... //

  it('should render correctly', async () => {
    render(<MockedNavigator component={NameScreen} />);
    await act(async () => {});
  });

  // ... //
});
```

Agora caso precise apenas que faça o carregamento do tema em um componente pode ser usado o `shadowTheme`: 

```tsx
import { shadowTheme } from '@tests/actions/styledTheme';

import NameComponent from './index';

// ... //

describe('Name Component', () => {
  // ... //

  it('should render correctly', async () => {
    render(shadowTheme(<NameScreen placeholder="Test placeholder" />));
    await act(async () => {});
  });

  // ... //
});
```

### Mocks

Os mocks a serem consumido no projeto podem ser criados em [`src/tests/mocks/`](./src/tests/mocks/) sendo separados em arquivos, de acordo com seu contexto ou biblioteca facilitando a manutenção. Os mocks que serão consumidos globalmente devem ser importados em [`src/tests/mocks/global.ts`](./src/tests/mocks/global.ts), os demais devem ser importando quando necessário no arquivo de spec do teste.


## Dependências Recomendas
### UI/Componentes

- [react-navigation](https://reactnavigation.org/): Controle de rotas de navegação
- [react-native-paper](https://callstack.github.io/react-native-paper): UIKit com vastar quantidade de componentes pronto, personalizável e seguindo o padrão de UX do Material Design. 
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons): Pacotes de ícones
- [react-native-bootsplash](https://github.com/zoontek/react-native-bootsplash): Implementar nativamente uma SplashScreen usando as APIs oficial de cada sistema operacional
- [react-native-element-dropdown](https://github.com/hoaphantn7604/react-native-element-dropdown): Implementar um menu dropdown funcional e customizado
- [react-native-mask-text](https://github.com/akinncar/react-native-mask-text): Adicionar mascara nos componentes de Input
- [react-native-tiny-toast](https://www.npmjs.com/package/react-native-tiny-toast): Um componente de Toast que funcionar em qualquer sistema sem permissão especial
- [react-native-calendars](https://github.com/wix/react-native-calendars): Implementar visualização de calendário e DatePicker personalizável 
- [react-native-webview](https://github.com/react-native-webview/react-native-webview): Componente para adicionar WebView nativamente
- [react-native-linear-gradient](https://github.com/react-native-linear-gradient/react-native-linear-gradient): Componente para criar gradientes
- [react-native-skeleton-placeholder](https://github.com/chramos/react-native-skeleton-placeholder): Componente para criar placeholder
- [react-native-qrcode-svg](https://github.com/awesomejerry/react-native-qrcode-svg): Componente para gerar um QRCode usado SVG
- [react-native-confirmation-code-field](https://github.com/retyui/react-native-confirmation-code-field): Componente para criar telas de código de confirmação com suporte nativo de autocomplete via SMS

### Autenticação

- [react-native-auth0](https://github.com/auth0/react-native-auth0): Implementação de autenticação direto com o Auth0

### Notificação

- [@react-native-firebase/messaging](https://rnfirebase.io/messaging/usage): Notificação via Firebase
- [react-native-onesignal](https://documentation.onesignal.com/docs/react-native-sdk-setup): Notificação via OneSignal

### Utilitário

- [appcenter](https://docs.microsoft.com/en-us/appcenter/sdk/getting-started/react-native): Integração com AppCenter
- [axios](https://axios-http.com/docs/intro): HTTP Cliente.
- [luxon](https://moment.github.io/luxon/#/): Formatação de data
- [patch-package](https://www.npmjs.com/package/patch-package): Aplicação de correção em pacotes
- [react-hook-form](https://react-hook-form.com/): Gerenciamento de formulários
- [yup](https://github.com/jquense/yup): Validação de dados
- [react-native-device-info](https://github.com/react-native-device-info/react-native-device-info): Informar dados sobre o dispositivo
- [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer): Permitir importar arquivos .SVG
- [@react-native-firebase/remote-config](https://rnfirebase.io/remote-config/usage): Integração com Firebase Remote Config
- [react-native-camera](https://github.com/react-native-camera/react-native-camera): Suporte para usar câmera nativamente do dispositivo
