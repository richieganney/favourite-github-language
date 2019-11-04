pipeline {
    agent any
   
    tools {nodejs "node"}
   
    stages {
      stage('Example') {
        steps {
          sh 'npm install'
          sh 'npm start'
          sh 'sleep 15s'
          sh 'npx cypress run --spec cypress/integration/features/*_spec.js'
        }
      }
    }
  }