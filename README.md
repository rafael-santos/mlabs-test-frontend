# mlabs-test-frontend

## Escolha de tecnologias

O projeto foi realizado com `Vue.js` para por em prova o que foi conversado em entrevista quando afirmei que "se eu fosse começar um novo projeto do zero, escolheria o Vue como framework pela facilidade e baixa curva de aprendizado, principalmente pensando em novas pessoas entrando na equipe".

Nunca tive prática profissional no framework, passei por algumas dificuldades de configuração de linter, babel, uso de variáveis scss dentro dos arquivos .vue, mas consegui resolver todos os problemas, aprender a usar o framework a partir da documentação oficial, Stack Overflow e um vídeo no youtube https://www.youtube.com/watch?v=4deVCNJq3qc

Optei pelo uso de `Bootstrap 4` e `Fontawesome` para me auxiliar com o visual, classes utilitárias e acelerar o desenvolvimento. Uma dificuldade que senti foi a falta de padronização de espaçamentos, cores e tamanhos de fontes que são a base para um Design System. Navegando pelo teste gratuito da plataforma, por exemplo, encontrei uns 8 tipos diferentes de botões e espaçamentos com valores quase iguais mas diferentes. Isso dificulta o pensamento de implementação de CSS reutilizável, variáveis padrão para tamanhos de espaçamentos, etc.

Procurei um equilíbrio entre centralizar e usar valores padrão e manter o look and feel da página proposta.

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
