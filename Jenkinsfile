pipeline{
    agent {label 'jenkins-agent'}
    stages{
        stage('Build'){
            steps{
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
            }
        }
    }
}