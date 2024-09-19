# Start with a base image that has JDK 17 installed
FROM openjdk:17-jdk-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the build JAR file to the container
COPY target/signing-svc-0.0.1-SNAPSHOT.jar /app/signing-svc.jar

# Expose the application port
EXPOSE 8080

# Set the command to run the JAR file
ENTRYPOINT ["java", "-jar", "signing-svc.jar"]
