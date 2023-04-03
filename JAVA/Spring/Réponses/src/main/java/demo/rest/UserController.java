package demo.rest;

import java.util.Collection;

import org.springframework.http.*;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import demo.model.User;
import demo.service.UserService;

@RestController
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    // Post '/users/' Mapping
    @PostMapping("/users/")
    public ResponseEntity<User> createUser(@RequestBody User user) {
        User createdUser = userService.create(user);
        return new ResponseEntity<>(createdUser, HttpStatus.CREATED);
    }

    // PUT '/users/{id}' Mapping
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@PathVariable String id, @RequestBody User user) {
        User updatedUser = userService.update(user);
        return new ResponseEntity<>(updatedUser, HttpStatus.OK);
    }

    // GET '/users/'
    @GetMapping("/users/")
    public ResponseEntity<Collection<User>> getUsers() {
        Collection<User> users = userService.get();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    
    // GET '/users/{id}'
    @GetMapping("/users/{id}")
    public ResponseEntity<User> getUserById(@PathVariable String id) {
        User user = userService.get(id);
        if (user == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    // DELETE '/users/{id}'
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable String id) {
        User deletedUser = userService.delete(id);
        if (deletedUser == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
