**ps** => Este comando exibe informações sobre os [**processos**](https://guialinux.uniriotec.br/processo/) que estão executando na máquina.
	 ~={purple}**-a**=~ : Mostra os processos de todos os usuários.
	 ~={purple}**-A**=~ ou **~={purple}-e=~** : Mostra todos os processo.
	 **~={purple}-f=~** : Mostra a árvore de execução de comandos.
	**~={purple}-g=~** [group]  : Mostra os processos de um determinado nome de grupo. 
	**~={purple}-o=~** [format] : Usa  o formato definido pelo usuário, Deve-se usar palavras-chaves conhecidas como [**pid,**](https://guialinux.uniriotec.br/pid/) [**ppid,**](https://guialinux.uniriotec.br/ppid/) [**ni**](https://guialinux.uniriotec.br/nice/), pri (prioridade) e comm (comando). 
	**~={purple}-x=~** : Mostra os processos que não foram iniciados no console.
	**~={purple}-u=~** : Fornece o nome do usuário e a hora de início do processo.

**ifconfig [OPTIONS]** => O comando é usado para configurar (e posteriormente manter) as interfaces de rede. É usado durante o _boot_ para configurar a maioria das interfaces de rede para um estado utilizável. Depois disto, sua utilização é normalmente necessária somente durante depurações ou quando for necessário melhorar a configuração do sistema.

**sleep** => Pause for NUMBER seconds.  SUFFIX may be 's' for seconds (the default),
'm' for minutes, 'h' for hours or 'd' for days.  NUMBER need not be an
integer.  Given two or more arguments, pause for the amount of time
specified by the sum of their values.

**jobs** => Lista os **[processos](https://guialinux.uniriotec.br/processo/)** inicializados a partir do terminal.

**fg [num] or fg [%order]** => Este comando move **[processo](https://guialinux.uniriotec.br/processo/)** em segundo plano para o primeiro plano. O processo pode ser identificado pelo seu número ([**PID**](https://guialinux.uniriotec.br/pid/)) ou pela ordem de entrada do processo em _background_.

**bg** [num] => Este comando faz com que um processo (identificado por _num_), que está sendo executado em primeiro plano, passe a ser executado em segundo plano.

**kill** [OPTIONS]  [pid] => Este comando envia um [**sinal**](https://guialinux.uniriotec.br/sinal/) para um [**processo**.](https://guialinux.uniriotec.br/processo/)

**killall** [OPTIONS]  [nome] => Este comando envia um determinado [**sinal**](https://guialinux.uniriotec.br/sinal/) a um conjunto de [**processos**](https://guialinux.uniriotec.br/processo/) que usam o mesmo nome.
	~={purple}-u=~ ~={orange}user=~ => Mata apenas os processos de determinado usuário.
	~={purple}-v=~ => Informa se o sinal foi enviado com sucesso.

**pidof** [OPTIONS] ~={orange}program=~ => Fornece o [**PID**](https://guialinux.uniriotec.br/pid/) de um programa em execução.
	 **-s** => Retorna apenas um PID.
	 -o pid => Omite [**processo**](https://guialinux.uniriotec.br/processo/) com o PID especificado.

**pstree** [OPTIONS] => Este utilitário lista os [**processos**](https://guialinux.uniriotec.br/processo/) em execução usando o formato de árvore.
	~={purple}-H=~ ~={orange}process=~ => destaca o processo especificado dentro da estrutura de árvore;
	~={purple}-n=~ : Ordena a saída pelos números dos [**PIDs**](https://guialinux.uniriotec.br/pid/) dos processos.
	~={purple}-p=~ : Mostra os [**PIDs**](https://guialinux.uniriotec.br/pid/) dos processos.
	~={purple}-s=~ : Mostra os processos-pai do processo especificado.
	~={purple}-V=~ ou ~={purple}−−version=~ => Mostra informações sobre o utilitário.
	~={orange}user=~ => Mostra apenas os ramos com os processos inicializados pelo usuário especificado.

**pgrep** [OPTIONS] => The pgrep command is _used to find out the PIDs of a running program_ based on different criteria. The command returns `0` when at least one running process matches the requested name. Otherwise, the [exit code](https://linuxize.com/post/bash-exit/) is `1`. This can be useful when writing shell scripts. ==> **pgrep** prints each matched process ID on a newline.
	~={purple}-d=~ => Permite que um delimitador diferente seja especificado.
	~={purple}-l=~ => Faz com que o **prgrep** mostre o nome do processo, junto ao seu ~={orange}ID=~.
	~={purple}-f=~ => By default, **pgrep** matches only against the process name. When ~={purple}-f=~ option is used the command matches against full argument lists.
	~={purple}-u=~ => Exibe os processos de um determinado usuário.

**nohup** [OPTIONS]  [COMMAND] => O _nohup_ ignora os sinais de interrupção durante a execução do comando especificado. Assim, é possível o comando continuar a executar mesmo depois que o usuário se desconectar do sistema.

**top** [OPTIONS] => Este utilitário exibe informações sobre os [**processos**](https://guialinux.uniriotec.br/processo/) que estão sendo executados.
	~={purple}-c=~ => Mostra a linha de comando ao invés do nome do programa.
	~={purple}-d=~ [NUM] => Atualiza a tela após _num_ segundos (o padrão é 5 segundos).
	~={purple}-h=~ => Exibe as opções do utilitário.
	~={purple}-p=~ [pid] => Mostra apenas o processo com o [**PID**](https://guialinux.uniriotec.br/pid/) especificado.
	~={purple}-v=~ => Mostra informações sobre o utilitário.

**nice** [OPTIONS]  [COMMAND [ARG]... ] => Define o valor de ajuste da prioridade  para a execução de um comando.

A prioridade de execução de um [**processo**](https://guialinux.uniriotec.br/processo/) normal pode variar de 0 (maior prioridade) a 39 (menor prioridade). Neste caso, a prioridade é calculada como `PR = 20 + NI`.
	~={purple}-n=~ [value] or [-value] => Adiciona o valor especificado à prioridade de execução.
	~={purple}-help=~.
	~={purple}--version=~.

**renice** [OPTIONS] => Este comando altera o valor _nice_ usado para calcular a prioridade de execução de um [**processo**](https://guialinux.uniriotec.br/processo/) normal. `PR = 20 + NI`. ==> No qual NI é o valor ~={purple}nice=~ e pode  variar de ~={blue}-20=~ (maior prioridade) a ~={blue}19=~ (menor prioridade). Logo, um processo normal pode ter prioridade de execução de ~={blue}zero=~ (maior prioridade) a ~={blue}39=~ (menor prioridade).
	~={purple}-n, --priority [priority] =~ =>o uso de -n ou de ~={purple}−−priority=~ é opcional. Mas quando usado, deve ser o primeiro argumento.
	~={purple}-u=~ [user] => Altera a prioridade de todos os processos do usuário especificado.
	~={purple}-p=~ [pid] => Altera a prioridade do processo que possui o [**PID**](https://guialinux.uniriotec.br/pid/) especificado. É o padrão.
	~={purple}-g=~ [gid] => altera a prioridade de todos os processos que possuem o [**GID**](https://guialinux.uniriotec.br/gid/) especificado.
	~={purple}-help=~.
	~={purple}--version=~.
