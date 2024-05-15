import { IMessage } from '@mdtx/common';

export const MESSAGE_COLUMNS: (keyof IMessage)[] = ['id', 'message'];
export const MESSAGE_DISPLAY_COLUMNS: (keyof IMessage)[] = ['id', 'message'];
export const MESSAGE_PAGE_SIZE = 500;
