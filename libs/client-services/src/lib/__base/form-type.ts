import { FormControl } from '@angular/forms';

export type FormType<T> = Required<Record<keyof T, FormControl>>;
