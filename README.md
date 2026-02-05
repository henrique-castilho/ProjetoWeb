# Loja de Elétrodomésticos

Um projeto web dividido em frontend e backend para uma loja de eletrodomésticos. O frontend é uma aplicação Angular (gerada com Angular CLI v18.1.4) que fornece a interface do usuário — catálogo, busca, carrinho e fluxo de checkout — enquanto o backend está preparado para expor APIs REST (ex.: Java + Spring Boot).

## Tecnologias

- Frontend: Angular, TypeScript, HTML, CSS, JavaScript
- Backend: Java 17+, Spring Boot, Maven

## Pré-requisitos

- Node.js (recomendado v18+)
- Angular CLI (`npm i -g @angular/cli`)
- Java JDK 17+ (se for usar o backend Java)
- Maven (ou use o wrapper `mvnw` / `mvnw.cmd` que já existe no repositório)
- npm ou yarn

---

## Rodando o Frontend (desenvolvimento)

1. Abra um terminal na pasta `ProjetoWeb_front/`.
2. Instale as dependências:

```bash
npm install
```

3. Inicie o servidor de desenvolvimento:

```bash
ng serve
```

4. Acesse no navegador:

```
http://localhost:4200
```

---

## Rodando o Backend (Java / Spring Boot)

1. Abra um terminal na pasta `ProjetoWeb_back/`.
2. Use o wrapper Maven (Windows):

```powershell
mvnw.cmd spring-boot:run
```

ou (Unix / macOS):

```bash
./mvnw spring-boot:run
```

3. Por padrão o backend roda em:

```
http://localhost:8080
```

Altere a porta em `src/main/resources/application.properties` se desejar.

---

## Funcionalidades (exemplos)

- Cadastro e autenticação de clientes
- Catálogo de produtos com filtros e busca
- Página de detalhes do produto
- Carrinho de compras (cesta) e fluxo de finalização de pedido
- Consumo de APIs REST para produtos, clientes e pedidos

---

## Configuração e observações

Propriedades do backend: existe um arquivo de exemplo em [ProjetoWeb_back/src/main/resources/application.properties.example](ProjetoWeb_back/src/main/resources/application.properties.example). Para configurar localmente, copie esse arquivo para `ProjetoWeb_back/src/main/resources/application.properties` e substitua os valores de exemplo pelos valores reais do seu ambiente.


---

## 👨‍💻 Autores

* **Henrique Castilho**  
  [LinkedIn](https://www.linkedin.com/in/henriquecastilhopires/) | [GitHub](https://github.com/henrique-castilho)

* **Gabriel Dias**  
  [LinkedIn](https://www.linkedin.com/in/gabriel-dias-823790269/) | [GitHub](https://github.com/thediaax)

* **Leonardo Vivo**  
  [LinkedIn](https://www.linkedin.com/in/leonardovivoguerreiro/) | [GitHub](https://github.com/leonardovivo)
