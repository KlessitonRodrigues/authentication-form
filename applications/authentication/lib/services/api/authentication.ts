import { axiosClient } from '@/lib/config/axiosClient';
import { Auth } from '@packages/common-types';

export const emailSignInReq = async (data: Auth.SignInRequest) => {
  try {
    return (await axiosClient.post('auth/signin', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const googleSignInReq = async (data: Auth.GoogleSignInRequest) => {
  try {
    return (await axiosClient.post('auth/google', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const githubSignInReq = async (data: Auth.GithubSignInRequest) => {
  try {
    return (await axiosClient.post('auth/github', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const emailSignUpReq = async (data: Auth.SignUpRequest) => {
  try {
    return (await axiosClient.post('auth/signup', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const sendRecoveryCodeReq = async (data: Auth.SendRecoveryCodeRequest) => {
  try {
    return (await axiosClient.post('auth/send-recovery-code', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const resetPasswordReq = async (data: Auth.ResetPasswordRequest) => {
  try {
    return (await axiosClient.post('auth/reset-password', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const verifyRecoveryCodeReq = async (data: Auth.VerifyRecoveryCodeRequest) => {
  try {
    return (await axiosClient.post('auth/verify-recovery-code', data))?.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};
