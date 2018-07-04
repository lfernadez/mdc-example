pipeline {
  agent {
    node {
      label 'build'
    }

  }
  stages {
    stage('Build') {
      steps {
        git(url: 'https://github.com/lfernadez/mdc-example.git', branch: 'master', poll: true, credentialsId: '9bd79aabb35f0d9d213c34e7d63ca81834035bd6', changelog: true)
      }
    }
  }
  environment {
    dev = 'dev'
  }
}