# Wowlet Provider App

Aplicativo Mobile para o Credenciado do Wowlet.

## App Center Builds

- Android: [![Build status](https://build.appcenter.ms/v0.1/apps/68edaec2-037d-4ae1-b73b-b04cd793254f/branches/main/badge)](https://install.appcenter.ms/orgs/b2/apps/wowlet-provider-app/distribution_groups/po)

- iOS: Soon

**Versão mínima do OS**

- Android Level 21 - 33 (5.0 - 13)
- iOS 12+

## Desenvolvimento do aplicativo
### Requisitos para o ambiente de desenvolvimento

Software essenciais para o desenvolvimento do aplicativo:

- [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
- [Asdf](https://asdf-vm.com/guide/getting-started.html#_1-install-dependencies)
- [Yarn](https://classic.yarnpkg.com/lang/en/docs/install)
- [Cocoapods](https://guides.cocoapods.org/using/getting-started.html)
- [JDK 11](https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html)
- [Xcode 13.2](https://apps.apple.com/us/app/xcode/id497799835) ou superior
- [Android SDKs](https://developer.android.com/about/versions/12/setup-sdk) - API Level 33 (Recomendado instalar via [Android Studio](https://developer.android.com/studio))

### Instalação do ambiente de desenvolvimento

1. Instalar ferramentas necessárias para o desenvolvimento (Veja em [Requisitos para o ambiente de desenvolvimento](#requisitos-para-o-ambiente-de-desenvolvimento))
2. Troque a versão Node e Ruby via NVM e Adsf respetivamente

```sh
$ nvm install && nvm use
$ asdf plugin-add ruby && asdf install
```

2. Baixar as dependências do projeto via Yarn

```sh
$ yarn install
```

3. Instalar as dependências nativas do iOS (No Android é feito de modo automático)

```sh
cd ios && pod install
```

4. Crie um arquivo com nome de `.env`, e informe as configurações de ambiente (exemplo de todas as configurações disponíveis em `.env.example`.

### Executado o projeto

```sh
# Rodando versão do app para Android
$ yarn android
# ou rodando versão do app para iOS
$ yarn ios
```

### Executado os testes

Para verificar os padrões de estilo de código use o comando

```
$ yarn lint
```

E para executar os testes do app use o comando

```sh
# Rodando os testes
$ yarn test
# ou rodando os testes com relatório de coverage (coverage\lcov-report\index.html)
$ yarn test:coverage
```

### Tech stack
- Typescript 4.9
- React Native 0.70
- Jest 27
- Paper 5 (Material Design You)
