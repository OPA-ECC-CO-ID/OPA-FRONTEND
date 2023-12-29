<!-- Navbar -->

<nav class="navbar navbar-expand-lg navbar-light bg-white" style=" z-index: 999;">
    <div class="container">
        <a class="navbar-brand" href="{{ route('index') }}">
            <img src="{{ Vite::asset('resources/img/frontend/logo-ecc.svg') }}" alt="gambar"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="{{ route('index') }}">Beranda</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Assesmen
                    </a>
                    <ul class="dropdown-menu dropdown-menu-centered text-center">
                        <li><a class="dropdown-item" href="{{ route('assesment') }}">Personal Assesment</a></li>
                        <li><a class="dropdown-item" href="{{ route('skill-assesment') }}">Skill Assesnent</a></li>
                    </ul>
                </li>
                @if(isset($_COOKIE['user_id']) && isset($_COOKIE['jwtUser']))
                <li class="nav-item dropdown">
                    <a class="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Notifikasi
                        <i class="notifikasi bi bi-0-square-fill"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-centered text-center">
                        <li><a class="dropdown-item" href="#">Belum ada notifikasi</a></li>
                    </ul>
                </li>
                <li class="nav-item vertical-line"></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownUser" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person-circle" id="nameUser"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-centered text-center" aria-labelledby="navbarDropdownUser">
                        <li><a class="dropdown-item" href="{{ route('profile-user') }}">Profil</a></li>
                        <li><a class="dropdown-item" href="{{ route('setting') }}">Pengaturan</a></li>
                        <li><a class="dropdown-item" href="{{ url('/logoutUser') }}" style="color: red;">Keluar</a></li>
                    </ul>
                </li>
                @else
                <li class="nav-item vertical-line"></li>
                <li>
                    <a href="{{ route('loginUser') }}" class="btn btn-custom"><i class="bi bi-box-arrow-in-right"></i> Login</a>
                </li>
                @endif

            </ul>
        </div>
    </div>
</nav>


{{-- <script>
    // Ambil nilai dari localStorage
    var namaPengguna = localStorage.getItem("NAME_USER");

    // Cek jika nilai tidak null, kemudian masukkan ke dalam elemen dengan id 'userDropdown'
    if (namaPengguna) {
        document.getElementById('nameUser').innerHTML = ' ' + namaPengguna + '';
    }

</script> --}}

<!-- End Navbar -->
