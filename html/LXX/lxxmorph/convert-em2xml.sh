

cat $1 | cut -c1-53 | awk -f lex_first.awk  | awk -f convert2greek-X.awk  > $2/$1.xml
