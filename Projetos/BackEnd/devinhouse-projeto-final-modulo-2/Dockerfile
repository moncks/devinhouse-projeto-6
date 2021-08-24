FROM openjdk:8-jdk-alpine

VOLUME /tmp

ADD devinhouse.mv.db /tmp/devinhouse.mv.db

WORKDIR /app

COPY pacote/projeto05-0.0.1-SNAPSHOT.jar /app/spring-app.jar

ENTRYPOINT ["java","-jar","spring-app.jar"]