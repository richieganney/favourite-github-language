pipeline {
  agent any
  stages {
    stage('stage 1') {
      steps {
        sh 'whoami'
        sh 'npx cypress run --spec cypress/integration/features/*.spec.js'
        sh '''mkdir -p build
echo "This is build number ${BUILD_NUMBER}" > build/release.txt
zip -r build.zip build'''
        sh 'git push heroku master'
      }
    }

  }
}