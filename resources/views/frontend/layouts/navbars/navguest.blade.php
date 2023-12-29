<nav class="navbar navbar-expand-lg navbar-light bg-white" style=" z-index: 999;">
    <div class="container">
        <a class="navbar-brand" href="{{ route('index') }}">
            <img src="{{ Vite::asset('resources/img/frontend/logo-ecc.svg') }}" alt="gambar"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link" aria-current="page" href="{{ route('index') }}">Beranda</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        Assesmen
                    </a>
                    <ul class="dropdown-menu text-center">
                        <li><a class="dropdown-item" href="{{ route('assesment') }}">Personal Assesment</a></li>
                        <li><a class="dropdown-item" href="{{ route('skill-assesment') }}">Skill Assesnent</a></li>
                    </ul>
                </li>

                <li class="nav-item vertical-line"></li>

                <li>
                    <a href="{{route('loginUser')}}" class="btn btn-custom"><i class="bi bi-box-arrow-in-right"></i> Login</a>
                </li>
            </ul>
        </div>
    </div>
</nav>