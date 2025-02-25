package sn.unchk.recrutement.controller;

import sn.unchk.recrutement.model.Annonce;
import sn.unchk.recrutement.service.AnnonceService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/annonces")
public class AnnonceController {


    private final AnnonceService annonceService;

    // Injection de dépendance via le constructeur
    public AnnonceController(AnnonceService annonceService) {
        this.annonceService = annonceService;
    }

    // Créer une annonce
    @PostMapping
    public ResponseEntity<Annonce> createAnnonce(@RequestBody Annonce annonce) {
        if (annonce == null || annonce.getTitre() == null || annonce.getDescription() == null) {
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok(annonceService.createAnnonce(annonce));
    }

    // Lire toutes les annonces
    @GetMapping
    public ResponseEntity<List<Annonce>> getAllAnnonces() {
        List<Annonce> annonces = annonceService.getAllAnnonces();
        if (annonces.isEmpty()) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.ok(annonces);
    }

    // Lire une annonce par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Annonce> getAnnonceById(@PathVariable Long id) {
        return annonceService.getAnnonceById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Mettre à jour une annonce
    @PutMapping("/{id}")
    public ResponseEntity<Annonce> updateAnnonce(@PathVariable Long id, @RequestBody Annonce annonceDetails) {
        if (annonceDetails == null) {
            return ResponseEntity.badRequest().build();
        }
        try {
            return ResponseEntity.ok(annonceService.updateAnnonce(id, annonceDetails));
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Supprimer une annonce
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteAnnonce(@PathVariable Long id) {
        try {
            annonceService.deleteAnnonce(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
