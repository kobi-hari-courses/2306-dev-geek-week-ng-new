import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { firstValueFrom } from 'rxjs';

export const authGuard: CanActivateFn = async () => {
  const service = inject(AuthService);
  await new Promise(res => setTimeout(res, 500));
  const res = await firstValueFrom(service.getStatus());
  return res;
};
