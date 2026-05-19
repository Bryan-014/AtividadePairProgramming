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
    await page.locator('.fab').click();
    await page.fill('input[name="titulo"]', tituloAleatorio);
    await page.fill('input[name="autor"]', 'Automação Playwright');

    const responsePromise = page.waitForResponse(resp=>
      resp.url().includes('/livros') &&
      resp.request().method() === 'POST' &&
      resp.status() >= 200 && resp.status() <300
    );
    
    await page.getByRole('button',{name: 'Confirmar'}).click();
    
    const response = await responsePromise;
    const data = await response.json();
    const idCriado = data.id;

    await expect(page.locator('.modal')).not.toBeVisible();
    await page.fill('input[placeholder="Buscar por ID..."]', String(idCriado));
    await page.locator('button.btn--primary').filter({has: page.locator('svg.lucide-search')}).click();
    await expect (page.locator('.list-card__title')).toContainText(tituloAleatorio);

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
