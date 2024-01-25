package com.example.kafkalite;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
//import org.springframework.context.annotation.ComponentScan;
import org.springframework.kafka.annotation.EnableKafka;


// import com.example.kafkalite.entity.Users;
// import com.example.kafkalite.repo.UsersRepo;

import com.example.kafkalite.entity.JsonTemplate;
import com.example.kafkalite.repo.JsonTemplateRepo;

@SpringBootApplication
@EnableKafka
//@ComponentScan(basePackages = "com.example.kafkalite.resources")
public class KafkaliteApplication {

	public static void main(String[] args) {
		ApplicationContext context = SpringApplication.run(KafkaliteApplication.class, args);
		//UsersRepo usersRepo = context.getBean(UsersRepo.class);
		JsonTemplateRepo jsonMessageTemplateRepo = context.getBean(JsonTemplateRepo.class);

		// Users user1 = new Users("adminuser", "password", "admin");
		// Users user2 = new Users("normaluser", "passkey", "normal");

		// usersRepo.save(user1);
		// usersRepo.save(user2);

		JsonTemplate template1 = new JsonTemplate(1L, "template1", "{\"name\":\"John\", \"age\":30, \"car\":\"Toyota\"}", "{\"name\":\"String\", \"age\":\"Integer\", \"car\":\"String\"}", "name");
		JsonTemplate template2 = new JsonTemplate(2L, "template2", "{\"name\":\"Mary\", \"age\":20, \"car\":\"Honda\"}", "{\"name\":\"String\", \"age\":\"Integer\", \"car\":\"String\"}", "name2");
		JsonTemplate template3 = new JsonTemplate(3L, "template3", "{\"title\":\"Software Engineer\", \"experience\":5, \"skills\":\"Java, Spring Boot\"}", "{\"title\":\"String\", \"experience\":\"Integer\", \"skills\":\"String\"}", "title");
		JsonTemplate template4 = new JsonTemplate(4L, "template4", "{\"book\":\"AI Basics\", \"pages\":200, \"author\":\"John Doe\"}", "{\"book\":\"String\", \"pages\":\"Integer\", \"author\":\"String\"}", "book");
		JsonTemplate template5 = new JsonTemplate(5L, "template5", "{\"movie\":\"Inception\", \"duration\":148, \"director\":\"Christopher Nolan\"}", "{\"movie\":\"String\", \"duration\":\"Integer\", \"director\":\"String\"}", "movie");
		JsonTemplate template6 = new JsonTemplate(2L, "template2", "{\"company\":\"ABC Corp\", \"employees\":100, \"location\":\"New York\"}", "{\"company\":\"String\", \"employees\":\"Integer\", \"location\":\"String\"}", "company");
	
		
		jsonMessageTemplateRepo.save(template1);
		jsonMessageTemplateRepo.save(template2);
		jsonMessageTemplateRepo.save(template3);
		jsonMessageTemplateRepo.save(template4);
		jsonMessageTemplateRepo.save(template5);
		jsonMessageTemplateRepo.save(template6);

		System.out.println(template1);
		System.out.println(template2);

		System.out.println("Everything is fine!");
	}

}
