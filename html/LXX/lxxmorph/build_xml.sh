cat *.mlxx | cut -c1-53 | awk -f lex_first.awk  | awk -f convert2greek-X.awk  > lxx.xml
