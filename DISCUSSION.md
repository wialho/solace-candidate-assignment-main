Things to do next (trying to be honest with the 2 hour time limit, im probably slight over as is):

1. write some tests - I would install jest, on the FE i would check the page group for all the buttons rendering when they should, on the table i would check a mix of rows, on the page i would check that input is clearing and the correct network requests are being sent. On the BE I would write some search term queries to test the index/generated column (would fail). I would also add some order tests.

2. error handling on the api requests (FE and BE)

3. authentication (this doesnt seem like data I would want to expose) -> to do this and part of 2 above I would probably install axios and setup a configuration/data handling layer for all my api calls. I would also use react-query to take advantage of caching and further reduce the load on the BE

4. Obviously better design is needed as well as more crud functionality
5. if this was more than one page I would add some routing via react router.

apologies if the BE is ham handed, I use postgres all the time but I typically use dotnet, python, and have a side client who uses PHP so node is farther down the list of my BE tech.
