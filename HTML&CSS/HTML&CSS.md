# HTML & CSS
## HTML
### Balises

<body>  Le corps de la page
<p> Paragraphe
<h1> Titre de niveau 1
<h2> Titre de niveau 2
...
<b> Gras
<i> Italique
<u> Souligné

Listes:
<ul> Liste non ordonnée
<ol> Liste ordonnée
<li> Élément de liste

Liens:
<a href="http://www.google.com">Google</a>

Images:
<img src="http://www.google.com/images/logo.gif" alt="Google Logo">
<img> src=/assets/images/logo.png alt="Logo">

### Attributs
<p class="important"> Paragraphe important
<p id="first"> Premier paragraphe
<a href="http://www.google.com" target="_blank" title="Page d'accueil">Google</a>
<img src="http://www.google.com/images/logo.gif" alt="Google Logo" width="100" height="100"> 
<input type="text" name="username" value="Votre nom d'utilisateur" size="20" maxlength="20">

### Caraactères spéciaux
&lt;  <
&gt;  >
&amp;  &
&quot;  "
&apos;  '

### Commentaires
<!-- <p>Ceci est un commentaire</p> -->

### Elements
<span>  Élément générique
<div>  Élément générique
<table>  Tableau

### Tableau
<table>
  <tr>
    <th>Colonne 1</th>
    <th>Colonne 2</th>
  </tr>
  <tr>
    <td>Ligne 1, Colonne 1</td>
    <td>Ligne 1, Colonne 2</td>
  </tr>
  <tr>
    <td>Ligne 2, Colonne 1</td>
    <td>Ligne 2, Colonne 2</td>
  </tr>


## CSS

1. Inline CSS
> <p style="color: red;">Paragraphe en rouge</p>
2. Internal CSS
> <style type="text/css">
3. External CSS
> <link rel="stylesheet" type="text/css" href="style.css">

### Sélecteurs
* Sélecteur de type
> p { color: red; }
* Sélecteur d'identifiant
> #first { color: red; }
* Sélecteur de classe
> .important { color: red; }
* Sélecteur de groupe
> h1, h2, h3 { color: red; }
* Sélecteur descendant
> p em { color: red; }
* Sélecteur d'enfant
> p > em { color: red; }
* Sélecteur d'attribut
> a[href] { color: red; }
* Sélecteur de pseudo-classe
> a:hover { color: red; }
* Sélecteur de pseudo-élément
> p::first-letter { color: red; }

