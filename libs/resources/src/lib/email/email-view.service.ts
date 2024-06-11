import { EmailView } from '@mdtx/entities';
import { Injectable } from '@nestjs/common';
import { BaseViewEntityService } from '@mdtx/core';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmailViewService extends BaseViewEntityService<EmailView> {
  constructor(@InjectRepository(EmailView) repo: Repository<EmailView>) {
    super(repo);
  }
}
