{
	printf( "<b>%s</b><i onclick=\"playSoundMain(\'10Ephe04-%02d.mp3\',\'x\');\">%s</i>&nbsp; &nbsp;\n", $1, $1, substr($0, length($1)+1, length($0) ) );
}
