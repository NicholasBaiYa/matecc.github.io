
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <script src="https://cdn.bootcss.com/jquery/3.2.1/jquery.js"></script>
    <title>ACFUN 爱一直在</title>

    <style>
        *{
            padding: 0;
            margin: 0;
        }
        #xmas {
            position: fixed;
            top: 0;
            z-index: 1;
            pointer-events: none;
        }
        body {
            min-height: 100%;
            color: #bfbfbf;
            background: #000;
        }
        a {
            color: #bfbfbf;
        }
    </style>
</head>

<body>
    <canvas id="xmas"></canvas>

    <h1>Mate丶CC</h1>
<ul>
    <li><a href="matecc/ttfruit.html">天天水果登陆界面</a></li>
    <li></li>
    <li></li>
</ul>



<script src="matecc/js/canvas.js"></script>

<script>
    $.get('/login',{"acc":"root","pass":"123456"},function(res){
        console.log(res);
    },'json');
</script>

</body>

</html>
