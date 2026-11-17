# Presente virtual para Nalanda

Projeto de aniversário em HTML, CSS e JavaScript. Não precisa instalar bibliotecas nem usar um servidor backend.

## 1. Estrutura

- `index.html`: conteúdo da página.
- `style.css`: cores, layout, responsividade e animações.
- `script.js`: abertura da caixa, música, cartas, confetes e velas.
- `assets/fotos/`: fotografias do casal.
- `assets/musica/`: arquivo de música.

## 2. Fotografias

As 20 fotos estão na pasta `assets/fotos/`: 18 aparecem no collage (`Primera foto.jpeg` abre a sequência e `foto 16.jpeg` fecha), enquanto `Foto 8.jpeg` e `foto 19.jpeg` aparecem uma vez ao lado da mensagem final. Se trocar uma foto, mantenha o nome correspondente ou atualize o `src` no `index.html`.

## 3. Trilha sonora

A página toca `TIAGO IORC - Coisa Linda`, em loop. A música começa quando Nalanda abre a caixa, respeitando o bloqueio de reprodução automática do navegador. O botão no topo pausa e retoma a música do ponto em que parou.

## 4. Personalizar os textos

Abra `script.js` e procure o objeto `letters`. Edite os textos das duas cartas para incluir memórias, apelidos, detalhes e promessas reais de vocês.

No `index.html`, você também pode mudar:
- as frases abaixo das fotografias;
- o texto da distância;
- a mensagem final.

Recomendo escrever as cartas com suas próprias palavras. Os textos atuais são uma base para editar.

## 5. Testar no computador

1. Extraia a pasta do ZIP.
2. Abra a pasta no VS Code.
3. Abra `index.html` no navegador (duplo clique) ou use a extensão Live Server no VS Code.
4. Teste os botões, abra as cartas e confira a música.

## 6. Publicar gratuitamente no Netlify

1. Acesse https://app.netlify.com/drop
2. Arraste a pasta `presente-nalanda` já com fotos e música para a área indicada.
3. Aguarde a publicação e copie o endereço gerado.
4. Abra o endereço no celular para conferir.
5. Envie o link para Nalanda no aniversário.

Se já usa Netlify, também pode criar um novo site e fazer deploy manual da pasta.

## 7. Checklist antes de enviar

- [ ] As fotos aparecem no celular.
- [ ] A trilha começa ao abrir a caixa e o botão de música funciona.
- [ ] Personalizei as duas cartas com detalhes nossos.
- [ ] Testei abrir a caixa e apagar as velas.
- [ ] Testei o link publicado em uma janela anônima e no celular.
- [ ] Não deixei informações privadas que não quero tornar públicas.

## Nota de privacidade

Qualquer pessoa que tiver o link público poderá ver as fotos e os textos. Não inclua dados pessoais sensíveis, endereços ou informações privadas.
