BEGIN {
	cata = "";
}
{
	if( ($1 !~ /[0-1a-zA-Z]/) )
	{
		p = match($0, ") [a-zA-Z]");

		printf( "'%s','%s','%s'\n", cata, $1, substr( $0, p) );
	}
	else if( ($1 ~ /\[/) )
	{
		cata = substr( $0, 0, index($0, "]" ) );
	}

}
