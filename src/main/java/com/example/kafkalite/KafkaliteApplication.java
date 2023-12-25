package com.example.kafkalite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.kafka.annotation.EnableKafka;


// import com.example.kafkalite.entity.Users;
import com.example.kafkalite.repo.UsersRepo;

@SpringBootApplication
@EnableKafka
public class KafkaliteApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(KafkaliteApplication.class, args);
		UsersRepo usersRepo = context.getBean(UsersRepo.class);

		// Users user1 = new Users("admin", "admin", "admin");
		// Users user2 = new Users("normal", "normal", "normal");

		// usersRepo.save(user1);
		// usersRepo.save(user2);

		System.out.println("Everything is fine!");
	}

}
