# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: livros.spec.js >> Gerenciamento de Livros (E2E) >> deve permitir adicionar um novo livro e encontrá-lo na lista
- Location: e2e\livros.spec.js:26:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('input[name="titulo"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - heading [level=1]
      - generic [ref=e6]:
        - button "Alternar tema" [ref=e7] [cursor=pointer]:
          - img [ref=e8]
        - button "Sair" [ref=e10] [cursor=pointer]:
          - img [ref=e11]
  - generic [ref=e15]:
    - generic [ref=e16]:
      - heading "Acervo de Livros" [level=2] [ref=e17]
      - paragraph [ref=e18]: Gerenciamento completo da biblioteca
    - generic [ref=e19]:
      - textbox "Buscar por ID..." [ref=e21]
      - button [ref=e22] [cursor=pointer]:
        - img [ref=e23]
    - generic [ref=e26]:
      - generic [ref=e27]:
        - generic [ref=e28]:
          - generic [ref=e29]:
            - heading "Livo Novo y" [level=3] [ref=e30]
            - generic [ref=e31]:
              - img [ref=e32]
              - text: Josue
          - generic [ref=e35]: "#1"
        - generic [ref=e37]: Disponível para empréstimo em breve.
        - generic [ref=e38]:
          - button "Editar" [ref=e39] [cursor=pointer]:
            - img [ref=e40]
            - text: Editar
          - button "Excluir" [ref=e42] [cursor=pointer]:
            - img [ref=e43]
            - text: Excluir
      - generic [ref=e46]:
        - generic [ref=e47]:
          - generic [ref=e48]:
            - heading "teste" [level=3] [ref=e49]
            - generic [ref=e50]:
              - img [ref=e51]
              - text: "123"
          - generic [ref=e54]: "#350"
        - generic [ref=e56]: Disponível para empréstimo em breve.
        - generic [ref=e57]:
          - button "Editar" [ref=e58] [cursor=pointer]:
            - img [ref=e59]
            - text: Editar
          - button "Excluir" [ref=e61] [cursor=pointer]:
            - img [ref=e62]
            - text: Excluir
      - generic [ref=e65]:
        - generic [ref=e66]:
          - generic [ref=e67]:
            - heading "123" [level=3] [ref=e68]
            - generic [ref=e69]:
              - img [ref=e70]
              - text: "123"
          - generic [ref=e73]: "#351"
        - generic [ref=e75]: Disponível para empréstimo em breve.
        - generic [ref=e76]:
          - button "Editar" [ref=e77] [cursor=pointer]:
            - img [ref=e78]
            - text: Editar
          - button "Excluir" [ref=e80] [cursor=pointer]:
            - img [ref=e81]
            - text: Excluir
      - generic [ref=e84]:
        - generic [ref=e85]:
          - generic [ref=e86]:
            - heading "131" [level=3] [ref=e87]
            - generic [ref=e88]:
              - img [ref=e89]
              - text: "23"
          - generic [ref=e92]: "#352"
        - generic [ref=e94]: Disponível para empréstimo em breve.
        - generic [ref=e95]:
          - button "Editar" [ref=e96] [cursor=pointer]:
            - img [ref=e97]
            - text: Editar
          - button "Excluir" [ref=e99] [cursor=pointer]:
            - img [ref=e100]
            - text: Excluir
      - generic [ref=e103]:
        - generic [ref=e104]:
          - generic [ref=e105]:
            - heading "131231" [level=3] [ref=e106]
            - generic [ref=e107]:
              - img [ref=e108]
              - text: "3123"
          - generic [ref=e111]: "#353"
        - generic [ref=e113]: Disponível para empréstimo em breve.
        - generic [ref=e114]:
          - button "Editar" [ref=e115] [cursor=pointer]:
            - img [ref=e116]
            - text: Editar
          - button "Excluir" [ref=e118] [cursor=pointer]:
            - img [ref=e119]
            - text: Excluir
    - generic [ref=e122]:
      - button [disabled] [ref=e123] [cursor=pointer]:
        - img [ref=e124]
      - generic [ref=e126]: Página 1 de 2
      - button [ref=e127] [cursor=pointer]:
        - img [ref=e128]
    - button [ref=e130] [cursor=pointer]:
      - img [ref=e131]
    - generic [ref=e133]:
      - generic [ref=e134]:
        - heading "Novo Livro" [level=3] [ref=e135]
        - button [ref=e136] [cursor=pointer]:
          - img [ref=e137]
      - generic [ref=e140]:
        - generic [ref=e141]:
          - generic [ref=e142]:
            - generic [ref=e143]: Título do Livro
            - 'textbox "Ex: Dom Casmurro" [active] [ref=e144]'
          - generic [ref=e145]:
            - generic [ref=e146]: Autor
            - 'textbox "Ex: Machado de Assis" [ref=e147]'
        - generic [ref=e148]:
          - button "Cancelar" [ref=e149] [cursor=pointer]
          - button "Confirmar" [ref=e150] [cursor=pointer]
  - navigation "Navegação principal" [ref=e151]:
    - generic [ref=e152]:
      - link "Livros" [ref=e153] [cursor=pointer]:
        - /url: /livros
        - img [ref=e155]
        - generic [ref=e157]: Livros
      - link "Empréstimos" [ref=e158] [cursor=pointer]:
        - /url: /emprestimos
        - img [ref=e160]
        - generic [ref=e163]: Empréstimos
      - link "Início" [ref=e164] [cursor=pointer]:
        - /url: /
        - img [ref=e166]
        - generic [ref=e169]: Início
      - link "Multas" [ref=e170] [cursor=pointer]:
        - /url: /multas
        - img [ref=e172]
        - generic [ref=e174]: Multas
      - link "Equipe" [ref=e175] [cursor=pointer]:
        - /url: /usuarios
        - img [ref=e177]
        - generic [ref=e182]: Equipe
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Gerenciamento de Livros (E2E)', () => {
  4  | 
  5  |   test.beforeEach(async ({ page }) => {
  6  |     // 1. Vai para a página inicial (Login)
  7  |     await page.goto('/');
  8  | 
  9  |     // 2. Realiza o login (usando os dados do nosso mock de admin)
  10 |     await page.fill('input[type="email"]', 'admin@sistema.com');
  11 |     await page.fill('input[type="password"]', '123456');
  12 |     await page.click('button[type="submit"]');
  13 | 
  14 |     // 3. Espera chegar no Dashboard (garante que logou)
  15 |     await expect(page).toHaveURL(/\/dashboard|$/);
  16 |   });
  17 | 
  18 |   test('deve navegar até a tela de livros e listar o acervo', async ({ page }) => {
  19 |     // 1. Navega para livros a partir do menu ou via URL
  20 |     await page.goto('/livros');
  21 | 
  22 |     // 2. Verifica se o título da página está correto
  23 |     await expect(page.locator('h2')).toContainText('Acervo de Livros');
  24 |   });
  25 | 
  26 |   test('deve permitir adicionar um novo livro e encontrá-lo na lista', async ({ page }) => {
  27 |     const tituloAleatorio = `Livro E2E ${Math.floor(Math.random() * 1000)}`;
  28 | 
  29 |     await page.goto('/livros');
  30 | 
  31 |     // 1. Clicar no FAB (+) para abrir o modal
  32 |     await page.locator('.fab').click();
  33 | 
  34 |     // 2. Preencher o formulário no modal
> 35 |     await page.fill('input[name="titulo"]', tituloAleatorio);
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  36 |     await page.fill('input[name="autor"]', 'Automação Playwright');
  37 | 
  38 |     // 3. Salvar
  39 |     await page.click('button[type="submit"]');
  40 | 
  41 |     // 4. Verificar se o novo livro aparece na lista
  42 |     await expect(page.getByText(tituloAleatorio)).toBeVisible();
  43 |   });
  44 | 
  45 |   test('deve fechar o modal ao clicar no botão cancelar', async ({ page }) => {
  46 |     await page.goto('/livros');
  47 | 
  48 |     await page.locator('.fab').click();
  49 |     await expect(page.locator('.modal')).toBeVisible();
  50 | 
  51 |     await page.click('button:has-text("Cancelar")');
  52 |     await expect(page.locator('.modal')).not.toBeVisible();
  53 |   });
  54 | });
  55 | 
```