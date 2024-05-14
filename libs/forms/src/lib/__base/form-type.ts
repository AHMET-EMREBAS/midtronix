import { FormControl } from '@angular/forms';

export type FormType<T> = Partial<Record<keyof T, FormControl>>;
