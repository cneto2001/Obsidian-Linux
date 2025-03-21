![[Pasted image 20250320143315.png]]
![[Pasted image 20250320144909.png]]

**chmod, fchmod, fchmodat** => Change permissions of a file. ==> 
==> **chmod**() changes the mode of the file specified whose pathname is given in _pathname_, which is dereferenced if it is a symbolic link.
	~={purple}-c=~ => Like verbose but report only when a change is made.
	~={purple}-f=~ => Suppress most error messages.
	~={purple}-v=~ => Output a diagnostic for every file processed.
	~={purple}dereference=~ => Affect the referent of each symbolic link, rather than the symbolic link itself.
	~={purple}-h=~ => Affect each symbolic link, rather than the referent.
	~={purple}--no-preserve-root=~ => Do not treat '/' specially (the default).
	~={purple}--preserve-root=~ => Fail to operate recursively on '/'.
	~={purple}--reference=RFILE=~ => Use RFILE's mode instead of specifying MODE values. RFILE is always dereferenced if a symbolic link.
	~={purple}-R=~ => Change files and directories recursively.
~={red}==>=~ The following options modify how a hierarchy is traversed when the ~={red}**-R** =~option is also specified.  If more than one is specified, only the final one takes effect. **-H** is the default.
	~={purple}-H=~ => If a command line argument is a symbolic link to a directory, traverse it.
	~={purple}-L=~ => Traverse every symbolic link to a directory encountered.
	~={purple}-P=~ => Do not traverse any symbolic links.
	~={purple}--help | --version=~.

**Ex.:** ==> Dando permissão ao dono do arquivo.
![[Pasted image 20250320150112.png]]
![[Pasted image 20250320145848.png]]
![[Pasted image 20250320145923.png]]

**Ex.:** ==> Removendo a permissão de escrita de usuários que estejam no grupo ==>
`chmod g-w teste`

**Ex.:** ==> Adicionando a mesma permissão em todo o arquivo ~={red}==>=~
![[Pasted image 20250320150503.png]]

**Ex.:** ==>
![[Pasted image 20250320150609.png]]

~={red}Utilizando o modo Octal=~ ~={red}==>=~ 
![[Pasted image 20250320151257.png]]

==> **fchmod**() changes the mode of the file referred to by the open file descriptor _fd_.

==> **fchmodat**() system call operates in exactly the same way as **chmod**(), except for the differences described here. ~={red}==>=~ If the pathname given in _pathname_ is relative, then it is interpreted relative to the directory referred to by the file descriptor _dirfd_ (rather than relative to the current working directory of the calling process, as is done by **chmod**() for a relative pathname). ~={red}==>=~ If ~={orange}pathname=~ is relative and _dirfd_ is the special value **AT_FDCWD**, then _pathname_ is interpreted relative to the current working directory of the calling process (like **chmod**()). ~={red}==>=~ If _pathname_ is absolute, then _dirfd_ is ignored.

