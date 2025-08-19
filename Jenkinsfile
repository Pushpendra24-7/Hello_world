pipeline {
    agent {
        docker {
            image 'node:18'          // Use Node.js with npm preinstalled
            args '-v /var/run/docker.sock:/var/run/docker.sock' // Mount Docker socket so we can run docker inside
        }
    }

    triggers {
        githubPush()   // Trigger build on push to main branch
    }

    environment {
        DOCKER_IMAGE   = "express-hello-world"
        CONTAINER_NAME = "express_hello_world_app"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Pushpendra24-7/Hello_world.git'
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
                sh "echo docker rm -f $CONTAINER_NAME | at now + 7 days"
            }
        }
    }

    post {
        always {
            sh "docker container prune -f"
        }
    }
}
