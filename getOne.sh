curl -s http://localhost:3050/users/4 | jq

if [ $? -eq 0 ]
then
    echo "Curl succeeded at getting user with the id of 1"
else
    echo "Curl failed at getting user with the id of 1"
fi



curl -o /dev/null -s -w "%{http_code}\n" http://localhost:3050/users/4 | jq

if [ $? -eq 0 ]
then
    echo "HTTP status code was successfully sent to the client from the server"
else
    echo "HTTP status code was NOT sent..."
fi