cat 01.Gen.1.mlxx | cut -c1-53 | awk -f lex_first.awk  | awk -f convert2greek-X.awk  > genlxx.xml
