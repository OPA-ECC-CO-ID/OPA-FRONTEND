<nav id="sidebar" class="col-lg-3 d-md-block bg-white sidebar mt-3">
    <ul class="nav flex-column align-items-center">
        <li class="profile-picture">
            <div class="d-flex align-items-center">
                <div class="profile-picture">
                    {{-- belum di remove --}}
                    <img id="profile-image" class="rounded-circle border"
                        src="{{ Vite::asset('resources/img/frontend/unisex.png') }}" alt="">
                    {{-- tampilkan ketika di remove                    --}}
                    <img id="profile-no-image" class="rounded-circle border"
                        src="{{ Vite::asset('resources/img/frontend/unisex.png') }}" alt="">
                    <div class="photo">
                        <ul>
                            <li>
                                <a href="#" class="bi bi-camera"></a>
                                <ul class="list-group">
                                    <li class="list-group-item">
                                        <label for="fileInput" class="custom-file-label">Upload Foto</label>
                                        <input type="file" class="custom-file-input" id="fileInput" accept="image/*">
                                    </li>
                                    <li class="list-group-item">
                                        <a href="" id="removeImage">Remove</a>
                                    </li>
                                    <li class="list-group-item">
                                        <a href="">Cancel</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>

        <span class="mt-3 profile-name" id="profile-name"></span>
    </ul>
    <hr class="hr-line">
    <div class="list-group sidebar-profile">
        <a href="{{ route('profile-user') }}" class="list-group-item list-group-item-action"><i
                class="bi bi-person"></i>Profile</a>
        <a class="list-group-item list-group-item-action dropdown-btn"><i class="bi bi-building-up"></i>Pengembangan
            Diri
            <i class="bi bi-chevron-up"></i>
        </a>
        <div class="dropdown-content">
            <a href="{{ route('personal-assesment-result') }}" class="list-group-item list-group-item-action"
                style="color: black">Personal Assesmen</a>
            <a href="#" class="list-group-item list-group-item-action" style="color: black">Skill
                Assesmen</a>
        </div>
        <a href="{{ route('recommendation') }}" class="list-group-item list-group-item-action"><i
                class="bi bi-briefcase"></i>Rekomendasi Karir</a>
        <a href="{{ route('complete-report') }}" class="list-group-item list-group-item-action"><i
                class="bi bi-folder-symlink"></i>Complete Report</a>
    </div>
</nav>
