pipeline{
    agent {label 'jenkins-agent'}
    stages{
        stage('Build'){
            steps{
                git branch: 'main', url: "https://github.com/rishirathoree/End-to-End-CI-CD-Jenkins-Terraform-Provisioning-React-on-EC2.git"
                echo 'Building the application'
                sh '''
                docker build -t rishirathoree/react-terraform-app:latest -f dockerfiles/react.dockerfile .
                docker login -u rishirathoree -p Rish@1234
                docker push rishirathoree/react-terraform-app:latest
                '''
            }
        }
        stage('Test'){
            steps{
                echo 'Testing the application'
            }
        }
        stage('Deploy'){
            steps{
                echo 'Deploying sthe applications!'
                sh '''
                docker compose up -d
                '''
            }
        }
    }
}