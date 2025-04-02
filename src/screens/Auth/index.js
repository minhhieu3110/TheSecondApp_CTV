import router from '@router';
import OnboadingScreen from './OnboardingScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import InputOTP from './InputOTP';
import InputInformation from './InputInformation';
import TheQuestionRegister from './TheQuestionRegister';
import UpdateInformation from './UpdateInformation';
import UpdateCitizenID from './UpdateCitizenID';
import CompleteRegister from './CompleteRegister';

export const auth = {
  [router.ONBOARDING_SCREEN]: OnboadingScreen,
  [router.LOGIN_SCREEN]: LoginScreen,
  [router.REGISTER_SCREEN]: RegisterScreen,
  [router.INPUT_OTP]: InputOTP,
  [router.INPUT_INFORMATION]: InputInformation,
  [router.THE_QUESTION_REGISTER]: TheQuestionRegister,
  [router.UPDATE_INFORMATION]: UpdateInformation,
  [router.UPDATE_CITIZEN_ID]: UpdateCitizenID,
  [router.COMPLETE_REGISTER]: CompleteRegister,
};
