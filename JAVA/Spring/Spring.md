Documentation for Spring Framework

// Application Context
Application web
Microservices
Batch
Serverless

// Bean Scopes
https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-factory-scopes

Inversion du controle
L'inversion de controle (IoC) est un processus dans lequel un objet définit ses dépendances sans les créer.

// Exemple 
public class Company {
    public Company(Address address) {
        // getter, setter ...
    }
}

public class Address {
    public Address(String stree, int number) {
        // getter, setter ...
    }
}

Address address = new Address("rue de la paix", 1);
Company company = new Company(address);

// Exemple avec Spring Bean
@Component
public class Company {
    public Company(Address address) {
        // getter, setter ...
    }
}

// Annontation
@Configuration
@ComponentScan(basePackageClasses = Company.class)
public class Config {
    @Bean // aNNOTATION QUI PERMET D'APPELER DES MÉTHDES SANS CREER DES CLASSES
    public Address getAddress() {
        return new Address("rue de la paix", 1);
    }
}

// Annotation @autoWired
class Car {
    @Autowired
    Car ( Engine engine);
}

class Car {
    @Autowired
    void setEngine(Engine engine) {
        // ...
    }
}

class Car {
    @Autowired
    Engine engine;
    // 
}

// Annotation @Qualifier
@Autowired
Biker(@Qualifier("bike") Vehicle vehicle) {
    this.vehicle = vehicle;
}

@Autowired
void setVehicle(@Qualifier("bike") Vehicle vehicle) {
    this.vehicle = vehicle;
}

@Autowired
@Qualifier("bike")
void setVehicle(Vehicle vehicle) {
    this.vehicle = vehicle;
}

// Annotation @value
engine.fuelType=petrol

// Récupère la valeur de la propriété fuelType dans le fichier configuration
@value("${engine.fuelType}")
String fuelType;

// Annotation @Lazy
@Configuration
@Lazy
class VehicleFactoryConfig {
    @Bean
    @Lazy(false)
    Engine engine() {
        return new Engine();
    }
}

// Annotation Primary
@Component
@Primary
class Car implements Vehicle {}
@Component
class Bike implements Vehicle {}

// Annotation Scope
@Component
@scope("prototype")
class Enging {}

