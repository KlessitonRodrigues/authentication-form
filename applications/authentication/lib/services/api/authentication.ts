import { axiosClient } from '@/lib/config/axiosClient';
import { Auth } from '@packages/common-types';

export const emailSignInReq = async (data: Auth.SignInRequest) => {
  try {
    const path = 'auth/signin';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const googleSignInReq = async (data: Auth.GoogleSignInRequest) => {
  try {
    const path = 'auth/google';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const githubSignInReq = async (data: Auth.GithubSignInRequest) => {
  try {
    const path = 'auth/github';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const emailSignUpReq = async (data: Auth.SignUpRequest) => {
  try {
    const path = 'auth/signup';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const sendRecoveryCodeReq = async (data: Auth.SendRecoveryCodeRequest) => {
  try {
    const path = 'auth/send-recovery-code';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const resetPasswordReq = async (data: Auth.ResetPasswordRequest) => {
  try {
    const path = 'auth/reset-password';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};

export const verifyRecoveryCodeReq = async (data: Auth.VerifyRecoveryCodeRequest) => {
  try {
    const path = 'auth/verify-recovery-code';
    const res = await axiosClient.post(path, data);
    return res.data;
  } catch (error: any) {
    throw error.response?.data?.error || error;
  }
};
