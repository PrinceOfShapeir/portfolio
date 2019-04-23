#!/bin/bash bash
RESULT=$((${*:1:1}*(${*:2:1}+${*:3:1})))
echo project-$RESULT{/src/index.js,/src/util.js,/dest/index.js,/dest/util.js,/test/index.js,/test/util.js}
