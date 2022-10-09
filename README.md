<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test</title>
    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
    <div class="Page">
        <h2 id="clock">00:00:00</h2>
        <div id="weather" class="weather">
            <span></span>
            <span></span>
        </div>
        <form class="login hidden" id="login-form">
            <input class="write" required maxlength="15" type="text" placeholder="What is your name?"/>
            <input type="submit" class="button" value="Log in"/>
        </form>
        <h1 class="hidden" id="greeting"></h1>
        <form id="todo-form" class="todo-form">
            <input type="text" placeholder="Write down everything you like" required />
        </form>
        <ul id="todo-list" class="todo-list">
            <span></span>
            <span></span>
        </ul>
    </div>
    <script src="app.js"></script>
    <script src="background.js"></script>
    <script src="time.js"></script>
    <script src="todo.js"></script>
    <script src="weather.js"></script>
</body>
</html>
