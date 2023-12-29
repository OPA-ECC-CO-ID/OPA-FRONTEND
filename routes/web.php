<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ResetController;
use App\Http\Controllers\RegisterController;
use App\Http\Controllers\SessionsController;
use App\Http\Controllers\Backend\UserController;
use App\Http\Controllers\ChangePasswordController;
use App\Http\Controllers\Backend\ProfileController;
use App\Http\Controllers\Backend\DashboardController;
use App\Http\Controllers\Backend\Ipedia\ZoneProvince;
use App\Http\Controllers\frontend\AssesmentController;
use App\Http\Controllers\frontend\LoginUserController;
use App\Http\Controllers\Backend\Profile\BioController;
use App\Http\Controllers\Backend\UserProfileController;
use App\Http\Controllers\frontend\OnboardingController;
use App\Http\Controllers\frontend\LandingPageController;
use App\Http\Controllers\frontend\SettingUserController;
use App\Http\Controllers\Backend\Ipedia\MajorsController;
use App\Http\Controllers\Backend\Profile\SkillController;
use App\Http\Controllers\Backend\Profile\UsersController;
use App\Http\Controllers\frontend\RegisterUserController;
use App\Http\Controllers\Backend\Ipedia\ZoneCityController;
use App\Http\Controllers\Backend\Profile\LastEduController;
use App\Http\Controllers\frontend\CompleteReportController;
use App\Http\Controllers\frontend\Profile\SkillsController;
use App\Http\Controllers\frontend\SkillAssesmentController;
use App\Http\Controllers\Backend\Icareer\UserTestController;
use App\Http\Controllers\Backend\Icareer\VariableController;
use App\Http\Controllers\frontend\Icareer\IcareerController;
use App\Http\Controllers\Backend\Icareer\StatementController;
use App\Http\Controllers\Backend\Icareer\UserInputController;
use App\Http\Controllers\Backend\Ipedia\ZoneCountryController;
use App\Http\Controllers\Backend\Personality\ConfigController;
use App\Http\Controllers\Backend\Personality\InterpController;
use App\Http\Controllers\Backend\Ipedia\UniversitiesController;
use App\Http\Controllers\Backend\CareerReadiness\TestController;
use App\Http\Controllers\Backend\Ipedia\EducationTypeController;
use App\Http\Controllers\frontend\RecommendationCareerControler;
use App\Http\Controllers\frontEnd\Entry\ForgotPasswordController;
use App\Http\Controllers\Backend\CareerReadiness\AspectController;
use App\Http\Controllers\Backend\CareerReadiness\SettingController;
use App\Http\Controllers\frontend\PersonalAsessmentResultController;
use App\Http\Controllers\frontend\Personality\PersonalityController;
use App\Http\Controllers\frontend\Profile\ProfileController as FrontendProfileController;
use App\Http\Controllers\Backend\Personality\InterpCategoryController;
use App\Http\Controllers\Backend\Personality\StatementChoiseController;
use App\Http\Controllers\Backend\CareerReadiness\InterpAspectController;
use App\Http\Controllers\Backend\CareerReadiness\InterpGeneralController;
use App\Http\Controllers\Backend\Personality\PersonalityConfigController;
use App\Http\Controllers\Backend\CareerReadiness\StatementChoiceController;
use App\Http\Controllers\frontend\CareerReadiness\CareerReadinessController;
use App\Http\Controllers\frontend\Profile\BioController as FrontEndBioController;
use App\Http\Controllers\Backend\Icareer\ConfigController  as IcareerConfigController;
use App\Http\Controllers\frontend\Profile\LastEduController as FrontEndLastEduController;
use App\Http\Controllers\Backend\Personality\UserTestController as PersonalityUserTestController;
use App\Http\Controllers\Backend\CareerReadiness\StatementController as CareerReadinessStatementController;
use App\Http\Controllers\Backend\CompleteReport\ItemAssesmentController;
use App\Http\Controllers\Backend\CompleteReport\SettingController as CompleteReportSettingController;
use App\Http\Controllers\Backend\CompleteReport\UserOrderController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// =========================================================================
// ==============     BACKOFFICE   =========================================
// =========================================================================

