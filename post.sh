curl -X POST -d '{"name": "Name", "Ids": 5}' -H 'Content-Type: application/json' -s http://localhost:3050/users/ | jq

if [ $? -eq 0 ]
then
    echo "First test was successful"
else
    echo "First test FAILED"
fi