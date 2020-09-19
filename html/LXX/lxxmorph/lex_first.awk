{
    if( length($0) > 37 )
    {
        print trim(substr( $0, 37  )) " " substr( $0, 1, 36 );
    } 
    else
        print;
}

function trim( word )
{
    l=length(word);
    for( i=1; i<l; i++ )
        if( substr( word, i, 1 ) == " " )
            return substr( word, 0, i-1 );

    return word;
}
