curl -X DELETE -s http://localhost:3050/users/2 | jq

if [ $? -eq 0 ]
then
    echo "First test was successful"
else
    echo "First test FAILED"
fi