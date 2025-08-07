[![Netlify Status](https://api.netlify.com/api/v1/badges/6d1452f9-0a5c-4305-96e3-f78cb5a5af5c/deploy-status)](https://app.netlify.com/sites/antifem-blog/deploys)

# Blog of Antifem movement

## Run

Use node version: 18 or greater

- Install dependencies:

  ```bash
  yarn
  ```

- Run locally:

  ```bash
  yarn dev
  ```

  Go to `http://localhost:5173/`

- Build and Preview

  ```bash
  yarn build && yarn preview
  ```

  Go to `http://localhost:4173/`

  Local admin panel is on `http://localhost:4173/admin/`

## Cloudflare

```
pnpm cf:deploy
```
