pipeline {
  agent any
  withEnv(['PATH+NODE=/usr/local/bin/node']) {
    stages {
      stage('Build') {
        steps {
          echo 'Building the App...'
          echo "Running ${env.BUILD_ID} ${env.BUILD_DISPLAY_NAME} on ${env.NODE_NAME} and JOB ${env.JOB_NAME}"
          sh "npm install -g yarn"
          sh "yarn install"
        }
      }
    }
  }
}
