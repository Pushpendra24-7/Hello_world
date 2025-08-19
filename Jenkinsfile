pipeline {
    agent any
    triggers {
        // Trigger build on push to main branch using GitHub webhook
        githubPush()
    }
    environment {
        DOCKER_IMAGE = "express-hello-world"
        CONTAINER_NAME = "express_hello_world_app"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/your-username/your-repo.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE ."
            }
        }
        stage('Run Docker Container') {
            steps {
                sh "docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_IMAGE"
            }
        }
        stage('Set Cleanup Task') {
            steps {
                // Schedule container removal after 7 days
                sh "echo docker rm -f $CONTAINER_NAME | at now + 7 days"
            }
        }
    }
    post {
        always {
            // Optionally clean up old containers if needed
            sh "docker container prune -f"
        }
    }
}
