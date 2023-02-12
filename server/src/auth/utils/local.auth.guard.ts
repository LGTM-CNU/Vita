import { AuthGuard } from '@nestjs/passport';
import { Controller, Injectable } from '@nestjs/common';

@Controller()
export class LocalAuthGuard extends AuthGuard('local') {}