// Route::get('/', [HomeController::class, 'home']);
Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');
Route::get(
    'user-management',
    [UserController::class, 'index']
);
Route::get(
    'profile',
    [ProfileController::class, 'index']
);
Route::get('/user-profile', [UserProfileController::class, 'index']);
Route::get('/logout', [SessionsController::class, 'destroy']);
Route::group(['middleware' => 'guest'], function () {
    Route::get('/register', [RegisterController::class, 'create']);
    Route::post('/register', [RegisterController::class, 'store']);
    Route::get('/login', [SessionsController::class, 'create'])->name('login');
    Route::post('/session', [SessionsController::class, 'store']);
    Route::get('/login/forgot-password', [ResetController::class, 'create']);
    Route::post('/forgot-password', [ResetController::class, 'sendEmail']);
    Route::get('/reset-password/{token}', [ResetController::class, 'resetPass'])->name('password.reset');
    Route::post('/reset-password', [ChangePasswordController::class, 'changePassword'])->name('password.update');
});
//Route::get('/test-demo', [DemoController::class, 'test']);

// Route::get('/demo/index', [DemoController::class, 'index']);

// Data Member
Route::get('users', [UsersController::class, 'index']);
Route::get('profile/bio', [BioController::class, 'index']);
Route::get('profile/skill', [SkillController::class, 'index']);
Route::get('profile/last-edu', [LastEduController::class, 'index']);
// Route::get('career-readiness/aspect', [AspectController::class, 'index']);
Route::get('career-readiness/interpretation-aspect', [InterpAspectController::class, 'index']);
Route::get('career-readiness/interpretation-general', [InterpGeneralController::class, 'index']);
Route::get('career-readiness/setting', [SettingController::class, 'index']);
Route::get('career-readiness/statement-choice', [StatementChoiceController::class, 'index']);
Route::get('career-readiness/statement', [CareerReadinessStatementController::class, 'index']);
Route::get('career-readiness/user-test', [TestController::class, 'index']);
Route::get('personality/config', [ConfigController::class, 'index']);
Route::get('personality/interp', [InterpController::class, 'index']);
Route::get('personality/interp-category', [InterpCategoryController::class, 'index']);
Route::get('personality/statement-choise', [StatementChoiseController::class, 'index']);
Route::get('personality/user-test', [PersonalityUserTestController::class, 'index']);
Route::get('ipedia/education-type', [EducationTypeController::class, 'index']);
Route::get('ipedia/zone-city', [ZoneCityController::class, 'index']);
Route::get('ipedia/zone-country', [ZoneCountryController::class, 'index']);
Route::get('ipedia/zone-province', [ZoneProvince::class, 'index']);
Route::get('ipedia/majors', [MajorsController::class, 'index']);
Route::get('ipedia/universities', [UniversitiesController::class, 'index']);
Route::get('icareer/config', [IcareerConfigController::class, 'index']);
Route::get('icareer/statement', [StatementController::class, 'index']);
Route::get('icareer/user-test', [UserTestController::class, 'index']);
Route::get('icareer/variable', [VariableController::class, 'index']);
Route::get('complete-report/item-assesment', [ItemAssesmentController::class, 'index']);
Route::get('complete-report/user-order', [UserOrderController::class, 'index']);
Route::get('complete-report/setting', [CompleteReportSettingController::class, 'index']);



// =========================================================================
// ==============     FRONT END   ==========================================
// =========================================================================
Route::get('/', [LandingPageController::class, 'index'])->name('index');

Route::get('/loginUser', [LoginUserController::class, 'loginUser'])->name('loginUser');
Route::get('/registerUser', [RegisterUserController::class, 'registerUser'])->name('registerUser');
Route::get('/onboarding', [OnboardingController::class, 'onboarding'])->name('onboarding');
Route::get('/logoutUser', [LoginUserController::class, 'logoutUser'])->name('logoutUser');

