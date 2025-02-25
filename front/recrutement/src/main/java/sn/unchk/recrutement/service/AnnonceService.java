package sn.unchk.recrutement.service;

import sn.unchk.recrutement.model.Annonce;
import sn.unchk.recrutement.repository.AnnonceRepository;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class AnnonceService {

    private final AnnonceRepository annonceRepository;

    // Injection de dépendance via le constructeur
    public AnnonceService(AnnonceRepository annonceRepository) {
        this.annonceRepository = annonceRepository;
    }

    // Créer une annonce
    public Annonce createAnnonce(Annonce annonce) {
        annonce.setDatePublication(new Date()); // Assurer que la date de publication est définie
        return annonceRepository.save(annonce);
    }

    // Lire toutes les annonces
    public List<Annonce> getAllAnnonces() {
        return annonceRepository.findAll();
    }

    // Lire une annonce par son ID
    public Optional<Annonce> getAnnonceById(Long id) {
        return annonceRepository.findById(id);
    }

    // Mettre à jour une annonce
    public Annonce updateAnnonce(Long id, Annonce annonceDetails) {
        return annonceRepository.findById(id).map(annonce -> {
            if (annonceDetails != null) {
                annonce.setTitre(annonceDetails.getTitre());
                annonce.setDescription(annonceDetails.getDescription());
                annonce.setAnnee(annonceDetails.getAnnee());
                return annonceRepository.save(annonce);
            } else {
                throw new IllegalArgumentException("Les détails de l'annonce ne peuvent pas être nuls");
            }
        }).orElseThrow(() -> new RuntimeException("Annonce non trouvée"));
    }

    // Supprimer une annonce
    public void deleteAnnonce(Long id) {
        if (annonceRepository.existsById(id)) {
            annonceRepository.deleteById(id);
        } else {
            throw new RuntimeException("Impossible de supprimer : annonce non trouvée");
        }
    }
}
