Cours ORM mardi 04/04
=====================================

Qu'est ce q'un ORM?
Un ORM (Object-Relational Mapping) est un outil de programmation qui permet de faire le lien entre une base de données relationnelle et une application. L'objectif de l'ORM est de simplifier la manipulation des données dans la base de données en proposant une interface de programmation orientée objet. 

Avantages:
- Abstraction de la complexité des BDD
- Réduction de la quantité de code
- Portabilité
- Sécurité

Inconvénients:
- Performance
- Complexité
- Limitations des types de requête
- Courbe d'apprentissage plus longue

=====================================

Qu'est ce qu'un JPA?
JPA (Java Persistence API) est une API standard de persistance pour les applications Java. JPA fournit une interface de programmation orientée objet pour interagir avec une base de données relationnelle en utilisant des objets Java.
Un EntityManager est une interface de haut niveau fournie par JPA pour interagir avec la base de données. L'EntityManager est responsable de la gestion des entités, de la synchronisation des objets avec la base de données et de l'exécution des requêtes.

Il permet de:
- Faire des opérations CRUD
- Gérer le cycle de vie des entités en mémoire
- Effectuer des requetes JPQL

Pour mapper une table de BDD avec une entité Java, on utilise:
- @Entity
- @Table
- @Id
- @GeneratedValue
- @Column

=====================================
Annotations JPA

@Entity
L'annotation @Entity permet de spécifier que la classe est une entité.
name ==> Nom de l'entité

@Id
L'annotation @Id permet de spécifier que l'attribut est la clé primaire de l'entité.

@Table
L'annotation @Table permet de spécifier le nom de la table dans la base de données.
name ==> Nom de la table
catalog ==> Nom du catalogue
schema ==> Nom du schéma
uniqueConstraints ==> Contraintes d'unicité

@Column
L'annotation @Column permet de spécifier le nom de la colonne dans la base de données.
name ==> Nom de la colonne
table ==> Nom de la table
unique ==> Indique si la colonne est unique
nullable ==> Indique si la colonne peut être nulle
insertable ==> Indique si la colonne peut être insérée
updatable ==> Indique si la colonne peut être mise à jour
columnDefinition ==> Définition de la colonne
length ==> taille de la colonne de type String
precision ==> taille de la colonne de type numérique
scale ==> nombre de décimales de la colonne de type numérique

@GeneratedValue
L'annotation @GeneratedValue permet de spécifier la stratégie de génération de la clé primaire.
IDENTITY ==> Génère la clé primaire en utilisant l'auto-incrément de la base de données
SEQUENCE ==> Génère la clé primaire en utilisant une séquence de la base de données
TABLE ==> Génère la clé primaire en utilisant une table de la base de données
AUTO ==> Dépend de l'implémentation utilisée

@SequenceGenerator
L'annotation @SequenceGenerator permet de spécifier la séquence utilisée pour générer la clé primaire.
name ==> Nom de la séquence
sequenceName ==> Nom de la séquence dans la base de données
initialValue ==> Valeur initiale de la séquence
allocationSize ==> Nombre d'éléments à allouer à chaque fois

Clés primaires composites
Pour définir une clé primaire composite, on utilise l'annotation @IdClass ou on utilise l'annotation @EmbeddedId.
@javax.persistence.IdClass
@javax.persistence.EmbeddedId

Le choix interfère sur la manière de:
- Requeter la base de données
- Accéder aux clés
- Déclarer la classe

@Temporal
L'annotation @Temporal permet de spécifier le type de date utilisé.
value ==> Type de date
    DATE ==> Date SQL type
    TIME ==> Time SQL type
    TIMESTAMP ==> Timestamp SQL type

@Lob
L'annotation @Lob permet de spécifier que l'attribut est un objet de type LOB (Large Object).
BLOB: Binary Large Object
CLOB: Character Large Object

@Enumerated
L'annotation @Enumerated permet de spécifier que l'attribut est un énuméré.

=====================================

4 types de relations spécifiques à JPA:
- @OneToOne
- @OneToMany
- @ManyToOne
- @ManyToMany

@Entity
public class Individu {
    @Id
    private Long id;
    @ManyToOne
    private Societe societe;
}

@Entity
public class Societe {
    @Id
    private Long id;

    @OneToMany
    private List<Individu> employes = new ArrayList<>();
}

=====================================

L'héritage en JPA
@Inheritance
L'annotation @Inheritance permet de spécifier le type d'héritage utilisé.
@SingleTable ==> Une seule table en base de données regroupant toutes les colonnes
@TablePerClass ==> Une table par entité. Chaque table contient les colonnes partagées par toutes les entités et les colonnes propres à l'entité
@Joined ==> Une table parente contenant les colonnes partagées par toutes les entités et une table fille par entité contenant les colonnes propres à l'entité

Gestion des cascades

Cycle de vie des entités
- New / transient ==> L'entité n'est pas encore persistée
- Managed ==> Sous surveillance de l'EntityManager
- Detached ==> L'entité n'est plus sous surveillance de l'EntityManager
- Removed ==> L'entité est marquée pour être supprimée

=====================================

JPQL (Java Persistence Query Language) Requêtes
JPQL est un langage de requête orienté objet pour interagir avec une base de données relationnelle en utilisant des objets Java. JPQL est similaire à SQL mais il est orienté objet et il est donc plus facile à utiliser.

JPQL ==> from Individu
SQL ==> select * from Individu

=====================================

Requetes via critères
L'API Criteria permet de construire des requêtes via des critères. Cela permet de construire des requêtes dynamiques.

// Ce code permet de construire une requête JPQL qui retourne tous les individus dont l'age est inférieur ou égal à ageMax
CriteriaBuilder builder = entityManager.getCriteriaBuilder();
CriteriaQuery<Individu> query = builder.createQuery(Individu.class);
Root<Individu> i = query.from(Individu.class);
query.select(i).where(builder.lessThanOrEqualTo(i.get("age"),as(int.class, ageMax)));
List<Individu> individus = entityManager.createQuery(query).getResultList();

=====================================

Jointure
mots-clés: join, left join, right join, inner join, outer join

select i from Individu i join i.societe s where s.nom = :nom

Root<Individu> individuEntity = criteria.from(Individu.class);
Join<Individu, Societe> join = individuEntity.<Individu, Societe>join("societe");

=====================================

Ordre de tri
mots-clés: order by, asc, desc

select i from Individu i order by i.nom asc

CriteriaQuery<Individu> query = builder.createQuery(Individu.class);

=====================================

Mécanisme de cache
L'EntityManager possède un cache interne qui permet de stocker les entités en mémoire. Ce cache permet de:
- Optimiser les requêtes
- Optimiser les performances
- Réduire le nombre de requêtes SQL
