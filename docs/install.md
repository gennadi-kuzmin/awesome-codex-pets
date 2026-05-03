# Install Codex Pets

Codex custom pets are local files. Each pet needs a folder with:

```text
pet.json
spritesheet.webp
```

## Manual Install

1. Download or clone this repository.
2. Choose a pet folder from `pets/`.
3. Copy that folder into:

```text
~/.codex/pets/
```

Example final path:

```text
~/.codex/pets/terminal-ghost/pet.json
~/.codex/pets/terminal-ghost/spritesheet.webp
```

4. Open Codex App.
5. Go to `Settings > Appearance > Pets`.
6. Refresh custom pets.
7. Select your pet.
8. Type `/pet` in the composer.

## Troubleshooting

- If the pet does not appear, check that `pet.json` and `spritesheet.webp` are directly inside the pet folder.
- If artwork is missing, verify that `spritesheetPath` in `pet.json` matches the actual spritesheet filename.
- If the pet looks cropped, the spritesheet layout may not match the expected pet frame layout.
