<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
        
        <!-- Styles -->
        <link rel="shortcut icon" href="{{ asset('image/calendar.png') }}">
    </head>
    <body>
        <div class="flex-center position-ref full-height">
           
            <div id="eventslist"></div>
           
        </div>
    </body>

    <script src="{{mix('js/app.js')}}" ></script>
</html>
