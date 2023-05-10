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
    echo "Curl succeeded for /users/"
else
    echo "Curl failed for /users/"
fi