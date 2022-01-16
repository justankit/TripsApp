pipeline {
   agent any
   tools {nodejs "nodejs"}

   stages {
      stage('Build') {
        steps {
          echo 'Building the App...'
          echo "Running ${env.BUILD_ID} ${env.BUILD_DISPLAY_NAME} on ${env.NODE_NAME} and JOB ${env.JOB_NAME}"
           withEnv(['PATH+NODE=/usr/local/bin/node']) {
              stage('Prepare') {
               sh "npm install -g yarn"
               sh "yarn install"
            }
         }
        }
      }
  }
}
