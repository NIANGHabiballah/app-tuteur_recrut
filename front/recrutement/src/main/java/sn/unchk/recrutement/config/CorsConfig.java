package sn.unchk.recrutement.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class CorsConfig {

    @Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry inscription) {
                inscription.addMapping("/api/**") // Appliquer CORS sur toutes les routes /api/**
                        .allowedOrigins("http://localhost:4200") // Autoriser Angular
                        .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // Autoriser les requêtes
                        .allowedHeaders("*") // Autoriser tous les headers
                        .allowCredentials(true); // Autoriser les cookies et les credentials
            }
        };
    }
}
