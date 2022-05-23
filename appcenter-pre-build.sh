#!/bin/bash

linesOfEnv=$((`cat .env.example | wc -l`))

# Counts all ENVs starting with RN_ (ReactNative "namespace").
count=0
for var in "${!RN_@}"; do
	count=$((count+1))
done

if [ $linesOfEnv != $count  ]; then
	echo ""
	echo "!!!"
	echo "Incompatible ENVs."
	echo "Check .env.example (${linesOfEnv}) "
	echo "and your build system envs starting with RN_ (${count})"
	exit 1;
fi

# Exported value from AppCenter which
# points to the root folder of the project.
cd ${APPCENTER_SOURCE_DIRECTORY}

# Reads all ENVs starting with RN_ (ReactNative "namespace").
for var in "${!RN_@}"; do
    echo "$var=${!var}" >> .env
done
