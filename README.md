# LillyBabe partner page — Sevalla

Static HTML site for [Sevalla](https://sevalla.com/) static hosting.

**Live URL:** https://lillybabe-xn3d8.sevalla.page/

## Deploy (Git push)

1. In GitHub repo **Settings → Secrets → Actions**, add:
   - `SEVALLA_TOKEN` — API token from Sevalla dashboard (starts with `svl_`)
2. In [Sevalla](https://sevalla.com/) → static site **lillybabe** → connect this repo (`HelloMahiGoa/lillybabe-partner-sevalla`), branch `main`
3. Build settings: **no** install command, **empty** build command, publish directory `.`
4. Push to `main` — GitHub Action triggers Sevalla deploy

Do **not** commit API tokens to this repository.
