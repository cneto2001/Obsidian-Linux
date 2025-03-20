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
	~={purple}-a=~ [user] => Adiciona o ~={orange}user=~ ao ~={orange}group=~.
	~={purple}-d=~ [user] => Remove o ~={orange}user=~ do ~={orange}group=~.
	~={purple}-A=~ [user] => Define a lista de usuários administrativos.
	~={purple}-M=~ [user], ... => Define a lista de membros.

**usermod** => Modifica uma conta de usuário.
	~={purple}-a=~ => Adiciona o ~={orange}user=~ aos grupos suplementares. Use apenas com ~={purple}-G=~.
	~={purple}-g=~ [GROUP] => The name or numerical ID of the user's new primary group. The
           group must exist.
           Any file from the user's home directory owned by the previous
           primary group of the user will be owned by this new group.
           The group ownership of files outside of the user's home
           directory must be fixed manually.
           The change of the group ownership of files inside of the
           user's home directory is also not done if the home dir owner
           uid is different from the current or new user id. This is a
           safety measure for special home directories such as /.
       ~={purple}-c=~ "[COMMENT]" => Atualiza o campo de comentário do ~={orange}user=~ em `/etc/passwd`, o qual é normalmente modificado pela utilidade ~={purple}chfn(1)=~.

**groupmod** [options]  [GROUP] => The **groupmod** command modifies the definition of the specified ~={orange}GROUP=~ by modifying the appropriate entry in the group database.

**chfn** [OPTIONS]  [login] => Change your finger information.
	~={purple}-f=~ => Specify your real name.
	~={purple}-o=~ => Specify your office room number.
	~={purple}-p=~ => Specify your office phone number.
	~={purple}-h=~ => Specify your home phone number.

**chsh** [-s shell]  [-l]  [-h]  [-V]  [username] => Change your login shell.
	~={purple}-s=~ => specify your login shell.
	~={purple}-l=~ => Print the list of shells listed in _/etc/shells_ and exit.
	~={purple}-h | -V=~ => Help and version.

**lastlog** => **lastlog** formats and prints the contents of the last login log
       /var/log/lastlog file. The _login-name_, _port_, and _last login time_
       will be printed. The default (no flags) causes lastlog entries to
       be printed, sorted by their order in /etc/passwd.

**last** => List logins on the system.

**users** [OPTION]... [FILE]=> Print the user names of users currently logged in to the
current host.

**groups** => Print the groups a user is in.


