# Changelog 📝

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.3] - 2022-01-31

### Added

- Adicionado tema do React Navigation
- Adicionado tipo de estilo (dark/light) na status bar
- Adicionado comando no NPM para verificar tipagem do Typescript em todo o projeto (ts-check)

### Changed

- Atualizado patch do React Native Paper para 4.12.4

### Fixed

- Usando cor de fundo da barra de navegação via contexto do tema


## [1.0.2] - 2022-09-26

### Added

- Adicionado componente alternativo ao Alert para mostrar erros de forma mais sutil (Snackbar)
- Adicionado retornos original de http status e http response data para erros de request
- Adicionado exemplo de testes usando FireEvent
- Adicionado Mock para RN Reanimated
- Adicionado Mock para RN Safe Area Context

### Changed

- Definindo versão fixa de instalação do React Native Reanimated
- Primeira letra do campo de erro é mostrado com letra maiúscula
- Novo componente de input com suporte melhor a dark mode, eventos de troca de texto e mostrar label personalizada.

### Fixed

- Usando estilo compatível com VSCode Styled
- Alinhando texto de erro no input
- Status 422 agora mostrar o erro processado
- Tirando opacidade da cores em componentes desabilitados
- Adicionado opção para configurar cor do `placeholder`
- Mock de navegação incorporar o tema
- Evitar problemas de sobreposição do teclado no iOS onde há scroll
- Suporte a DarkMode para o Select
- FormData não funcionar no Jest
- Falhas na importação de funções do RN Platform
- Corrigido problema do Safe Area Context não funcionar no Jest

## [1.0.1] - 2022-06-20

### Fixed

- Aplicando cor no fundo que faltava 

## [1.0.0] - 2022-06-13

### Added

- Criado boilerplate
