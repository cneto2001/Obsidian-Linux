
**apt-get** ==> Utiliza o repositório que está configurado na máquina, pegando o endereço do pacote desejado e realizando o download do pacote .deb, resolvendo dependências.

**dpkg** ==> É necessário ter o pacote na máquina.
	~={purple}-i=~ => install.
	~={purple}--unpack=~ => Unpack the package, but don't configure it.  If **--recursive** or **-R** option is specified, _package-file_ must refer to a directory instead.
	~={purple}--configure=~ _package_...|**-a**|**--pending** ==> Configure a package which has been unpacked but not yet configured.  If **-a** or **--pending** is given instead of _package_, all unpacked but unconfigured packages are configured.
	~={purple}-r=~ ==> Remove an installed package.  This removes everything except conffiles and other data cleaned up by the _postrm_ script.
	~={purple}-P=~ ==> Purge an installed or already removed package.  This removes everything, including conffiles, and anything else cleaned up from _postrm_.
	~={purple}-V=~ ==> Verifies the integrity of _package-name_ or all packages if omitted, by comparing information from the files installed by a package with the files metadata information stored in the **dpkg** database.

**dnf** ==> _DNF_ is the next upcoming major version of _YUM_, a package manager for RPM-based Linux distributions. It roughly maintains CLI compatibility with YUM and defines a strict API for extensions and plugins.

**yum** ==> redirecting to DNF Command Reference.

**rpm** ==> RPM Package Manager.

**curl** ==> Transfer a URL.

