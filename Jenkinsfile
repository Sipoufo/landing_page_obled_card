node {
    def WORKSPACE = "/var/lib/jenkins/workspace/Obled"
    def dockerImageTag = "obled-fo-deploy${env.BUILD_NUMBER}"
    try{
        stage('Clone Repo') {
            git url: 'https://github.com/Sipoufo/landing_page_obled_card.git',
                branch: 'main'
            sh 'npm install'
         }
        stage('Build docker') {
             dockerImage = docker.build("obled-fo-deploy:${env.BUILD_NUMBER}")
        }
        stage('Deploy docker'){
              echo "Docker Image Tag Name: ${dockerImageTag}"
              sh "docker stop obled-fo-deploy || true && docker rm obled-fo-deploy || true"
              sh "docker run --net=host --name obled-fo-deploy -d -p 80:80 obled-fo-deploy:${env.BUILD_NUMBER}"
        }
    }catch(e){
        throw e
    }
}
