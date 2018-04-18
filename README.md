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

   
Componentes (é uma classe) são os elementos da pagina, se localizam em src/app como padrão. Ele precisa de uma classe, html e css.

Em app clica com direito e cria uma pasta topo
	cria um arquivo topo.componet.ts
	coloca o codigo abaixo

import { Component } from "@angular/core";

@Component({
    selector:'app-topo',
    templateUrl:'./topo.component.html'
})
export class TopoComponent {

}
	cria um arquivo topo.componet.html
	vai no site do bootstrap e procura o codigo do navbar (alt + shift + F identa o codigo)
	copia e cola o codigo abaixo 

<nav class="navbar navbar-dark bg-dark">
    <!-- Navbar content -->
</nav>

	abre o app.module.ts e declara o novo component dentro de @NgModule TopoComponent
		se for com auto preenchimento ele ja impota a linha import { TopoComponent } from './topo/topo.component';
	abre o app.component.html
	escreve a tag <app-topo></app-topo>
	abre o topo.component.html e adiciona o codigo abaixo

<nav class="navbar navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Meu Jornal</a>
</nav>

	pelo terminal ng generate component rodape (nome do componente)
		ou pode-se usar o componente abreviado ng g c nomedocomponente
		ng g c rodape --spec=false (cria o componente sem o arquivo de teste)
	abre o html do rodape e coloca o codigo abaixo

<nav class="navbar fixed-bottom navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Rodape</a>
</nav>

-------------------------------------------------
diretivas
	são funcionalidades que vão manipular os elementos dentro do html
	tudo que for diferente de comando html
ngfor
	tem a mesma funcão de um for
---------------------------------------------------------

noticias codigo
	em noticia.component.ts coloca o array acima de constructor

 noticias: string[] = [
    "Noticia 1",
    "Noticia 2",
    "Noticia 3",
    "Noticia 4" ];

	em noticia.component.html coloca o código abaixo

<div class="container">
  
<div class="row">
    
<div class="col-md-6" *ngFor="let noticia of noticias"> 
        
<div class="jumbotron">
            
<h1 class="display-4">Hello, world!</h1>
           
 <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
</p>
            
<hr class="my-4">
            
<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
           
 <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
         
 </div>
    
</div>
  
</div>

</div>

	<div class="col-md-6" *ngFor="let noticia of noticias"> fica adicionando 4 vezes a noticia
em div row coloca o codigo ngif abaixo

<div class="row" *ngIf="mostrarNoticia; else noticiaUnica">

	após todos os div coloca o codigo abaixo para chamar o metodo referenciado no else

<ng-template #noticiaUnica>
  
<div class="row">
    
<div class="col-md-12">
        
<div class="jumbotron">
            
<h1 class="display-4">Hello, world!</h1>
            
<p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling 
extra attention to featured content or information.</p>
            
<hr class="my-4">
            
<p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
            
<button type="button" class="btn btn-dark">Leia Mais</button>
          
</div>
    
</div>
  
</div>

</ng-template>

-------------------------------------------
ngif
	é a condição logica if
	
-----------------------------------------------------
**ispinia pagina de templates
suellyn.specie@accenture.com
linkedin: /sspecie
blog: www.codetheelephant.com.br

-----------------------------------------------------
