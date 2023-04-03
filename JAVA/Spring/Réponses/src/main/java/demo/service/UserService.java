package demo.service;

import org.springframework.stereotype.Service;

import demo.dao.UserDao;
import demo.model.User;
import java.util.Collection;

@Service
public class UserService {
    private UserDao userDao;

    

    public UserService(UserDao userDao) {
        this.userDao = userDao;
    }

    public User create(User user) {
        return userDao.create(user);
    }
    
    public User update(User user) {
        return userDao.update(user);
    }

    public User delete(String id) {
        return userDao.delete(id);
    }

    public User get(String id) {
        return userDao.get(id);
    }

    public Collection<User> get() {
        return userDao.get();
    }
}
