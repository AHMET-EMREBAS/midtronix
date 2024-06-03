import {
  Keys,
  PickPartial,
  IID,
  IIDString,
  ITimestamp,
  ITimestampString,
  EntityMetadata,
} from '../../common';

/**
 * @param name
 */
export interface ITemplate extends ITimestamp, IID {
  name: string;
}

export type ITemplateRaw = ITemplate;

/**
 * @param name
 */
export interface ITemplateView extends ITimestampString, IIDString {
  templateId: string;
  name: string;
}

/**
 * Which fields are included in the Create-Template Form
 */
export type CreateTemplateFields = Keys<ITemplate, 'name'>;

/**
 * Which fields are included in the Update-Template Form
 * Id field is not for update but finding the item
 */
export type UpdateTemplateFields = Keys<ITemplate, 'name' | 'id'>;

/**
 * Create Template
 */
export type ICreateTemplateDto = Pick<ITemplate, CreateTemplateFields>;

/**
 * Update Template
 */
export type IUpdateTemplateDto = PickPartial<ITemplate, UpdateTemplateFields>;

export const TemplateOptions: EntityMetadata<ITemplateView> = {
  id: { name: 'id', label: '#' },
  name: { name: 'name' },
  templateId: { name: 'templateId' },
  createdAt: {
    name: 'createdAt',
    label: 'created',
    value(value) {
      if (value.createdAt) {
        return new Date(value.createdAt).toLocaleDateString();
      }
      return '';
    },
  },
  updatedAt: {
    name: 'updatedAt',
    label: 'updated',
    value(value) {
      if (value.updatedAt) {
        return new Date(value.updatedAt).toLocaleDateString();
      }
      return '';
    },
  },
  deletedAt: {
    name: 'deletedAt',
    label: 'deleted',
    value(value) {
      if (value.deletedAt) {
        return new Date(value.deletedAt).toLocaleDateString();
      }
      return '';
    },
  },
};
