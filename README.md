# meu-jornal
Meu jornal angular

#Passos para iniciar

#instala o vs code (indo no site do vs code)
#instala o git (indo no site do git)
#cria a pasta no github
	copia o https
abre o cmd e digita o comando git clone e cola o https do git
#instala o node js (indo no site do node)
#No vs code
abre o terminal no vs code e instala o angular cli 
	npm install -g @angular/cli
abre a pasta no vs code
abre o terminal no vs code e dentro da pasta desejada cria um novo projeto com o comando ng new nomedoprojeto
	entra na pasta do projeto com o comando cd
instala o bootstrap com o comando npm install bootstrap
	verificar em modules se existe a pasta bootstrap
abre o arquivo angula-cli.json, abaixo so style coloca "../node_modules/bootstrap/dist/css/bootstrap.min.css"

#atualiza o git 
	git status
	git add (e o nome da pasta ele adiciona um por um)
	git add --all (adiciona todos os arquivos)
	git status (necessario ver os arquivos em verde que foram adicionados)
	git commit -m "instalando bootstrap" (comentário "")
	git status
	git push origin master (para enviar para o github os arquivos adicionados)