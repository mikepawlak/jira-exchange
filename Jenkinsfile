pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo "Building"
                slackSend color: 'good', message: 'Starting job for jira-exchange...'
                sh "node -v"
                sh "npm install"
            }
        }
        stage('Test') {
            steps {
                echo "Testing"
                sh "npm test"
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                echo 'pulling in Helm Chart'
                checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [[$class: 'RelativeTargetDirectory', relativeTargetDir: 'helm']], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/mikepawlak/caroline-hub-helm-chart.git']]])
                sh "kubectl config use-context kubernetes-admin@kubernetes"
                sh "helm upgrade jira-exchange helm --install --values helm/jira-exchange/values.yaml --namespace='caroline' --wait --timeout=600s" //these rpis take a while to deploy to
            }
        }
    }
} 