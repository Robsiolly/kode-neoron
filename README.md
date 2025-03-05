# Kode Neoron - Sistema de Cadastro de Visitantes e Prestadores de Serviços

## Descrição
Kode Neoron é um sistema SaaS para cadastro e gerenciamento de moradores, visitantes e prestadores de serviço. O sistema também permite capturar fotos com a webcam e armazená-las no Supabase.

## Funcionalidades
- Cadastro de moradores
- Cadastro de visitantes
- Cadastro de prestadores de serviços
- Registro de chaves e encomendas
- Captura de fotos pela webcam com pré-visualização
- Armazenamento das fotos no Supabase

## Tecnologias Utilizadas
- **React.js** com **Next.js**
- **Tailwind CSS** para estilização
- **Supabase** para armazenamento de dados e imagens
- **React Webcam** para captura de fotos

## Como Executar o Projeto
1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/kode-neoron.git
   cd kode-neoron
   ```

2. Instale as dependências:
   ```sh
   npm install
   ```

3. Configure as credenciais do Supabase:
   - Crie um arquivo `.env.local` e adicione as variáveis:
     ```env
     NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
     NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
     ```

4. Execute o projeto:
   ```sh
   npm run dev
   ```

5. Acesse `http://localhost:3000` no navegador.

## Estrutura do Projeto
```
/kode-neoron
│── /pages
│   ├── index.js  # Página principal com formulário de cadastro
│── /public
│── /styles
│── .gitignore
│── package.json
│── next.config.js
```

## Contribuição
Se quiser contribuir, faça um fork do repositório, crie uma branch com sua funcionalidade e envie um Pull Request.

## Licença
Este projeto está sob a licença MIT.

