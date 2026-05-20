Étape 1 : Installer Git

Téléchargez et installez :

Git for Windows

Pendant l'installation :

Laissez les options par défaut
Cliquez sur Next jusqu'à Install

Quand c'est terminé :

Appuyez sur Windows
Tapez PowerShell
Ouvrez-le

Vérifiez que Git fonctionne :

git --version

Exemple :

git version 2.50.0
Étape 2 : Créer un compte GitHub

Allez sur :

GitHub

Créez un compte ou connectez-vous.

Étape 3 : Créer un dépôt privé

Dans GitHub :

Cliquez sur + → New repository
Nom : par exemple :
MonProjet
Cochez Private
Ne cochez pas :
Add README
Add .gitignore
Add License

Cliquez sur Create repository

Laissez cette page ouverte.

Étape 4 : Ouvrir votre dossier projet

Exemple : votre projet est sur le Bureau :

C:\Users\VotreNom\Desktop\MonProjet

Dans l'Explorateur Windows :

Ouvrez le dossier du projet
Cliquez dans la barre d'adresse
Tapez :
powershell
Appuyez sur Entrée

PowerShell s'ouvre directement dans votre projet.

Étape 5 : Initialiser Git

Entrez :

git init

Git crée le dépôt local.

Étape 6 : Configurer votre nom (première fois seulement)

Remplacez par vos informations :

git config --global user.name "VotreNom"
git config --global user.email "votre@email.com"

Exemple :

git config --global user.name "Jean"
git config --global user.email "jean@gmail.com"
Étape 7 : Ajouter tous les fichiers du projet
git add .

Le point . signifie :

ajoute tous les fichiers et dossiers.

Étape 8 : Créer le premier commit
git commit -m "Premier projet"
Étape 9 : Relier votre projet à GitHub

Copiez l'adresse affichée par GitHub :

Exemple :

https://github.com/JAORIZIKY/Connect-RL.git

Puis :

git remote add origin https://github.com/JAORIZIKY/Connect-RL.git
Étape 10 : Créer la branche principale
git branch -M main
Étape 11 : Envoyer le projet vers GitHub
git push -u origin main

Une fenêtre GitHub peut apparaître :

Connectez-vous
Autorisez Git

Votre projet complet est maintenant envoyé.

Étape 12 : Pour les prochaines modifications

Quand vous modifiez des fichiers :

git add .
git commit -m "Ajout nouvelles fonctions"
git push

Vous n'aurez plus besoin de refaire les étapes précédentes.

Commandes utiles

Voir les fichiers modifiés :

git status

Voir les branches :

git branch

Voir l'historique :

git log --oneline

Voir l'adresse GitHub utilisée :

git remote -v
Éviter d'envoyer certains fichiers

Créez un fichier nommé :

.gitignore

Exemple pour un projet JavaScript :

node_modules/
.env
