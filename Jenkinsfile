pipeline {
    agent none   // no global agent, define per stage

    triggers {
        githubPush()
    }

    environment {
        DOCKER_IMAGE   = "express-hello-world"
        CONTAINER_NAME = "express_hello_world_app"
    }

    stages {
        stage('Clone Repository') {
            agent any
            steps {
                git branch: 'main', url: 'https://github.com/Pushpendra24-7/Hello_world.git'
            }
        }

        stage('Install Dependencies') {
            agent {
                docker {
                    image 'node:18'   // Node container for npm install
                }
            }
            steps {
                sh 'npm install'
            }
        }

        stage('Build Docker Image') {
            agent {
                docker {
                    image 'docker:20.10.24-dind'   // Docker-in-Docker image
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh "docker build -t $DOCKER_IMAGE ."
            }
        }

        stage('Run Docker Container') {
            agent {
                docker {
                    image 'docker:20.10.24-dind'
                    args '-v /var/run/docker.sock:/var/run/docker.sock'
                }
            }
            steps {
                sh "docker run -d --name $CONTAINER_NAME -p 3000:3000 $DOCKER_IMAGE"
            }
        }

        stage('Set Cleanup Task') {
            agent any
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
