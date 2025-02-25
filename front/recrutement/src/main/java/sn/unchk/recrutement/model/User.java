package sn.unchk.recrutement.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "users") // ⚠️ Mets "users" au lieu de "user" car "user" est un mot réservé en SQL
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String prenom;
    private String nom;
    private String email;
    private String motDePasse;
}
