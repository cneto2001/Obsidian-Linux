
**>** ==> Redireciona a ~={orange}stdout=~.

**>>** ==> Redireciona a ~={orange}stdout=~ e concatena em arquivo/dispositivo indicado.

**<** ==> Redireciona a ~={orange}stdin=~.

**<<** ==> Redireciona a ~={orange}stdin=~.

![[Pasted image 20250321142548.png]]

~={orange}stdin=~ ==> File descriptor === 0.
~={orange}stdout=~ ==> File descriptor === 1.
~={orange}stderr=~ ==> File descriptor === 2.

![[Pasted image 20250321151232.png]]

![[Pasted image 20250321153929.png]]

**|** ==> "Pega" o conteúdo do comando anterior e "joga" para o próximo comando processar.

**tee** ==> read from standard input and write to standard output and files.

**&&** ==> Se [Commando] então [Comando]. (O primeiro comando será executado de qualquer forma, caso seja ~={orange}TRUE=~).

**||**  ==> Se [Comando] ou [Comando] ou.... ==> Executa na lógica conhecida.