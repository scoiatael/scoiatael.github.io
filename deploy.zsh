TMP=/tmp/scoiatael.github.io

set -e
[ -d $TMP ] && rmdir $TMP
middleman build --clean
mv build/ $TMP
git checkout master
rm -rfv ./*
mv -v $TMP/*(N) ./
rm -rf $TMP
