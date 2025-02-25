package sn.unchk.recrutement.service;

import sn.unchk.recrutement.model.User;
import sn.unchk.recrutement.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User enregistrerUser(User users) {
        return userRepository.save(users);
    }
}
