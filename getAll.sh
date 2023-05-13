curl -s http://localhost:3050/ | jq

if [ $? -eq 0 ]
then
    echo "First test was successful"
else
    echo "First test FAILED"
fi


curl -s http://localhost:3050/users/ | jq

if [ $? -eq 0 ]
then
    echo "Second test was successful"
else
    echo "Second test FAILED"
fi