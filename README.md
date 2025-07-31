
# Projeto de Testes Automatizados com Cypress

Este repositório contém dois testes automatizados utilizando o Cypress:

- ✅ Teste 1: Busca da expressão "Pacto Soluções" no Yahoo
- ✅ Teste 2: Acesso à página de Termos de Uso da UOL e verificação de trecho relevante

---

## 📁 Estrutura do Projeto

```
cypress/
├── e2e/
│   ├── busca-yahoo.cy.js
│   └── uol-termos.cy.js
├── support/
│   └── commands.js (caso necessário)
├── screenshots/ (gerado automaticamente se ativado)
cypress.config.js
package.json
```

---

## 🔧 Instalação

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/seu-repo.git
cd seu-repo
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o Cypress:
```bash
npx cypress open
```

---

## 🧪 Testes Automatizados

### 1. Busca no Yahoo

**Arquivo:** `cypress/e2e/busca-yahoo.cy.js`  
**Descrição:** Realiza uma busca por "Pacto Soluções" no Yahoo e valida se há resultados.  
**Resultado esperado:** A lista de resultados deve conter pelo menos 1 item.

### 2. Termos de Uso da UOL

**Arquivo:** `cypress/e2e/uol-termos.cy.js`  
**Descrição:** Acessa diretamente os Termos de Uso da UOL e verifica a existência do trecho:
> "tais como a possibilidade de atualização desse documento a qualquer momento"

---

## ✅ Pré-requisitos

- Node.js instalado (recomenda-se versão 18+)
- Cypress instalado via `npm install`

---

## 👨‍💻 Autor

Desenvolvido como parte de um exercício técnico para Pacto Soluções.

---

