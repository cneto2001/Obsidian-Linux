**su** [OPTIONS]  [USER] => Este comando permite mudar de usuário em um ambiente [**shell**.](https://guialinux.uniriotec.br/shell/)

**chown** ~={orange}Owner=~[:~={orange}GROUP=~] ~={orange}Archive=~ => Este comando permite alterar o nome do dono e/ou do grupo de [**arquivos**.](https://guialinux.uniriotec.br/arquivo/)
	~={purple}-c=~ => Informa quais arquivos estão sendo alterados.
	~={purple}-h=~ => Altera o link, não o arquivo apontado pelo link.
	~={purple}-v=~ => Informa quais arquivos estão sendo processados (não necessariamente alterados).
	~={purple}-R=~ => Altera, recursivamente, dono e/ou grupo de arquivos.
	~={purple}--help=~.
	~={purple}--version=~.
	**Ex.:** ==>	
	![[Pasted image 20250320101051.png]]

**groupadd** => Este comando cria um novo grupo de usuários.

**delgroup** / **groupdel** => Remove grupos.

**newgrp** => Este comando muda, temporariamente, o grupo do usuário. Isto significa que o usuário passa a usar o grupo _teste_ na sessão e que, se ele criar um novo arquivo, este pertencerá ao grupo _teste._

**passwd** [OPTIONS]  [USER] => Este comando altera as senhas dos usuários.
	~={purple}-d=~ => Deleta a senha de um usuário.
	~={purple}-e=~ => Passa a considerar a senha expirada. Isto significa que o usuário terá que alterar a senha no próximo login.
	~={purple}-u=~ => Desbloqueia a senha da conta. Esta opção reativa uma senha por meio da troca da senha para o seu valor anterior.
	~={purple}-l=~ => Lock the password of the named account. This option disables a password by        changing it to a value which matches no possible encrypted value (it adds a ´!´ at the beginning of the password).
	~={purple}--help=~.

**gpasswd** => Este comando é utilizado para administrar `/etc/group` e `/etc/gshadow`. Todos os grupos podem ter administradores, membros e uma senha.
