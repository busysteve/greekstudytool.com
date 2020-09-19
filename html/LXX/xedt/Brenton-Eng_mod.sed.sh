cat eng-Brenton_usfx.xml | sed 's/\(<v.*\)\/\(.*\)/\1\2<\/v>/' | sed 's/<v /<ve /' | sed 's/<ve \/>/<\/ve>/' | sed 's/<\/v>//' > Brenton-Eng_mod.xml
