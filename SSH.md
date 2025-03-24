**~/.ssh**

**ss** ~={purple}-ltn=~ => 
	~={purple}-l=~ => Mostrar as portas que estão em "Listen".
	~={purple}-t=~ => TCP.
	~={purple}-n=~ => Não listar os nomes dos serviços.

**ssh** localhost => abrir servidor.

**ssh** =>
	~={purple}-i=~ [CAMINHO] => Utilizar caminho da chave existente no sistema para acessar o servidor. 

**ssh-keygen** => Gera pares de chaves pública/privada.

**ssh-copy-id** [~={orange}user=~]@[IP da máquina] => Passa a chave para um usuário remoto.

**Para o acesso**: ´ssh [~={orange}user=~@~={orange}IP=~]´.

**ssh-add** => Adiciona identidades, as quais facilitam o acesso.
	~={purple}-L=~ => Lista as chaves de acesso.
	~={purple}-D=~ => Remove as identidades carregadas.

![[Pasted image 20250324143050.png]]

**ed25519** => Mais seguro e eficiente.

**/etc/ssh/sshd_config** => Permite modificar o servidor e restrições para usuários.

![[Pasted image 20250324145247.png]]