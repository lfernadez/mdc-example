pipeline {
    agent {
        docker {
            image 'node:8-alpine' 
            args '-p 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install -g @angular/cli'
                sh 'npm install'
                sh 'ng build' 
            }
        }
    }
}