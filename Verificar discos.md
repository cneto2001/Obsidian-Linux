**mkfs** [**-V**] [**-t** _fstype_] [_fs-options_] _filesys_ [_blocks_] => **mkfs** is used to build a Linux file system on a device, usually a hard disk partition. _filesys_ is either the device name (e.g. _/dev/hda1_, _/dev/sdb2_), or a regular file that shall contain the file system. _blocks_ is the number of blocks to be used for the file system. => The exit code returned by **mkfs** is 0 on success and 1 on failure.

**umount** => Unmount filesystems.

**/etc/fstab** => Tabela de configuração que contém um conjunto de regras para controlar a maneira como diferentes sistemas de arquivos são tratados ao serem introduzidos.
	==> Mais informações: https://www.redhat.com/en/blog/etc-fstab.

xfs_repais => Reparo de disco.

**fsck** => Check and repair a Linux filesystem. PS.: Não utilizar com um disco montado devido á possibilidade de corromper o mesmo.

**tune2fs** - adjust tunable file system parameters on ext2/ext3/ext4 file systems.

**e4defrag** => Desfragmenta o disco. ==> (não é necessário no Linux).

**badblocks** => Is used to search for bad blocks on a device (usually a disk partition).

![[Pasted image 20250324092259.png]]

**/etc/cron** 

**cron** => Agendar comandos que repetirão.

**crontab** ~={purple}-l=~ => Mostra todos os jobs.
	~={purple}-e=~ => Escrever no arquivo do crontab. ==> ![[Pasted image 20250324103001.png]] ~={purple}*/5=~  => Executar a cada 5 minutos.
	~={cyan}8-18=~  => Durante esse intervalo de tempo.
	~={green} * =~  =>  Todos os dias.
	~={purple}2,4,12=~  => Apenas nesses meses.
	~={cyan}1-5=~ => Nesses dias da semana (Segunda a Sexta).
	![[Pasted image 20250324104202.png]]

**/etc/cron.allow** ==> Define usuários que podem utilizar o **cron**.

**/etc/cron.deny**  ==> Define usuários que não podem utilizar o **cron**.

**at** => Agendar comandos sem repetição.

**atq** => Visualizar a queue de comandos agendados.

**atrm** => Remove jobs.

Outra maneira de "setar" a data ==>
![[Pasted image 20250324100816.png]]

**batch** => executa o comando quando o load average da máquina for menor que 1.5. (É possível mudar isso no daemon do **at**).