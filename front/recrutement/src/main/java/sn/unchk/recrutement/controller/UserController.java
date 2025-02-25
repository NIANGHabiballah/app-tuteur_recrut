package sn.unchk.recrutement.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import sn.unchk.recrutement.model.User;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/users")
public class UserController {

    @PostMapping("/inscription")
    public ResponseEntity<String> registerUser(@RequestBody User users) {
        return ResponseEntity.ok("Utilisateur inscrit avec succès !");
    }
}
