# Ecommerce 👜

## Sommaire
- React et Ruby on Rails
- Mon processus de développement
- Schema de la DB
- Listing des pages
- Liste des fonctionnalités
- Ce que j'aurai fait différemment ou mieux
- Lancer le projet
- Lancer les tests unitaires

# React et Ruby on Rails, mais pourquoi ?!

Je manque de temps ⌛️

Alors je choisi des langages que j'aime, donc avec lesquels j'ai beaucoup pratiqué 🥋

React depuis toujours ❤️ (2019)

Ruby on Rails ❤️ un framework web de Ruby, que j'ai découvert lors de ma premiere alternance il y a 2 ans de cela

**React + Ruby = RR**

<img width="100" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/2fe1fd39-c161-4014-9f7f-cd47c119a7dc">

# 🗒️ Mon processus de développement

- Schéma de base de données
- Identification des fonctionnalités clés (tableau Velleda ✍️)
- Développement des fonctionnalité clés
- Ajout des fonctionnalités annexes
- Test systématique des anciennes fonctionnalités après chaque nouvelle fonctionnalité
- Test final

## 🌱 Schema de la DB

### Schema technique
<img width="1038" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/16c6e77c-9ab1-438a-a311-70418f6cb5d1">

### Schema plus abstrait
![db schema 1 copie](https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/c47accbd-7122-488c-a397-8b85f58aab4f)

## 🌱 Seeding de la DB
![seeding snapshot](https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/3340be69-bb65-4140-97b5-fc6a3b5e4c1a)

## 📄 Listing des pages
- Home
- Checkout
- Checkout-success
- Single product

## 🗓️ Liste des fonctionnalités
- Loading feedback visuel en attendant d'obtenir la data
  <img width="734" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/d1f191ae-2913-4511-b57e-452448b92ec6">

- Barre de recherche dynamique (actualisation à chaque frappe)
  <img width="775" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/a6e514e6-b361-4c9e-9a4f-e4b88e56cd12">

- Ajout au panier depuis l'accueil (bouton + apparait au survol d'un produit)
  <img width="671" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/3a635226-2c34-45ca-b910-a14bd6db1817">

- L'ajout au panier est contrôlé par les stock disponible
  <img width="714" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/e5ca2dd3-d247-44fc-8ff0-45ed789276b5">
- La verification est également faite en backend lors de la commande
- Une commande est protégé par une transaction ce qui permet une securité des données 

- Sliding cart : Panier dynamique
  J'ai réccupéré la courbe de vitesse de votre site pour faire slide le panier de droite à gauche
  <img width="941" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/36188b5f-87e1-4af1-a354-497df5e47e2b">
- Gestion des quantité dans le panier (x1, x5, x16 etc...)
  <img width="889" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/cffc9a16-46af-4204-a407-6eea58c8b4c8">
- Bouton supprimer du panier (Supprime tous les items) visible on survol d'un order-item
  <img width="507" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/92fff4b8-b7a0-47e1-9686-eae90b364ad0">
- Bouton + et - (Supprime/ajoute un item)

  <img width="505" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/6a517fb8-0d59-4a3f-b35f-87d02c8500e6">

- Affichage dynamique du total pour un produit dans le panier

<img width="400" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/459369e1-674d-4e65-b639-b266cb5a1974">

- Affichage dynamique du total du panier

<img width="408" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/669118bf-91e3-45e8-a8c9-f9951361e096">

- Stepbar
  <img width="1202" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/1ac98d49-3151-4806-ad57-c4e17afaeadf">

- Récapitulatif de la commande (Page Checkout)
- Formulaire de livraison
- Formulaire de paiement
  <img width="1204" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/9f814743-673f-41b1-8ea8-d8782132582f">
  <img width="1203" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/06d27ee6-1040-4d11-8bbf-2144646acccf">
- Validation/contrôle de saisie des champs
  <img width="711" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/0d487721-7de5-40c4-86e2-1ff08acb15d2">
- Creation d'une Order en base de donnée
- Page de succès de la commande
  <img width="1204" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/b2a4798b-f23b-4bca-ad20-d19543d042c1">

- Le panier se ferme si on clic en dehors du panier
- Le panier ne se ferme pas quand on clic sur le +
  <img width="1085" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/18f467a1-1013-4404-91e4-a2842c060ac2">

- Calcul du total des pages
- Pagination gérée en _Backend_
- Boutons grisés en fin de course / début de course
  <img width="1203" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/c905c446-5d62-4ed2-939c-9fe2a6f0798a">
  <img width="1204" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/43ef3ec5-a846-486a-a2b5-cdad41b51ff4">

- Affichage d'un produit
  <img width="1199" alt="image" src="https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/acc90380-a0a4-4a41-8c7a-9cfa99fb35b3">

- Génération d'image aléatoire via cette API : 
![snap api img](https://github.com/AmineAffif/The_braderie-FRONT-ecommerce/assets/45182137/0ec10b07-cffa-4852-b202-4178efb9fe75)

# Ce que j'aurai fait différemment ou mieux ? 🤔

- Prendre mon temps
- Me decider sur une direction artistique précise au lieu de partir au feeling
- Vos retours 🫶

-----------------------------------------------------------------------------------

# Lancer le projet 🚀
### (facile avec Docker)

### Prérequis
**Docker et Docker Compose installés sur la machine.**

- Ouvrir un terminal
- Se placer dans un dossier de votre choix
- Pull mon code _frontend_ et lancer le serveur ⚠️ (il sera sur le port 3001)
  ```bash
  git pull git@github.com:AmineAffif/The_braderie-FRONT-ecommerce.git
  cd The_braderie-FRONT-ecommerce
  docker-compose up
  ```
- Pull mon code _backend_ et lancer le serveur
  ```bash
  git pull git@github.com:AmineAffif/The_braderie-BACK-ecommerce.git
  cd The_braderie-BACK-ecommerce
  docker-compose up
  ```

# Lancer les tests unintaires

- Dans une console, placez-vous dans le dossier _backend_ puis lancer les test
  ```bash
  cd The_braderie-BACK-ecommerce
  docker-compose exec rails bundle exec rspec
  ```
