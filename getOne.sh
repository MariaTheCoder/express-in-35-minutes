curl -s http://localhost:3050/users/2 | jq

if [ $? -eq 0 ]
then
    echo "First test was successful"
else
    echo "First test FAILED"
fi



curl -o /dev/null -s -w "%{http_code}\n" http://localhost:3050/users/2 | jq

if [ $? -eq 0 ]
then
    echo "Second test was successful"
else
    echo "Second test FAILED"
fi