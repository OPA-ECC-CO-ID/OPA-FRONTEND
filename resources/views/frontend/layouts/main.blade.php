<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ecc.co.id</title>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap">

    <script>
        let APP_URL = "{{ env('APP_URL') }}";
        let API_URL = "{{ env('API_URL') }}";
    </script>

    @isset($jsfile)
        @vite($jsfile)
    @else
        @vite('resources/js/pages/backend/app-backend.js')
        @endif
    </head>

    <body>

        @yield('content')

    </body>

    </html>
