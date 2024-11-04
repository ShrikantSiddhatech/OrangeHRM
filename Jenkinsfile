pipeline {
    agent any

    tools {
        nodejs 'NodeJS 23'
    }

    triggers {
        githubPush()
    }

    stages {
        stage('Install Dependencies') {
            steps {
                script {
                    checkout scm
                    sh 'npm install'
                }
            }
        }

        stage('Run WebdriverIO Tests') {
            steps {
                sh 'npx wdio --spec ./test/specs/addEmployee.e2e.js'
            }
        }
    }
}
