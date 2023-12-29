@extends('frontend.layouts.main')

@section('content')
    @include('frontend.layouts.navbars.navlogin')

    <style>
        body {
            background: #F8F8F8;
        }
    </style>

    <div class="container">
        <div class="row">

            @include('frontend.layouts.sidebars.sidebar')

            <div class="col-lg-9 mt-3">
                <div class="container bg-white p-3">
                    <div class="container-completereport">
                        <h3>Complete Report</h3>
                        <span>Apa yang kamu dapat di dalam Complete Report?</span>
                        <ul>
                            <li>
                                <span> Lebih paham dalam mengenali gambaran dirimu secara lebih lengkap.</span>
                            </li>
                            <li>
                                <span> Menjadi lebih memahami tipe kepribadian dirimu.</span>
                            </li>
                            <li>
                                <span> Mengetahui peta potensimu yang menjadi kekuatan dan kelemahanmu.</span>
                            </li>
                            <li>
                                <span> Saran pengembangan untuk dirimu menghadapi dunia kerja.</span>
                            </li>
                        </ul>
                        <div class="pt-10 pb-20">
                            <a href="{{ route('complete') }}" target="_blank" class="btn btn-custom">Contoh Complete Report</a>
                        </div>
                        <table class="table list-assesment-report table-striped mt-4">
                            <thead>
                                <tr class="border-top">
                                    <th scope="col" style="width: 5%;">
                                        <input type="checkbox" id="check-all" value="0">
                                    </th>
                                    <th scope="col" style="width: 20%; text-align:center;">Assesmen</th>
                                    <th scope="col" style="width: 40%; text-align:center;">Status Unduh</th>
                                    <th scope="col" style="width: 35%; text-align:center;">Harga</th>
                                </tr>
                            </thead>
                            <tbody id="assessmentData">
                                {{-- <tr>
                                    <td>
                                        <input type="checkbox" id="check-1"></th>
                                    </td>
                                    <td>Gaya Kepribadian</td>
                                    <td class="text-center"><i class="bi bi-check-circle"></i></td>
                                    <td class="text-center">Rp 40.000</td>
                                </tr> --}}

                            </tbody>
                        </table>
                        <p>*Jika sudah mengerjakan semua tes, silahkan klik semua checkbox test untuk mendapatkan laporan
                            lengkap (complete report)</p>
                        <div class="total-price">
                            <span>Total Harga</span>
                            <h3 id="total-harga">Rp 0</h3>
                            <button type="button" class="btn btn-custom mt-2" disabled id="btn-bayar">Bayar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
