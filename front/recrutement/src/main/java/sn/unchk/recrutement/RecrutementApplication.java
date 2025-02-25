package sn.unchk.recrutement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;


import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("sn.unchk.recrutement.model") // 🔹 Ajoute ceci pour scanner tes entités
@EnableJpaRepositories("sn.unchk.recrutement.repository")
public class RecrutementApplication {
	public static void main(String[] args) {
		SpringApplication.run(RecrutementApplication.class, args);
	}
}
