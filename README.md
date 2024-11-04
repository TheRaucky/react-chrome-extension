# React Chrome Extension
Une simple extension pour afficher le H1 de la page dans la popup.

## Construire l'extension
### Installer les dépendances :
```bash
make install
```
## Construire le build :
```bash
make build
```
## Installer les dépendances et construire le build
```bash
make all
```
## Supprimer le dossier `dist` :
```bash
make clean
```

## Pour installer l'extension web **React Chrome Extension**
> Il est nécessaire de build l'extension avant de chercher à l'installer.
### Brave / Google Chrome
1. Ouvrir **Brave** ou **Google Chrome**
    1. Pour **Brave**, se rendre sur [Extensions](brave://extensions) (`brave://extensions`)
    2. Pour **Google Chrome**, se rendre sur [Extensions](chrome://extensions) (`chrome://extensions`)
2. Si besoin, activer le `Mode développeur`
3. Cliquer sur `Charger l'extension non empaquetée`
4. Sélectionner le dossier `web-extension`
5. L'extension doit désormais être installée, ne pas hésiter à l'épingler pour gagner du temps
6. Cliquer sur l'extension pour afficher la popup

### Firefox
1. Ouvrir **Firefox**
2. Se rendre sur [Extensions](about:debugging#/runtime/this-firefox) (`about:debugging#/runtime/this-firefox`)
3. Cliquer sur `Charger un module complémentaire temporaire…`
4. Sélectionner le fichier `web-extension/manifest.json`
5. L'extension doit désormais être installée, ne pas hésiter à l'épingler pour gagner du temps
6. Cliquer sur l'extension pour afficher la popup
