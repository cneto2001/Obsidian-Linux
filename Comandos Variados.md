**#** => Colocado no início do prompt, o comandotorna um comentário.
**date** => Exibe a data atual.
	**-u** => Exibe o horário atual em Greenwich
	**-s** => Permite que o horário da máquina seja alterado. Requer permissão root.
	**hwclock --systohc** => adicionar o horário modificado para a placa mãe.
	**+[parameters]** ==> 
		~={orange}M=~ ==> Em extenso. | ~={orange}m=~ ==> minúsculo.
		**Adicionar separador** ==> **Ex.:** => [date +%d-%y-%m] 
		**Adicionar espaço** ==> **Ex.:** => [date +"%d %Y %j"]
		~={purple}%d=~ => Exibe o dia.
		~={purple}%y=~ => Exibe o ano (abreviado).
		~={purple}%m=~ => Exibe o mês.
		~={purple}%T=~ => Exibe o tempo.
		~={purple}%j=~ => Exibe o número do dia do ano.
		~={purple}%r=~ => Exibe o horário em formato de 12hrs.
		~={purple}%p=~ => Exibe o período do horário 12hrs(**AM** ou **PM**);
		~={purple}--date='@1'=~ => converte uma data em unix style para um formato legível ==>
			**Ex.:** => [date --date='@1234567890'] ==> **Output:** Fri Feb 13 09:31:30 PM -02 2009.

**df** => exibe o espaço livre em cada partição montada no sistema Linux.
	~={purple}-h=~ => Exibe os dados de forma legível.
	~={purple}-H=~ => Similar ao ~={purple}-H=~, porém substitui blocos de 1024 por blocos de 1000. 
	~={purple}-l=~ => Lista apenas o sistema de arquivos locais. 
		*Ex.:**  ==> não exibe arquivos montados via rede. 
	~={purple}-m=~ => Exibe os valores em MB.
	~={purple}-a=~ => Inclui o pseudo file system do Unix.
	~={purple}-i=~ => Exibe os inodes do sistema.
	~={purple}-T=~ => Mostra qual sistema de arquivos é utilizado em cada partição.
	~={purple}-t=~	 => Exibe apenas a lista de arquivos do tipo especificado. ==> 
		**Ex.:** ==> [df -Th -t ext4].
	~={purple}-P=~ => Exibe a saída em formato POSIX.Útil para ser utilizado em scripts.

**ln** => Cria um link de um arquivo para um diretório ou para um arquivo. 
	==> ~={orange}Hard Link=~ ==> Pode ser feito no mesmo sitema de arquivos ==> arquivo convencional.
	==> ~={orange}Link simbólico=~ ==> Sistemas de arquivos diferentes ou dentro do próprio sistema de arquivos. **Além disso**, permite a ligação com pastas, diferente do ~={orange}Hard Link=~.
	------------------------------------------------------------------------------------------
	~={purple}-s=~ => Cria um link simbólico. 
		~={orange}Definição=~ ==> Um link simbólico é um "apontamento" visual, ou seja, não faz referência ao ~={pink}inode=~ diretamente, se referindo a um símbolo para acessar o arquivo alvo. Pode ser utilizado para acessar um arquivo que estiver em outro ~={orange}Sistema De Arquivos=~.

**du** => Exibe a ocupação de tamanho de cada arquivo da partição montada.
	~={purple}-H=~ => Retorno legível.
	~={purple}-h=~ => Blocos de 1000.
	~={purple}-s=~ => Summarizes the total.
	~={purple}-k=~ => Tamanhos em ~={orange}KB=~.
	~={purple}-m=~ => Tamanhos em ~={orange}MB=~.
	~={purple}--inodes=~ => Dados de inodes.
	~={purple}-hc=~ => Exibe mais detalhes, incluindo o valor total.

**find**	 => Permite localizar arquivos no sistema. Sem argumentos, lista todos os arquivos e diretórios dentro do diretório atual.
	[find . -name ls] => Busca as pastas que terminam em "ls" no diretório atual.
	~={purple}-type [~={orange}type=~]=~ -name [Arg] => Busca apenas os dados do tipo desejado. **Ex.:** ==> ~={orange}type=~ === d para ~={orange}diretórios=~.
	~={purple}maxdepth/mindepth [~={orange}n=~]=~ => Procura apenas diretórios com até || com pelo menos ~={orange}n=~ níveis na estrutura.
	~={purple}-mtime [~={orange}-value=~]=~ => Procura somente arquivos que foram modificados há ~={orange}value=~ dias.
	~={purple}-amin [~={orange}-value=~]=~ => Procura somente arquivos que foram acessados há ~={orange}value=~ minutos.
	~={purple}-cmin=~ [~={orange}value=~] => Busca apenas arquivos que foram criados há ~={orange}value=~ minutos.
	~={purple}-ctime=~ [~={orange}value=~]=> Busca somente arquivos que foram criados há ~={orange}value=~ dias atrás. Se ~={orange}value=~ for positivo, serão listados arquivos criados antes do tempo especificado. 
		**Ex.:**  => [find /etc -ctime +1] ==> Retorna apenas os arquivos/pastas criados há mais de um dia.
	~={purple}-mount=~ => Realiza a busca apenas no sistema de arquivos atual.
	~={purple}-links [~={orange}value=~]=~ => Busca pelos arquivos/pastas que possuem ~={orange}value=~ links com referência.
	~={purple}-size [~={orange}value=~]=~ =>  Busca pelos arquivos/ pastas que possuem mais do que, menos do que ou extamente ~={orange}value=~. A unidade default do ~={orange}value=~ é o bloco.
		~={orange}value=~k ==> Tamanho em KiloBytes.
		~={orange}value=~c ==> Tamanho em Bytes.
	~={purple}-type [~={orange}type=~]=~ => Busca pelos arquivos do tipo escolhido.

