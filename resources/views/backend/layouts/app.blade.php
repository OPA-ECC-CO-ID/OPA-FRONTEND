<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    {{--
    @if (env('IS_DEMO'))
        <x-demo-metas></x-demo-metas>
    @endif --}}
    @isset($jsfile)
        @vite($jsfile)
    @else
        @vite('resources/js/pages/backend/app-backend.js')
    @endif
    
    <link rel="apple-touch-icon" sizes="76x76" href="{{ Vite::asset('resources/img/backend/apple-icon.png') }}">
    <link rel="icon" type="image/png" href="{{ Vite::asset('resources/img/backend/favicon.png') }}">
    <title>
        BackOffice Ecc.co.id
    </title>
    <!--     Fonts and icons     -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700" rel="stylesheet" />
    <!-- Nucleo Icons -->
    <!-- <link href="../assets/css/nucleo-icons.css" rel="stylesheet" /> -->
    <!-- <link href="../assets/css/nucleo-svg.css" rel="stylesheet" /> -->
    <!-- Font Awesome Icons -->
    {{-- datatables --}}
    <link rel="stylesheet" href="https://cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css">
    <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
    {{-- Jquery --}}
    {{-- <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> --}}
    {{-- cookie --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/js-cookie/3.0.1/js.cookie.min.js"></script>

    <!-- <link href="../assets/css/nucleo-svg.css" rel="stylesheet" /> -->
    <!-- CSS Files -->
    <!-- <link id="pagestyle" href="../assets/css/soft-ui-dashboard.css?v=1.0.3" rel="stylesheet" /> -->
    {{--
    jika ingin menyertakan bootstrap file javascript maka isikan nama file js kedalam var `$jsfile` pada action.
    contoh:
    ```
    $jsfile = 'resources/js/pages/login/login.js';
    return view('backend/session.login-session', compact('jsfile'));
    ```
    --}}
    <script>
        let APP_URL = "{{ env('APP_URL') }}";
        let API_URL = "{{ env('API_URL') }}";
    </script>

    </head>

    <body class="g-sidenav-show  bg-gray-100">
        {{-- @auth
        @yield('auth')
    @endauth --}}
        @guest
            @yield('guest')
        @endguest
        @if (session()->has('success'))
            <div x-data="{ show: true }" x-init="setTimeout(() => show = false, 4000)" x-show="show"
                class="position-fixed bg-success rounded right-3 text-sm py-2 px-4">
                <p class="m-0">{{ session('success') }}</p>
            </div>
        @endif

        <!--   Core JS Files   -->
        <!-- <script src="../assets/js/core/popper.min.js"></script>
                                                                                    <script src="../assets/js/core/bootstrap.min.js"></script>
                                                                                    <script src="../assets/js/plugins/perfect-scrollbar.min.js"></script>
                                                                                    <script src="../assets/js/plugins/smooth-scrollbar.min.js"></script>
                                                                                    <script src="../assets/js/plugins/fullcalendar.min.js"></script>
                                                                                    <script src="../assets/js/plugins/chartjs.min.js"></script> -->

        <script>
            var win = navigator.platform.indexOf('Win') > -1;
            if (win && document.querySelector('#sidenav-scrollbar')) {
                var options = {
                    damping: '0.5'
                }
                Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
            }
        </script>

        <!-- Github buttons -->

        <script async defer src="https://buttons.github.io/buttons.js"></script>
        {{-- Sweetalert --}}
        {{-- <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script> --}}
        <!-- Control Center for Soft Dashboard: parallax effects, scripts for the example pages etc -->
        <!-- <script src="../assets/js/soft-ui-dashboard.min.js?v=1.0.3"></script> -->
        {{-- script datatables --}}
        {{-- <script src="https://cdn.datatables.net/1.13.6/js/jquery.dataTables.min.js"></script> --}}
        {{-- jquery --}}
        {{-- <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script> --}}

    </body>

    </html>
