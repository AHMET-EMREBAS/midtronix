import { ITask } from '@mdtx/common';
import { TableRow } from '@mdtx/material/table';

export const TASK_COLUMNS: TableRow<ITask>[] = [
  { name:'id'},
  { name: 'name' }, { name: 'description' }, { name: 'due' }, { name: 'startDate' }, { name: 'finishDate' }, { name: 'difficulty' }, { name: 'status' },{name:'assignees', map:(v:ITask)=>v.assignees?.map(e=>e.username).join(', '),
  { name: 'createdAt', label: 'Created At' },
  { name: 'updatedAt', label: 'Updated At' },
  { name: 'deletedAt', label: 'Deleted At' }
];

export const TASK_DISPLAY_COLUMNS: TableRow<ITask>[] = [ ...TASK_COLUMNS ];



export const TASK_PAGE_SIZE = 4;