**free** => Exibe a memória RAM livre e a memória swap do Linux. A aba **available** é, em geral, a mais precisa.
	~={purple}--bytes,--kilo ,--giga, --tera, --peta=~ => Exibe os dados utilizando a unidade desejada.
	~={purple}--kibi, --mebi, --gibi, --tebi, --pebi=~ => Exibe os dados em formato 1024.
	~={purple}-s [~={orange}valor=~]=~ => Exibe os dados a cada ~={orange}value=~ segundos.

**grep** '[~={orange}string=~]'=> Muito utilizado para a pesquisa de expressões em determinado arquivo ou na ~={orange}stdo=~.
	**Ex.:** ==> grep 'root' /etc/password. ==> O retorno desse comando é composto pelas linhas que contêm a ~={orange}string=~.
	~={purple}-v=~ => Inverte o efeito, mostrando as linhas que não possuem a ~={orange}string=~.
	~={purple}-i=~ => Ignora maiúsculos e minúsculos.
	~={purple}-E=~ => Permite que a pesquisa seja realizada utilizando expressões regulares.
	~={purple}-F=~ => Realiza a pesquisa de acordo com a ~={orange}string=~ exata.

**deluser** => Delete user.

**adduser** => Adds a new user. Can also be used to give special permissions.

**sync** => Atualiza arquivos no buffer.

**uname** => Retorna informações sobre o sistema.
	~={purple}-a=~ => Retorna todas as informações. 
	~={purple}-s=~ => Retorna o sistema.
	~={purple}-n=~ => Retorna o User.
	~={purple}-r=~ => Versão atual do Kernel.
	~={purple}-v=~ => Data de criação do Kernel.
	~={purple}-m=~ => Arquitetura utilizada pelo Kernel.

**wc** => Print newline, word, and byte counts for each FILE, and a total line if
more than one FILE is specified.

**seq** [FirstNum] [Increment] [LastNum] => Print numbers from FIRST to LAST, in steps of INCREMENT.

![[Pasted image 20250318093813.png]]

**chattr** => Permite a modificação de atributos de arquivos do sistema de arquivos e diretórios do Linux.
	~={purple}+=~ => Imbui o diretório/arquivo c/attr (suffix). 
	~={purple}-=~ => Remove o attr do diretório/arquivo.
	~={purple}=[attrs] * =~ => Adiciona os ~={orange}attrs=~ escolhidos para todos os arquivos no diretório atual.
	~={purple}i=~ => Imutável(Não permite modificações ou deleções).
	 ~={purple}a=~ => Restringe o arquivo para que possa apenas receber "Appends", ou seja, modificado de forma que aumente o seu conteúdo e mantenha o conteúdo anterior intocado.
	 ~={purple}c=~ => Arquivo compactado.
	 ~={purple}s=~ => Permite deleção segura.
	 ~={purple}S=~ => Permite realizar o sync do arquivo imediatamente.
	 ~={purple}D=~ => Arquivos serão gravados nessa pasta de forma síncrona.
	 ~={purple}d=~ => Arquivos e pastas guardados não são incluídos no backup do programa dump.

**cut** => "Corta" um arquivo, mostrando apenas parte do conteúdo no ~={orange}stdout=~.
	~={purple}-d=~ => Delimitador.
	~={purple}-f=~ => Escolha de "campo".
		**Ex.:** ==> [cut -d ":" -f  1 /etc/passwd] ==>
		![[Pasted image 20250318143334.png]]
		**Ex.:** ==> [cut -d ":" -f 1-3,7 /etc/passwd] ==>
		![[Pasted image 20250318143525.png]]
	~={purple}-b=~ => Permite especificar a posição em bytes do conteúdo.
	~={purple}-c=~ => Similar ao -b, porém utiliza os caracteres. Disso, diferente do ~={purple}-b=~, esta opção ignora espaços.

**cmp** => Compara dois arquivos, retornando na primeira diferença entre ambos.

**diff** [OriginalFile]  [OtherFile] => Retorna as diferenças entre dois arquivos.
	~={purple}-u=~ => O retorno é feito utilizando o formato de comparação unificado.
	~={purple}-r=~ => Permite a comparação entre o conteúdo de duas pastas.

**patch** [~={orange}OriginalFile=~]  [~={orange}PatchFile=~] => Aplica um "patch" para um arquivo.
	~={purple}-p1=~ => Identifica que é necessário retornar um nível de pastas para buscar o ~={orange}PatchFile=~.
	~={purple}-N=~ => Evita que patches que já foram aplicados sejam desfeitos.
	~={purple}-R=~ => Reverte as alterações.
		**Ex.:** ==> 