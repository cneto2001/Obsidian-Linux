	### Shell Commands

##### ls
 - usado para listar os arquivos e diretórios
 	 
	- **a** => Lista todos os arquivos e diretórios(inclusive os ocultos).
	- **l** => Demonstra mais informações sobre os arquivos e diretórios.
	- **h** => Lemonstra o tamanho de forma "readable".
	- **Portanto:** -lha realiza todas essas funções de uma só vez. ex.: ls -lha.
	- **-A** => Lista todos os diretórios/arquivos exceto o "**.**" e o "**..**" .
	- **-B** => Lista todos os arquivos **exceto** aqueles terminados em ~. Arquivos terminados em "**~**" são de backup.
	- **-d** => Lista apenas os parâmetros da pasta, se utilizado com -l. Caso contrário, mostra apenas o nome da pasta.
	- **-f** => Lista os arquivos/pastas em ordem de criação.
	- **-F** => Identifica arquivos e pastas ==>  
		**Pasta =>**  Pasta~={red}/=~  
		**Network Socket** => Arquivo~={red}= =~
		**Link Simbólico** => Arquivo~={red}@=~
	- **-G** => Oculta a coluna do grupo do arquivo.
	- **-n** => Converte os nomes do dono e grupo para ~={cyan}uid=~ e ~={cyan}gid=~ do Unix.
	- **-o** => Mesmo que **-G**. Lista apenas o dono(além dos outros dados do -l).
	- **-p** => Mesma função que o **-F**, porém identificando apenas as pastas.
	- **-t** => Organiza os dados por data de criação.
	- **-latr** => Inverte a ordem.
	- **ls -lX** => Classifica de acordo com a extensão do arquivo.
**ln** => Create a hard link or symbolic link to an existing file or directory.
**cat** => Usado para ler, exibir e concatenar arquivos de texto. ==> 
**-n** => enumera as linhas.
**-s** => oculta linhas em branco repetidas.
**-b** => enumera apenas as linhas que possuem conteúdo.
**-E** => identifica o fim de cada linha com "~={red}$=~".
**-T** => exibe o caracter "tab" como ~={red}^I=~.
**zcat** => visualizar arquivo .gz.
**bzcat** => visualizar arquivo .bz2.
**xzcat** => visualizar arquivo .xz.
**tac** => exibe conteúdo de um arquivo .txt com as linhas invertidas. ==>
	**-s** => define a string utilizada para a quebra de linhas (Default === \n ).
**mkdir** => Cria pastas. ==> ~={cyan}-p=~ => Allows the creation of nested directories.
**rmdir** => Deleta diretórios. ==> **-p** => remove o diretório mesmo que ele contenha outras pastas.
**touch** => Criar arquivos.
**pwd** => Mostra o diretório atual.
**cd** / => Retorna ao root.
**cd -** Retorna ao último diretório.
**which** => Retorna o local onde o binário está instalado.
**man builtins** => Manual de comandos do BASH.
**less/more** => Lista.
**tree** => lista a estrutura de diretórios. ==> **-A** => Lista de forma mais legível.

**rm** => remove arquivos e diretórios de forma normal ou recursiva.
	**-r** => permite a remoção de diretórios.
	**-rf** => força a remoção, não havendo prompt de confirmação.
	**-i** => força que o prompt de confirmação sempre seja feito.
	* => remove todos os arquivos/pastas dentro do diretório. Ademais ==> a\* (sem a barra) remove todos os arquivos com nomes iniciados por "a". 
	**--** => sinaliza que a próxima string não é um parâmetro. Isso é útil para casos nos quais o arquivo/diretório possui um nome com caracteres que o shell/sistema tente interpretar ou caracteres especiais. ==> Ex.: rm -- ~={red}-=~ => Para um arquivo com o nome de "**-**". 

**cp** [origem]  [destino]  => Copia um arquivo  da origem para o destino. ==> 
	**-R** => copia também dispositivos especiais, sockets e outros importantes para o sistema.
	**-vs** => cria um link simbólico do ~={purple}destino=~ para a ~={purple}origem=~.
	**-u** =>a cópia será realizada somente se a data de alteração da ~={purple}origem=~ for mais nova que a do ~={purple}destino=~.
	**-x** => impede que a cópia de dados de outras partições seja realizada.
	**-p** => preserva os atributos dos arquivos copiados.
	**-a** => === ~={red}-dpR=~.

**mv** => move um arquivo para determinado destino.
	**-i** => modo interativo. ==> Útil para impedir que um arquivo seja sobrescrito deliberadamente. ~={red}**Além disso**=~, pode ser utilizado para renomear um arquivo. 
	**Ex.:** mv -i [~={purple}Arquivo=~]  [~={purple}ArquivoRenomeado=~].
	**-u** => move apenas arquivos mais novos do que o destino.

**echo** ~={orange}string=~ => Exibe a string no ~={orange}stdo=~.
	**Ademais**, pode ser usado para inserir dados ==>
	> => Substitui os dados da ~={orange}string=~, deixando uma newline.
	>> => Insere os dados da ~={orange}string=~ na última linha.

**xdg-open** => Abre pastas na interface.

**Editores de texto** =>  **nano**, **mcedit** e **vi**.
### Estrutura de Diretórios
##### /usr
-  Segunda estrutura de diretórios do Linux.
- Arquivos não essenciais para o sistema.
- Contém bin e lib, assim como o root, com os libs contendo bibliotecas dinâmicas do bin e sbin deste diretório.
- **src** - diretório do source code. Código-fonte do Kernel.
- **local** - Terceira estrutura de diretórios do Linux. Assim como o próprio /usr, possui bin, sbin, lib, src e outros.
##### /var
- **log** - logs do sistema. Ex.: logs do kernel (kern.log), debug(informações de debug).
- backups.
- **cache** - Ex.: apt utiliza este arquivo para guardar o cache durante instalação (/apt). Pacotes ".deb" são guardados caso sejam necessários depois.
-  **lib** - Ex.: Ao instalar o docker, informações referentes a ele, como volumes, estarão armazenados nesse arquivo.
- **local** - segunda estrutura do /var.
- **lock** - armazena arquivos que impedem alguns programas, como o apt, de rodarem duas instâncias ao mesmo tempo.
- **mail**.
- **opt** - dados variáveis.
- **run** - **era** utilizado para armazenar informações de processos.
- **spool** - fila de processos.
- **tmp** - Ao realizar o reboot, os dados neste arquivo não são removidos.

##### Desligando e Reiniciando o Linux
- **halt** - desliga a máquina.
- **reboot** - reboot da máquina.
- **shutdown** - realiza o shutdown desejado. **Ex.:** shutdown -h now (h de "halt"). **Ex.:** shutdown -r now (r de "reboot"). **Ex.:** shutdown -h 18:00. **Ex.:** shutdown -c (Cancela o shutdown). **Ex.:** shutdown -r +30 "Manos, preciso reiniciar a maquina em 30 min"
- **poweroff**.
- **init** [valor] - valores: 0 - Desliga a máquina. 6 - Reinicia a máquina.

==> [/root: echo b > /proc/sysrq-trigger] ==> **reboot**.
==> [/root: echo o > /proc/sysrq-trigger] ==> **halt**.