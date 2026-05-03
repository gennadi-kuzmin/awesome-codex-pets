# Awesome Codex Pets

A curated hub and installable pet pack for custom Codex `/pet` companions.

Install original Codex pets, inspect the pet contract, and suggest the next tiny agent companion.

> Three pets ready: **Terminal Ghost**, **Review Owl**, and **Bug Hunter**.

[![Terminal Ghost idle animation](pets/terminal-ghost/preview/idle.gif)](pets/terminal-ghost)

## Quick Install

```bash
mkdir -p ~/.codex/pets
cp -R pets/terminal-ghost ~/.codex/pets/
```

Then open Codex App, go to `Settings > Appearance > Pets`, refresh custom pets, select **Terminal Ghost**, and type `/pet`.

## Why This Exists

Codex pets are delightful, but the ecosystem is still young. This repo is a fast-moving open-source place for:

- original installable pets
- clear install instructions
- the exact Codex pet contract
- links to useful pet directories and examples
- community pet ideas

## Pets

| Pet | Preview | Install | Status |
| --- | --- | --- | --- |
| [Terminal Ghost](pets/terminal-ghost) | [<img src="pets/terminal-ghost/preview/idle.gif" alt="Terminal Ghost idle animation" width="96">](pets/terminal-ghost) | [`cp -R pets/terminal-ghost ~/.codex/pets/`](pets/terminal-ghost) | Installable |
| [Review Owl](pets/review-owl) | [<img src="pets/review-owl/preview/idle.gif" alt="Review Owl idle animation" width="96">](pets/review-owl) | [`cp -R pets/review-owl ~/.codex/pets/`](pets/review-owl) | Installable |
| [Bug Hunter](pets/bug-hunter) | [<img src="pets/bug-hunter/preview/idle.gif" alt="Bug Hunter idle animation" width="96">](pets/bug-hunter) | [`cp -R pets/bug-hunter ~/.codex/pets/`](pets/bug-hunter) | Installable |

Click a pet preview to open its folder, animation catalog, and install notes.

## Install

Codex custom pets live in your local Codex home:

```text
~/.codex/pets/<pet-name>/
├── pet.json
└── spritesheet.webp
```

Manual install:

1. Pick a pet from [`pets`](pets).
2. Copy its folder into `~/.codex/pets/`.
3. Open Codex App.
4. Go to `Settings > Appearance > Pets`.
5. Refresh custom pets and choose your pet.
6. Type `/pet` to wake it up.

See [`docs/install.md`](docs/install.md) for a fuller install guide.

See [`docs/pet-contract.md`](docs/pet-contract.md) for the exact `pet.json` and spritesheet contract.

## Star And Suggest

Star this repo if you want more Codex pets. Open an issue to suggest the next pet.

## Create Or Suggest A Pet

Have a pet idea? Open an issue with:

- name
- vibe
- visual style
- idle/working/waiting/done states
- whether the idea uses any third-party IP

Use [`docs/submit-your-pet.md`](docs/submit-your-pet.md) as a checklist.

## Validate

```bash
npm run validate
```

The validator checks each `pet.json` and warns when a pet does not have its `spritesheet.webp` yet.

## Best Examples

This repo focuses on original, installable pets. A few useful references:

- CodexPets.app: https://codexpets.app/
- Petdex: https://petdex.crafter.run/
- Codex Pet Shop: https://www.codexpetshop.com/
- OpenAI Codex Pets docs: https://developers.openai.com/codex/app/settings#codex-pets

More links live in [`docs/resources.md`](docs/resources.md).

## Follow The Builder

- X/Twitter: http://x.com/gennadi_kuzmin
- Telegram: https://t.me/kuzmin_904
- Email: gennadi.kuzmin@gmail.com

## License

Code and original documentation: MIT.

Pet artwork/assets should be original or used only with clear rights. Avoid uploading copyrighted characters, brand mascots, or third-party art you do not have permission to redistribute.
