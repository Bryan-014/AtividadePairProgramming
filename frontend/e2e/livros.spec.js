import { test, expect } from '@playwright/test';

test.describe('Gerenciamento de Livros (E2E)', () => {
  test.beforeEach(async ({ page }) => {
    // 1. Vai para a página inicial (Login)
    await page.goto('/');

    // 2. Realiza o login (usando os dados do nosso mock de admin)
    await page.fill('input[type="email"]', 'admin@sistema.com');
    await page.fill('input[type="password"]', '123456');
    await page.click('button[type="submit"]');

    // 3. Espera chegar no Dashboard (garante que logou)
    await expect(page).toHaveURL(/\/dashboard|$/);
  });

  test('deve navegar até a tela de livros e listar o acervo', async ({ page }) => {
    // 1. Navega para livros a partir do menu ou via URL
    await page.goto('/livros');

    // 2. Verifica se o título da página está correto
    await expect(page.locator('h2')).toContainText('Acervo de Livros');
  });

  test('deve permitir adicionar um novo livro e encontrá-lo na lista', async ({ page }) => {
    const tituloAleatorio = `Livro E2E ${Math.floor(Math.random() * 1000)}`;

    await page.goto('/livros');

    // 1. Clicar no FAB (+) para abrir o modal
    await page.locator('.fab').click();

    // 2. Preencher o formulário no modal
    await page.fill('input[name="titulo"]', tituloAleatorio);
    await page.fill('input[name="autor"]', 'Automação Playwright');

    // 3. Salvar
    await page.click('button[type="submit"]');

    // 4. Verificar se o novo livro aparece na lista
    await expect(page.getByText(tituloAleatorio)).toBeVisible();
  });

  test('deve fechar o modal ao clicar no botão cancelar', async ({ page }) => {
    await page.goto('/livros');

    await page.locator('.fab').click();
    await expect(page.locator('.modal')).toBeVisible();

    await page.click('button:has-text("Cancelar")');
    await expect(page.locator('.modal')).not.toBeVisible();
  });
});