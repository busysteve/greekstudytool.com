BEGIN{
    FS=" |:";

    while ( (getline < "strongs2.txt") > 0 )
    {

        a_strongs[$2] = $1;


        strongs[$3] = $1;

        #print $1, "\t|\t", $2, "\t|\t", word;

        #printf( "%10s | %20s | %20s\n", $1, $2, word );
        printf( "%s:%s:%s\n", $1, $2, $3 );

    }
}
{
    if( /:/ )
    {   
        if( $2 != ch )
            printf("\n\t],\n\t[ // %s %s\n", $1, $2 );
        
        if( $3 != vr )
            printf("\n\t\t],\n\t\t[ // %s %s:%s\n\t\t\t", $1, $2, $3 );
        
        vr = $3;
        ch = $2;
    }
    else if( length($0) < 1 )
    {
        # do nothing
    }
    else
    {

        #word = accented_word = lex_word = lex_accented_word = "";

        lex_word = build_accent_word( $1, 0 );
        lex_accented_word = build_accent_word( $1, 1 );

        word = build_accent_word( $2, 0 );
        accented_word = build_accent_word( $2, 1 );

        #print "** " $2 " **";

        printf("[\"%s\", \"%s\", \"%s\" ], ", word, accented_word, strong_lookup( lex_accented_word, lex_word ) );
    }
}
END{ print ""; }

function strong_lookup( awd, wd )
{
    
    w = "";

    w = a_strongs[awd];

    if( length( w ) < 1 )
        w = strongs[wd];

    if( length( w ) < 1 )
        w = "ND";

    return w;
    
}

function build_accent_word( raw, type )
{
        wrd = "";
        awrd = "";

        len = length(raw);
        for( i=1; i <= len; i++ )
        {
            #if( substr( raw, i+1, 1 ) == "=" ) letter = sprintf("%c",(0x0311) ); # circumflex acc.

            letter = "";
            accent = 0;
 
            switch( substr( raw, i, 1 ) )
            {
                case "A": letter = "α" ; break;
                case "B": letter = "β" ; break;
                case "G": letter = ( "γ" ); break;
                case "D": letter = ( "δ" ); break;
                case "E": letter = ( "ε" ); break;
                case "Z": letter = ( "ζ" ); break;
                case "H": letter = ( "η" ); break;
                case "Q": letter = ( "θ" ); break;
                case "I": letter = ( "ι" ); break;
                case "K": letter = ( "κ" ); break;
                case "L": letter = ( "λ" ); break;
                case "M": letter = ( "μ" ); break;
                case "N": letter = ( "ν" ); break;
                case "C": letter = ( "ξ" ); break;
                case "O": letter = ( "ο" ); break;
                case "P": letter = ( "π" ); break;
                case "R": letter = ( "ρ" ); break;
                case "J": letter = ( "ς" ); break;
                case "S": if( i == len ) letter = ( "ς" ); else letter = ( "σ" ); break;
                case "T": letter = ( "τ" ); break;
                case "U": letter = ( "υ" ); break;
                case "F": letter = ( "φ" ); break;
                case "X": letter = ( "χ" ); break;
                case "Y": letter = ( "ψ" ); break;
                case "W": letter = ( "ω" ); break;
                case "/": accent = 1; letter = sprintf("%c",(0x0300) ); break;  # acute accent
                case "\\": accent = 1; letter = sprintf("%c",(0x0301) ); break; # grave accent
                case ")": accent = 1; letter = sprintf("%c",(0x0313) ); break;  # smooth breathing
                case "(": accent = 1; letter = sprintf("%c",(0x0314) ); break;  # rough breathing
                #case "=": accent = 1; letter = sprintf("%c",(0x0311) ); break; # circumflex acc.    
            }

            if( accent != 1 )
                wrd = wrd letter;

            awrd = awrd letter;
            
        }

    if( type == 0 )
        return wrd;
    else
        return awrd;

}





