
**t (Sticky Bit)** =>  This permission does not affect individual files. However, at the directory level, it restricts file deletion. Only the **owner** (and **root**) of a file can remove the file within that directory. A common example of this is the **`/tmp`** directory.

**suid** ==> Executar como se fosse o dono do arquivo.
**sguid** ==> Executar como se pertencesse ao grupo do dono.

![[Pasted image 20250321095355.png]]

**umask** => Define a permissão padrão do arquivo/diretório no momento de criação (Válido somente durante a sessão atual no SHELL).

**Permissão Default** => ~={orange}Arquivo=~ ==> 0666  | Diretório ==> 777.