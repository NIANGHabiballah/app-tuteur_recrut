package sn.unchk.recrutement.model;

import jakarta.persistence.*;
import java.util.Date;

@Entity
public class Annonce {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String titre;
    private String description;

    private int annee; // Changer double en int

    @Temporal(TemporalType.DATE) // Utiliser DATE si seule la date est nécessaire
    private Date datePublication;

    // Getters et Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public int getAnnee() { // Changer double en int
        return annee;
    }

    public void setAnnee(int annee) { // Changer double en int
        this.annee = annee;
    }

    public Date getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(Date datePublication) {
        this.datePublication = datePublication;
    }
}
