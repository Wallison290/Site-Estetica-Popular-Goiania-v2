# Estética Popular de Goiânia

Landing page responsiva em Next.js, TypeScript e CSS custom, pronta para publicação na Vercel.

## Rodar no computador

Pré-requisitos: Node.js 22 ou superior e npm.

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal. Para testar a versão final:

```bash
npm run build
npm run start
```

## Publicar na Vercel

1. Extraia o ZIP.
2. Envie a pasta para um repositório no GitHub ou importe o projeto diretamente na Vercel.
3. Mantenha o framework detectado como **Next.js**.
4. Publique sem adicionar variáveis de ambiente.

## Onde alterar

- Conteúdo, links, avaliações e WhatsApp: `app/page.tsx`
- Cores, tipografia, espaçamentos e responsividade: `app/globals.css`
- Título, descrição, SEO e domínio: `app/layout.tsx`
- Fotos e fontes: `public/assets/`
- Ícone do site: `public/favicon.svg`

## Antes de publicar

- Confirmar a formação e o registro profissional de Adriana Bezerra.
- Atualizar o domínio em `app/layout.tsx` e no JSON-LD de `app/page.tsx` se a URL final for diferente.
- Confirmar que todas as pessoas retratadas autorizaram o uso das imagens.
- Conferir telefone, endereço e horários.
- Testar todos os botões de WhatsApp e o mapa.
- Manter a nota de que os resultados variam de pessoa para pessoa.
