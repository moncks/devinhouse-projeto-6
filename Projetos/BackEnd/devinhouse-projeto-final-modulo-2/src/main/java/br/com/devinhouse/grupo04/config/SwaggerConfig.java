package br.com.devinhouse.grupo04.config;

import java.util.ArrayList;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;
import springfox.documentation.builders.PathSelectors;


@Configuration
@EnableSwagger2
public class SwaggerConfig {
	
	@Bean
	public Docket productApi() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.basePackage("br.com.devinhouse.grupo04"))
		        .paths(PathSelectors.any())
				.build()
				.apiInfo(metaInfo());
	}

	private ApiInfo metaInfo() {
		
		ApiInfo apiInfo = new ApiInfo(
				"Projeto final de aplicação módulo 3", 
				"API Rest desenvolvida para o DevInHouse ", 
				"1.0", 
				"Terms of Service", 
				new Contact("Brayan Moncks Nunes - Grupo 2", null, "brayanbmn@hotmail.com"),
				"Apache License Version 2.0",
				"https://www.apache.org/licenses/LICENSE-2.0",
				new ArrayList<>());
		return apiInfo;
		
	}

}
