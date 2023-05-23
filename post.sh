curl -X POST -d '{"name": "Name", "email": "5@gmail.com"}' -H 'Content-Type: application/json' -s http://localhost:3050/users/ | jq

if [ $? -eq 0 ]
then
    echo "First test was successful"
else
    echo "First test FAILED"
fi