Route::get('/email', [ForgotPasswordController::class, 'email'])->name('email');
Route::get('/password', [ForgotPasswordController::class, 'password'])->name('password');

Route::get('/index', [LandingPageController::class, 'index'])->name('index');
Route::get('/skill-assesment', [SkillAssesmentController::class, 'SkillAssesment'])->name('skill-assesment');

Route::prefix('/user')->middleware('check.auth')->group(function () {
    Route::get('/account/setting', [SettingUserController::class, 'index'])->name('setting');
    Route::get('/password/change', [SettingUserController::class, 'password'])->name('password');
});

Route::prefix('/email')->group(function () {
    Route::get('/', [ForgotPasswordController::class, 'email'])->name('email');
    Route::get('/password', [ForgotPasswordController::class, 'password'])->name('entry.password');
});

Route::prefix('/assesment')->middleware('check.auth')->group(function () {
    Route::get('/', [AssesmentController::class, 'assesment'])->name('assesment');
    Route::get('/completereport/index', [CompleteReportController::class, 'index'])->name('complete-report');
    Route::get('/completereport', [CompleteReportController::class, 'complete'])->name('complete');
});

Route::prefix('/icareer')->middleware('check.auth')->group(function () {
    Route::get('/', [IcareerController::class, 'icareer'])->name('icareer');
    Route::get('/attention', [IcareerController::class, 'attention'])->name('icareer.attention');
    Route::get('/sk', [IcareerController::class, 'sk'])->name('icareer.sk');
    Route::get('/instruction', [IcareerController::class, 'instruction'])->name('icareer.instruction');
    Route::get('/test', [IcareerController::class, 'test'])->name('icareer.test');
    Route::get('/icareer-result', [IcareerController::class, 'result'])->name('icareer.result');
});

Route::prefix('/personality')->middleware('check.auth')->group(function () {
    Route::get('/', [PersonalityController::class, 'personality'])->name('personality');
    Route::get('/attention', [PersonalityController::class, 'attention'])->name('personality.attention');
    Route::get('/sk', [PersonalityController::class, 'sk'])->name('personality.sk');
    Route::get('/instruction', [PersonalityController::class, 'instruction'])->name('personality.instruction');
    Route::get('/test', [PersonalityController::class, 'test'])->name('personality.test');
    Route::get('/personality-result', [PersonalityController::class, 'result'])->name('personality.result');
});

Route::prefix('/careerreadiness')->middleware('check.auth')->group(function () {
    Route::get('/', [CareerReadinessController::class, 'CareerReadiness'])->name('CareerReadiness');
    Route::get('/attention', [CareerReadinessController::class, 'attention'])->name('CareerReadiness.attention');
    Route::get('/sk', [CareerReadinessController::class, 'sk'])->name('CareerReadiness.sk');
    Route::get('/instruction', [CareerReadinessController::class, 'instruction'])->name('CareerReadiness.instruction');
    Route::get('/test', [CareerReadinessController::class, 'test'])->name('CareerReadiness.test');
    Route::get('/careerreadiness-result', [CareerReadinessController::class, 'result'])->name('CareerReadiness.result');
});

Route::prefix('/profile')->middleware('check.auth')->group(function () {
    Route::get('/', [FrontendProfileController::class, 'index'])->name('profile-user');
    Route::get('/profile-bio', [FrontEndBioController::class, 'index'])->name('profile-bio');
    Route::get('/education', [FrontEndLastEduController::class, 'index'])->name('education');
    Route::get('/skills', [SkillsController::class, 'index'])->name('skills');
});

Route::get('/assesmentresult', [PersonalAsessmentResultController::class, 'index'])->name('personal-assesment-result');
Route::get('/recommendation-career', [RecommendationCareerControler::class, 'index'])->name('recommendation');

// HANDLE ERROR 404 AND 500
Route::view('/error-500', 'frontend/errors/pageERROR500')->name('error.500');
Route::view('/error-404', 'frontend/errors/pageERROR404')->name('error.404');
