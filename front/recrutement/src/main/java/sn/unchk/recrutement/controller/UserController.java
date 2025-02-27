package sn.unchk.recrutement.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sn.unchk.recrutement.model.User;
import sn.unchk.recrutement.repository.UserRepository;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "http://localhost:4200") // Autoriser Angular
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/inscription")
    public ResponseEntity<?> inscriptionUser(@RequestBody User user) {
        // Vérifier si l'utilisateur existe déjà
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Email déjà utilisé !");
        }
        // Sauvegarde en base
        User savedUser = userRepository.save(user);
        return ResponseEntity.ok(savedUser);
    }
}

