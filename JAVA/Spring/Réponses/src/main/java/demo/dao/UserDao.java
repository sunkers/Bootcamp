package demo.dao;

// Repository
import org.springframework.stereotype.Repository;

import demo.model.User;

// UUID library
import java.util.UUID;

// Hashmap libraries
import java.util.HashMap;
import java.util.Map;
// import java.util.Set;
import java.util.Collection;

@Repository
public class UserDao {
    Map<String, User> map = new HashMap<>();

    public User create(User user) {
        String id = UUID.randomUUID().toString();
        map.put(id, user);
        user.setId(id);
        return user;
    }

    public User update(User user) {
        map.put(user.getId(), user);
        return user;
    }

    public User delete(String id){
        return map.remove(id);

    }

    public User get(String id){
        return map.get(id);
    }

    public Collection<User> get(){
        return map.values();
    }

}
