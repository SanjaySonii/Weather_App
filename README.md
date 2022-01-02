<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Weather_App</title>
    <link rel="stylesheet" href="project21_weatherApp.css">
    <style>
        @media screen and (max-width : 615px) {
            .weather {
                font-size: 2.5rem;
            }
            
            img {
                width: 7rem;
                height: 7rem;
            }
        }
        @media screen and (max-width : 500px) {
            .container{
                width: 80%;
            }
            input{
                width: 90%;
            }
            #cityList li{
                width: 15rem;
            }
        }
        @media screen and (max-width : 372px) {
            .container{
                width: 85%;
            }
            .weather {
                font-size: 1.5rem;
            }
            img {
                width: 6rem;
                height: 6rem;
            }
        }
        @media screen and (max-width : 310px) {
            
            #cityList li{
                width: 10rem;
            }
        }
    </style>
</head>

<body>
    <div class="container">
        <div id="content">
            <main id="main">
            </main>
            <hr>
            <details open>
                <summary>Add New City</summary>
                <form id="addCityForm">
                    <input type="text" name="CityName" id="CityName" placeholder="Enter City Name here">
                    <input type="submit" value="Add City" id="addCityFormSubmitBtn">
                </form>
            </details>
            <details open>
                <summary>My Cities</summary>
                <ul id="cityList"></ul>
            </details>
        </div>
        <script src="project21_weatherApp.js"></script>
    </div>
</body>

</html>
