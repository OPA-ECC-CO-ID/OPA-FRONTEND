@servers(['web' => 'opaeccc@sv2.ecc.co.id -p 2022'])

@setup
    $repository = 'git@gitlab.ecc.co.id:swevel/opa.git';
    $releases_dir = '/home/opaeccc/releases';
    $app_dir = '/home/opaeccc';
    $release = date('dmYHis');
    $new_release_dir = $releases_dir .'/'. $release;
@endsetup

@story('deploy')
    clone_repository
    run_composer
    bundle_assets
    update_symlinks
@endstory

@task('clone_repository')
    echo 'Cloning repository'
    [ -d {{ $releases_dir }} ] || mkdir {{ $releases_dir }}
    git clone --depth 1 {{ $repository }} {{ $new_release_dir }}
    echo 'Done'
@endtask

@task('run_composer')
    echo "Starting deployment ({{ $release }})"
    cd {{ $new_release_dir }}
    php82 /usr/local/bin/composer install --prefer-dist --no-scripts -q -o
    echo 'Done'
@endtask

@task('bundle_assets')
    echo "Build Bundle ({{ $release }})"
    cd {{ $new_release_dir }}
    npm install
    npm run build
    echo 'Done'
@endtask

@task('update_symlinks')
    echo "Linking storage directory"
    rm -rf {{ $new_release_dir }}/storage
    ln -nfs {{ $app_dir }}/main/storage {{ $new_release_dir }}/storage
    echo 'Done'    echo 'Linking .env file'
    ln -nfs {{ $app_dir }}/main/.env {{ $new_release_dir }}/.env
    echo 'Done'    echo 'Linking current release'
    ln -nfs {{ $new_release_dir }} {{ $app_dir }}/current
    echo 'Done'
@endtask
