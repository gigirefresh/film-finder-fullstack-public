# Come fare un branch personale

Se sono bloccato posso ripartire facendo un nuovo branch personale a partire dal branch `main`

## Apro un terminale nel mio repository

* Il modo più veloce è usare il terminale di VS Code (CTRL+J)
* Oppure uso un terminale powershell, devo pero' prima fare un `cd` (change directory) per spostarmi nella cartella del mio repository
*

## Prima salvo tutto quello che ho fatto

```bash
  git stash save -u "WIP_mionome_data_e_ora"
```

ad esempio:

```bash
   git stash save -u "WIP_gigi_0526_1328"
```

## Torno sul branch main

```bash
  git checkout main
```

## Verifico di avere tutti i commit che potrebbero essere sul remote origin (github)

```bash
  git pull
  git log
```

## Creo un nuovo branch personale a partire da questo punto

```bash
  git checkout -b mioNome_dataOra
```

ad esempio:

```bash
  git checkout -b ilias_20250526_1341
```
