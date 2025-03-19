  `*`  => substituição para uma parte de texto que não é citada. **Ex.:** ==>
- ls a* => Todos os dados iniciados com "a".
- ls `*path` => Todos os dados terminados em "path".
- ls `a*r`.

**?** => pode substituir um caracter desconhecido(porém pode ser repetido várias vezes no prompt). **Ex.:** `ls m?` no diretório /usr/bin retorna o seguinte resultado: "mt" "mv", os dois arquivos encontrados que começam com "m" e possuem um caracter após o mesmo.

**~={green}[]=~** => Delimita uma faixa de carateres. 
	**Ex.:** ==> ls m[a-c] => retorna os dados que começam com a letra "m" e terminam com a letra "a" até "c".
	**Ex.:** ==> ls m[`^a-c`] => retorna os dados que começam com a letra "m" e não terminam com as letras de "a" até "c". 

**{}** => Delimita diferentes combinações de caracteres.
**Ex.:** ==>  ls x{zd,ze,zm}* => retorna todos os dados começados em x, seguido de "zd", "ze" ou "zm", com qualquer combinação e quantidade de caracteres após isso.

